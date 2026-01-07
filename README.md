# yapping.in 💬

A production-ready Gen-Z Omegle-like anonymous 1-to-1 real-time chat application built with Next.js, Socket.IO, and TypeScript.

## Features

- 🔀 **Anonymous Random Matching** - Queue-based matching system
- 💬 **Real-time Text Chat** - Instant messaging with Socket.IO
- ⌨️ **Typing Indicators** - See when your chat partner is typing
- 🔄 **Next Button** - Disconnect and find a new match instantly
- 🎨 **Cute Gen-Z UI** - Modern, rounded design with smooth animations
- 🚫 **No Auth Required** - Jump in and start chatting immediately

## Tech Stack

### Frontend
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** - Smooth animations
- **Socket.IO Client** - Real-time communication

### Backend
- **Node.js** + **Express**
- **Socket.IO** - WebSocket server
- **TypeScript**
- **In-memory matching** - No database needed

## Project Structure

```
yapping/
├── src/                    # Next.js frontend
│   ├── app/
│   │   ├── page.tsx       # Landing page
│   │   └── chat/
│   │       └── page.tsx   # Chat page
│   ├── components/
│   │   └── chat-interface.tsx  # Chat UI component
│   └── lib/
│       └── socket.ts      # Socket.IO client setup
├── server/                 # Express + Socket.IO backend
│   ├── src/
│   │   └── index.ts       # Server entry point
│   ├── package.json
│   └── tsconfig.json
└── package.json           # Frontend dependencies
```

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### 1. Install Frontend Dependencies

```bash
npm install
```

### 2. Install Server Dependencies

```bash
cd server
npm install
cd ..
```

### 3. Environment Variables (Optional)

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
```

If not set, it defaults to `http://localhost:3001`.

### 4. Start Development Servers

You need to run **both** the frontend and backend servers:

#### Terminal 1 - Backend Server
```bash
cd server
npm run dev
```

The server will start on `http://localhost:3001`

#### Terminal 2 - Frontend (Next.js)
```bash
npm run dev
```

The frontend will start on `http://localhost:9002`

### 5. Open in Browser

Navigate to `http://localhost:9002` and start yapping! 💬

## Socket.IO Events

### Client → Server

- `join` - Join the matching queue
- `message` - Send a chat message `{ text: string, roomId: string }`
- `typing` - Notify partner you're typing `{ roomId: string }`
- `stop_typing` - Notify partner you stopped typing `{ roomId: string }`
- `next` - Disconnect from current match and find new one
- `disconnect` - Disconnect from server

### Server → Client

- `waiting` - Waiting in queue for a match
- `matched` - Successfully matched with a user `{ roomId: string }`
- `message` - Receive a message `{ text: string, senderId: string }`
- `typing` - Partner is typing
- `stop_typing` - Partner stopped typing
- `partner_disconnected` - Partner disconnected

## Design System

### Colors
- **Primary Blue**: `#32A9E0`
- **Secondary Pink**: `#F77F82`
- **Background**: Black (`#000000`)

### Design Principles
- Rounded corners everywhere
- Smooth animations and transitions
- Gen-Z friendly, casual vibe
- Clean, minimal interface

## Development

### Frontend Scripts
- `npm run dev` - Start Next.js dev server (port 9002)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Backend Scripts
- `cd server && npm run dev` - Start server with hot reload (port 3001)
- `cd server && npm run build` - Build TypeScript
- `cd server && npm start` - Start production server

## Production Deployment

1. Build the frontend:
```bash
npm run build
```

2. Build the backend:
```bash
cd server
npm run build
```

3. Set environment variables for production

4. Run both servers (use PM2, Docker, or your preferred process manager)

## License

MIT

---

Built with 💙 for overthinkers & yappers
