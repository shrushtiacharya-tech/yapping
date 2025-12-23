import { Header } from "@/components/header";
import { ChatInterface } from "@/components/chat-interface";

export default function ChatPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="hidden md:block">
        <Header />
      </div>
      <main className="flex-grow md:container md:mx-auto md:px-4 sm:px-6 md:p-8 flex items-center justify-center">
        <ChatInterface />
      </main>
    </div>
  );
}
