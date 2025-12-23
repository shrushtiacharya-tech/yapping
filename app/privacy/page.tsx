import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:p-8">
        <div className="max-w-3xl mx-auto py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Privacy Policy</h1>
          <div className="space-y-6 text-muted-foreground">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Your Privacy is the Main Character</h2>
            <p>Last updated: July 29, 2024</p>
            <p>
              We get it. Privacy is a big deal. At yapping, we're all about keeping your business, your business. Here's how we handle your info (or rather, how we *don't*).
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-foreground">1. We're Basically Strangers</h3>
            <p>
              We don't ask for your name, email, or your star sign. You're anonymous here. We don't use cookies to track you across the internet. Chats are not stored on our servers after you disconnect. When a chat ends, it's gone. Poof.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-foreground">2. What We *Do* Collect (The Boring Stuff)</h3>
            <p>
              To keep things running and safe, we do log some basic, anonymous data. This includes stuff like your IP address to prevent spam and abuse. If you report someone, we temporarily log info about that chat to review it. That's it. We're not interested in anything else.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-foreground">3. No Third-Party Spies</h3>
            <p>
              We don't sell your data. We don't share it with advertisers. Because, what data? We barely have any. Our goal is to connect people, not to build a profile on you.
            </p>

            <h3 className="text-lg md:text-xl font-semibold text-foreground">4. Changes to This Policy</h3>
            <p>
              If we ever have to change this stuff, we'll post the new policy right here. But our core promise will always be the same: your privacy is priority #1.
            </p>

            <p>
              Questions? Concerns? Just wanna say hi? Hit us up. But for now, enjoy the anonymous vibes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
