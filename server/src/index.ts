import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";

const app = express();
const httpServer = createServer(app);

// CORS configuration for Socket.IO
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:9002",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(cors());
app.use(express.json());

// Global waiting queue - FIFO for instant matching
const waitingQueue: string[] = [];
const activeRooms = new Map<string, [string, string]>();
const socketToRoom = new Map<string, string>();

/**
 * Remove socket from waiting queue immediately
 */
function removeFromQueue(socketId: string): void {
  const index = waitingQueue.indexOf(socketId);
  if (index !== -1) {
    waitingQueue.splice(index, 1);
  }
}

/**
 * Clean up room and remove from all tracking maps
 */
function cleanupRoom(roomId: string, socket1: string, socket2: string): void {
  activeRooms.delete(roomId);
  socketToRoom.delete(socket1);
  socketToRoom.delete(socket2);
  
  // Leave Socket.IO rooms
  io.sockets.sockets.get(socket1)?.leave(roomId);
  io.sockets.sockets.get(socket2)?.leave(roomId);
}

/**
 * Instant matching function - matches immediately if user available
 * Returns match result or null if added to queue
 */
function handleMatch(socketId: string): { roomId: string; matchedSocketId: string } | null {
  // Remove from queue first to prevent duplicates
  removeFromQueue(socketId);

  if (waitingQueue.length === 0) {
    // No one waiting - add to queue immediately
    waitingQueue.push(socketId);
    return null;
  }

  // User is waiting - match instantly (FIFO)
  const matchedSocketId = waitingQueue.shift()!;
  
  // Create deterministic room ID
  const roomId = [socketId, matchedSocketId].sort().join("_");
  
  // Register room immediately
  activeRooms.set(roomId, [socketId, matchedSocketId]);
  socketToRoom.set(socketId, roomId);
  socketToRoom.set(matchedSocketId, roomId);
  
  return { roomId, matchedSocketId };
}

/**
 * Handle user disconnect - clean up immediately
 */
function handleDisconnect(socketId: string): void {
  // Remove from waiting queue immediately
  removeFromQueue(socketId);

  // Clean up room if in one
  const roomId = socketToRoom.get(socketId);
  if (roomId) {
    const room = activeRooms.get(roomId);
    if (room) {
      const [socket1, socket2] = room;
      const otherSocketId = socket1 === socketId ? socket2 : socket1;

      // Clean up room immediately
      cleanupRoom(roomId, socket1, socket2);

      // Notify partner instantly
      const otherSocket = io.sockets.sockets.get(otherSocketId);
      if (otherSocket) {
        otherSocket.emit("partner_disconnected");
      }
    }
  }
}

/**
 * Notify both users of match instantly
 */
function notifyMatch(socket1: Socket, socket2: Socket, roomId: string): void {
  socket1.join(roomId);
  socket2.join(roomId);
  
  socket1.emit("matched", { roomId });
  socket2.emit("matched", { roomId });
}

