// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

// Serve static files from 'public' folder (index.html, chat.html, etc.)
app.use(express.static("public"));

// --- SOCKET.IO SETUP ---
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all domains (third-party support)
    methods: ["GET", "POST"]
  }
});

// --- TRACK ONLINE USERS ---
let onlineUsers = 0;
let waitingUsers = []; // queue of people waiting to chat

io.on("connection", (socket) => {
  onlineUsers++;
  console.log(`New user connected. Online users: ${onlineUsers}`);
  io.emit("online", onlineUsers);

  // Start chat
  socket.on("start", () => {
    addToQueue(socket);
  });

  // Handle messages
  socket.on("message", (msg) => {
    if (socket.partner) {
      socket.partner.emit("message", msg);
    }
  });

  // Typing indicator
  socket.on("typing", () => {
    if (socket.partner) {
      socket.partner.emit("typing");
    }
  });

  // Next / skip
  socket.on("next", () => {
    disconnectPartner(socket);
    addToQueue(socket);
  });

  // Block
  socket.on("block", () => {
    disconnectPartner(socket);
    socket.emit("system", "🚫 You blocked the user.");
  });

  // Report
  socket.on("report", () => {
    disconnectPartner(socket);
    socket.emit("system", "⚠ User reported. Thank you.");
    // Here you can log for admin review
  });

  // Handle disconnect
  socket.on("disconnect", () => {
    onlineUsers--;
    io.emit("online", onlineUsers);
    disconnectPartner(socket);
    console.log(`User disconnected. Online users: ${onlineUsers}`);
  });
});

// --- HELPER FUNCTIONS ---
function addToQueue(socket) {
  if (waitingUsers.length > 0) {
    // Pair with someone in the queue
    const partner = waitingUsers.shift();
    socket.partner = partner;
    partner.partner = socket;

    socket.emit("matched");
    partner.emit("matched");
  } else {
    waitingUsers.push(socket);
    socket.emit("system", "🔍 Waiting for a stranger to connect...");
  }
}

function disconnectPartner(socket) {
  if (socket.partner) {
    socket.partner.emit("ended");
    socket.partner.partner = null;
    socket.partner = null;
  }
}

// --- START SERVER ---
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
