"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSocket, disconnectSocket } from "@/lib/socket";
import { ArrowRight, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Message = {
  id: string;
  text: string;
  senderId: string;
  timestamp: number;
};

export default function ChatInterface() {
  const [mounted, setMounted] = useState(false);
  const [socket, setSocket] = useState<ReturnType<typeof getSocket> | null>(null);
  const [status, setStatus] = useState<"connecting" | "matching" | "matched" | "disconnected">("connecting");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [otherTyping, setOtherTyping] = useState(false);
  const [roomId, setRoomId] = useState<string | null>(null);
  const [mySocketId, setMySocketId] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mount check for SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize socket connection
  useEffect(() => {
    if (!mounted) return;

    const socketInstance = getSocket();
    setSocket(socketInstance);
    setMySocketId(socketInstance.id);

    // Connection events
    socketInstance.on("connect", () => {
      console.log("✅ Connected to server");
      setStatus("matching");
      setSocket(socketInstance);
      setMySocketId(socketInstance.id);
      
      // Join matching queue
      socketInstance.emit("join");
    });

    socketInstance.on("disconnect", () => {
      console.log("❌ Disconnected from server");
      setStatus("disconnected");
    });

    // Matching events
    socketInstance.on("waiting", () => {
      console.log("⏳ Waiting for match...");
      setStatus("matching");
    });

    socketInstance.on("matched", (data: { roomId: string }) => {
      console.log("💚 Matched! Room:", data.roomId);
      setRoomId(data.roomId);
      setStatus("matched");
      setMessages([]);
    });

    socketInstance.on("partner_disconnected", () => {
      console.log("👋 Partner disconnected");
      setStatus("matching");
      setMessages([]);
      setRoomId(null);
      setOtherTyping(false);
      
      // Instantly try to find new match (no delay)
      socketInstance.emit("join");
    });

    // Message events
    socketInstance.on("message", (data: { text: string; senderId: string }) => {
      console.log("📩 Message received:", data);
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-${Math.random()}`,
          text: data.text,
          senderId: data.senderId,
          timestamp: Date.now(),
        },
      ]);
    });

    // Typing events
    socketInstance.on("typing", () => {
      setOtherTyping(true);
    });

    socketInstance.on("stop_typing", () => {
      setOtherTyping(false);
    });

    // Cleanup on unmount
    return () => {
      socketInstance.off("connect");
      socketInstance.off("disconnect");
      socketInstance.off("waiting");
      socketInstance.off("matched");
      socketInstance.off("partner_disconnected");
      socketInstance.off("message");
      socketInstance.off("typing");
      socketInstance.off("stop_typing");
      disconnectSocket();
    };
  }, [mounted]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle typing indicator
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputText(value);

    if (!socket || !roomId || status !== "matched") return;

    if (!isTyping && value.trim()) {
      setIsTyping(true);
      socket.emit("typing", { roomId });
    }

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set new timeout to stop typing
    typingTimeoutRef.current = setTimeout(() => {
      if (socket && roomId) {
        setIsTyping(false);
        socket.emit("stop_typing", { roomId });
      }
    }, 1000);
  };

  // Send message
  const sendMessage = () => {
    if (!socket || !roomId || !inputText.trim() || status !== "matched") return;

    const text = inputText.trim();
    
    // Add message to local state immediately (optimistic update)
    const tempId = `temp-${Date.now()}`;
    setMessages((prev) => [
      ...prev,
      {
        id: tempId,
        text,
        senderId: socket.id!,
        timestamp: Date.now(),
      },
    ]);

    // Send to server
    socket.emit("message", { text, roomId });

    // Clear input and stop typing
    setInputText("");
    setIsTyping(false);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    socket.emit("stop_typing", { roomId });

    // Focus input again
    inputRef.current?.focus();
  };

  // Handle Next button (disconnect and rematch)
  const handleNext = () => {
    if (!socket) return;

    socket.emit("next");
    setMessages([]);
    setStatus("matching");
    setRoomId(null);
    setOtherTyping(false);
    setInputText("");
  };

  // Handle End button (disconnect completely)
  const handleEnd = () => {
    if (socket) {
      socket.disconnect();
      disconnectSocket();
    }
    setStatus("disconnected");
    setMessages([]);
    setRoomId(null);
    setOtherTyping(false);
  };

  // Handle Enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!mounted) {
    return null;
  }

  // Render matching/loading state
  if (status === "connecting" || status === "matching") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center space-y-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="mx-auto w-16 h-16"
          >
            <Loader2 className="w-16 h-16 text-[#32A9E0]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2"
          >
            <h2 className="text-2xl font-bold">
              {status === "connecting" ? "Connecting..." : "Finding someone to yap with..."}
            </h2>
            <p className="text-gray-400">This might take a moment ✨</p>
          </motion.div>
        </div>
      </div>
    );
  }

  // Render disconnected state
  if (status === "disconnected") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold">Disconnected</h2>
          <Button
            onClick={() => window.location.reload()}
            className="bg-[#32A9E0] hover:bg-[#32A9E0]/90 text-black"
          >
            Reconnect
          </Button>
        </div>
      </div>
    );
  }

  // Render chat interface
  return (
    <div className="flex flex-col h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-[#0a0a0a]">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#32A9E0] animate-pulse"></div>
          <h2 className="font-bold text-lg">Connected 💚</h2>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleNext}
            variant="outline"
            size="sm"
            className="bg-[#F77F82] hover:bg-[#F77F82]/90 text-black border-0 rounded-full"
          >
            Next
          </Button>
          <Button
            onClick={handleEnd}
            variant="outline"
            size="sm"
            className="bg-[#32A9E0] hover:bg-[#32A9E0]/90 text-black border-0 rounded-full"
          >
            End
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-black">
        <AnimatePresence>
          {messages.map((message) => {
            const isMine = message.senderId === mySocketId;
            return (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`flex ${isMine ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                    isMine
                      ? "bg-[#32A9E0] text-black rounded-br-md"
                      : "bg-[#F77F82] text-black rounded-bl-md"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap break-words">
                    {message.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Typing Indicator */}
        {otherTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex justify-start"
          >
            <div className="bg-gray-800 rounded-2xl rounded-bl-md px-4 py-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-800 bg-[#0a0a0a]">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 bg-gray-900 border border-gray-800 rounded-full px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#32A9E0] transition-colors"
          />
          <Button
            onClick={sendMessage}
            disabled={!inputText.trim()}
            className="bg-[#32A9E0] hover:bg-[#32A9E0]/90 text-black rounded-full px-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
