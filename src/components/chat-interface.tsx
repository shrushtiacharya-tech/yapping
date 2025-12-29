"use client";

import { useEffect, useState, useRef } from "react";
import  getSupabase  from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";

type Message = {
  id: string;
  sender: string;
  text: string;
  created_at: string;
};

export default function ChatInterface() {
    const supabase = getSupabase();
  if (!supabase) return null;

  const [myId] = useState(uuidv4());
  const [matchedId, setMatchedId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [status, setStatus] = useState("Finding a stranger...");
  const [otherTyping, setOtherTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Match logic
  async function tryMatch() {
    if (matchedId) return;

    const { data } = await supabase
      .from("waiting_users")
      .select("*")
      .neq("id", myId)
      .order("joined_at", { ascending: true })
      .limit(1);

    if (data && data.length > 0) {
      const other = data[0];

      await supabase.from("waiting_users").delete().eq("id", other.id);
      await supabase.from("waiting_users").delete().eq("id", myId);

      setMatchedId(other.id);
      setStatus("Connected 🎉");

      subscribeMessages(other.id);
      subscribeTyping(other.id);
    } else {
      await supabase.from("waiting_users").upsert({ id: myId });
    }
  }

  useEffect(() => {
    tryMatch();
    const interval = setInterval(tryMatch, 1000);
    return () => clearInterval(interval);
  }, [matchedId]);

  // Subscribe messages
  const subscribeMessages = (otherId: string) => {
    supabase
      .channel(`chat-${otherId}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload: any) => {
          setMessages((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();
  };

  // Subscribe typing events
  const subscribeTyping = (otherId: string) => {
    supabase
      .channel(`typing-${otherId}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "typing_events" },
        (payload: any) => {
          if (payload.new.sender === otherId) {
            setOtherTyping(payload.new.is_typing);
          }
        }
      )
      .subscribe();
  };

  // Send message
  const sendMessage = async () => {
    if (!text.trim() || !matchedId) return;

    await supabase.from("messages").insert({
      id: uuidv4(),
      room_id: [myId, matchedId].sort().join("_"),
      sender: myId,
      text,
      created_at: new Date().toISOString(),
    });

    setText("");
  };

  // Send typing event
  const sendTyping = async () => {
    if (!matchedId) return;
    await supabase.from("typing_events").insert({
      id: uuidv4(),
      room_id: [myId, matchedId].sort().join("_"),
      sender: myId,
      is_typing: true,
      created_at: new Date().toISOString(),
    });
  };

  // Scroll to bottom
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  // Next user
  const nextUser = () => {
    setMatchedId(null);
    setMessages([]);
    setStatus("Finding a new stranger...");
  };

  // End chat
  const endChat = () => {
    setMatchedId(null);
    setMessages([]);
    setStatus("Chat ended 😢");
  };

  // Report (mock)
  const reportUser = () => alert("User reported! 🚨");

  // Emoji picker
  const addEmoji = (emoji: string) => setText((prev) => prev + emoji);

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-black border rounded-lg text-white">
      {/* Header */}
      <div className="flex justify-between items-center p-3 border-b border-gray-700 bg-[#1A1A1D]">
        <h2 className="font-bold text-lg">{status}</h2>
        {matchedId && (
          <div className="flex gap-2">
            <button
              onClick={nextUser}
              className="px-2 py-1 rounded bg-[#F77F82] text-black text-sm"
            >
              Next
            </button>
            <button
              onClick={endChat}
              className="px-2 py-1 rounded bg-[#32A9E0] text-black text-sm"
            >
              End
            </button>
            <button
              onClick={reportUser}
              className="px-2 py-1 rounded bg-red-500 text-black text-sm"
            >
              🚨
            </button>
          </div>
        )}
      </div>

      {/* Chat messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-2 flex flex-col bg-[#0D0D0D]"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`p-2 rounded text-sm max-w-[70%] ${
              m.sender === myId
                ? "bg-[#32A9E0] text-black self-end rounded-br-none"
                : "bg-[#F77F82] text-black self-start rounded-bl-none"
            }`}
          >
            {m.text}
          </div>
        ))}
        {otherTyping && <p className="text-xs text-gray-400">Typing...</p>}
      </div>

      {/* Input + emoji */}
      {matchedId && (
        <div className="flex flex-col gap-1 p-3 border-t border-gray-700 bg-[#1A1A1D]">
          <div className="flex gap-2">
            <input
              className="flex-1 border rounded px-2 py-1 bg-black text-white placeholder:text-gray-500"
              placeholder="Type a message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                sendTyping();
                if (e.key === "Enter") sendMessage();
              }}
            />
            <button
              onClick={sendMessage}
              className="bg-[#32A9E0] text-black px-3 rounded flex items-center justify-center"
            >
              ➤
            </button>
          </div>

          {/* Emoji picker */}
          <div className="flex gap-2">
            {["😀", "😂", "😍", "🥹", "😎", "🔥"].map((e) => (
              <button key={e} onClick={() => addEmoji(e)} className="text-xl">
                {e}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
