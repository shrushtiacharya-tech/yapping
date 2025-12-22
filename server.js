const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));

let waitingUser = null;

io.on("connection", socket => {
  socket.emit("online", io.engine.clientsCount);

  socket.on("start", () => {
    if (waitingUser) {
      socket.partner = waitingUser;
      waitingUser.partner = socket;

      socket.emit("matched");
      waitingUser.emit("matched");

      waitingUser = null;
    } else {
      waitingUser = socket;
      socket.emit("system", "🔍 Finding a stranger...");
    }
  });

  socket.on("message", msg => {
    if (socket.partner) {
      socket.partner.emit("message", msg);
    }
  });

  socket.on("typing", () => {
    if (socket.partner) {
      socket.partner.emit("typing");
    }
  });

  socket.on("next", () => {
    if (socket.partner) {
      socket.partner.emit("ended");
      socket.partner.partner = null;
    }
    socket.partner = null;
    waitingUser = socket;
    socket.emit("system", "🔍 Finding a new stranger...");
  });

  socket.on("disconnect", () => {
    if (socket === waitingUser) waitingUser = null;
    if (socket.partner) {
      socket.partner.emit("ended");
      socket.partner.partner = null;
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () =>
  console.log("Yapping server running on port", PORT)
);

