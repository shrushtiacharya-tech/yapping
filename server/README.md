# Yapping Server

Express + Socket.IO backend server for yapping.in

## Quick Start

```bash
# Install dependencies
npm install

# Run in development mode (with hot reload)
npm run dev

# Build for production
npm run build

# Run production build
npm start
```

## Environment Variables

- `PORT` - Server port (default: 3001)
- `CLIENT_URL` - Frontend URL for CORS (default: http://localhost:9002)

## Architecture

- **In-memory matching queue** - No database required
- **Socket.IO rooms** - For real-time communication between matched users
- **Queue-based matching** - FIFO (First In, First Out) matching algorithm

## Socket Events

See main README.md for full event documentation.