// Socket.IO connection handling
io.on("connection", (socket: Socket) => {
  console.log(`✅ User connected: ${socket.id}`);

  /**
   * Event: join
   * Instant matching - if user waiting, match immediately; else add to queue
   */
  socket.on("join", () => {
    // Clean up any existing room first
    const existingRoomId = socketToRoom.get(socket.id);
    if (existingRoomId) {
      const room = activeRooms.get(existingRoomId);
      if (room) {
        const [socket1, socket2] = room;
        const otherSocketId = socket1 === socket.id ? socket2 : socket1;
        cleanupRoom(existingRoomId, socket1, socket2);
        
        const otherSocket = io.sockets.sockets.get(otherSocketId);
        if (otherSocket) {
          otherSocket.emit("partner_disconnected");
        }
      }
    }

    // Attempt instant match
    const matchResult = handleMatch(socket.id);
    
    if (!matchResult) {
      // Added to queue - waiting for match
      socket.emit("waiting");
    } else {
      // Matched instantly!
      const { roomId, matchedSocketId } = matchResult;
      const matchedSocket = io.sockets.sockets.get(matchedSocketId);
      
      if (matchedSocket) {
        notifyMatch(socket, matchedSocket, roomId);
        console.log(`💚 Instant match: ${socket.id} <-> ${matchedSocketId} (room: ${roomId})`);
      } else {
        // Matched socket disconnected - remove from queue and try again
        removeFromQueue(matchedSocketId);
        socketToRoom.delete(socket.id);
        socket.emit("waiting");
      }
    }
  });

  /**
   * Event: message
   * Send message to partner in room
   */
  socket.on("message", (data: { text: string; roomId: string }) => {
    const roomId = socketToRoom.get(socket.id);
    if (!roomId || roomId !== data.roomId) {
      socket.emit("error", { message: "Invalid room" });
      return;
    }

    const room = activeRooms.get(roomId);
    if (!room) {
      socket.emit("error", { message: "Room not found" });
      return;
    }

    const [socket1, socket2] = room;
    const otherSocketId = socket1 === socket.id ? socket2 : socket1;
    const otherSocket = io.sockets.sockets.get(otherSocketId);

    if (otherSocket) {
      otherSocket.emit("message", {
        text: data.text,
        senderId: socket.id,
      });
    }
  });

  /**
   * Event: typing
   * Notify partner that user is typing
   */
  socket.on("typing", (data: { roomId: string }) => {
    const roomId = socketToRoom.get(socket.id);
    if (!roomId || roomId !== data.roomId) return;

    const room = activeRooms.get(roomId);
    if (!room) return;

    const [socket1, socket2] = room;
    const otherSocketId = socket1 === socket.id ? socket2 : socket1;
    const otherSocket = io.sockets.sockets.get(otherSocketId);

    if (otherSocket) {
      otherSocket.emit("typing");
    }
  });

  /**
   * Event: stop_typing
   * Notify partner that user stopped typing
   */
  socket.on("stop_typing", (data: { roomId: string }) => {
    const roomId = socketToRoom.get(socket.id);
    if (!roomId || roomId !== data.roomId) return;

    const room = activeRooms.get(roomId);
    if (!room) return;

    const [socket1, socket2] = room;
    const otherSocketId = socket1 === socket.id ? socket2 : socket1;
    const otherSocket = io.sockets.sockets.get(otherSocketId);

    if (otherSocket) {
      otherSocket.emit("stop_typing");
    }
  });

  /**
   * Event: next
   * Disconnect from current match and instantly rematch
   */
  socket.on("next", () => {
    // Clean up current room immediately
    const roomId = socketToRoom.get(socket.id);
    if (roomId) {
      const room = activeRooms.get(roomId);
      if (room) {
        const [socket1, socket2] = room;
        const otherSocketId = socket1 === socket.id ? socket2 : socket1;
        
        cleanupRoom(roomId, socket1, socket2);
        
        const otherSocket = io.sockets.sockets.get(otherSocketId);
        if (otherSocket) {
          otherSocket.emit("partner_disconnected");
        }
        
        console.log(`🔄 ${socket.id} next - disconnected from ${otherSocketId}`);
      }
    }

    // Instantly attempt new match
    const matchResult = handleMatch(socket.id);
    
    if (!matchResult) {
      // Added to queue - waiting
      socket.emit("waiting");
    } else {
      // Instantly matched with new partner!
      const { roomId: newRoomId, matchedSocketId } = matchResult;
      const matchedSocket = io.sockets.sockets.get(matchedSocketId);
      
      if (matchedSocket) {
        notifyMatch(socket, matchedSocket, newRoomId);
        console.log(`💚 Instant re-match: ${socket.id} <-> ${matchedSocketId} (room: ${newRoomId})`);
      } else {
        // Matched socket disconnected - try again
        removeFromQueue(matchedSocketId);
        socketToRoom.delete(socket.id);
        socket.emit("waiting");
      }
    }
  });

  /**
   * Event: disconnect
   * Handle user disconnection - clean up immediately
   */
  socket.on("disconnect", () => {
    console.log(`❌ User disconnected: ${socket.id}`);
    handleDisconnect(socket.id);
  });
});

const PORT = process.env.PORT || 3001;

httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 Socket.IO server ready for instant matching`);
});
