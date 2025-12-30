"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Sparkles,
  MessageCircle,
  Heart,
  Zap,
  Users,
  Smile,
} from "lucide-react";

export default function LandingPage() {
  const [onlineUsers, setOnlineUsers] = useState(2347);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineUsers(
        Math.floor(Math.random() * (5200 - 2300 + 1)) + 2300
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* 🌈 FLOATING STICKERS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-3xl animate-bounce">💬</div>
        <div className="absolute top-40 right-20 text-4xl animate-pulse">🥹</div>
        <div className="absolute bottom-32 left-20 text-3xl animate-bounce">💙</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-pulse">✨</div>
      </div>

      {/* 🚀 HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in">
          yapping<span className="text-pink-500">.in</span>
        </h1>

        <p className="max-w-xl text-lg md:text-xl text-gray-300 mb-8 animate-slide-up">
          Feeling bored? Lonely? Overthinking at 3am?  
          <br />
          <span className="text-blue-400 font-semibold">
            Yap it out with a random stranger 💭
          </span>
        </p>

        <Link href="/chat">
          <button className="bg-gradient-to-r from-pink-500 to-blue-500 hover:scale-105 transition-transform px-8 py-4 rounded-full text-lg font-bold shadow-lg flex items-center gap-2">
            <Sparkles /> Start Yapping
          </button>
        </Link>

        <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
          <Users className="h-4 w-4" />
          <span className="text-white font-semibold">
            {onlineUsers.toLocaleString()}
          </span>{" "}
          people yapping right now
        </div>
      </section>

      {/* 🌟 FEATURES */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Why people love yapping 🫶
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <Feature
            icon={<Smile />}
            title="No Awkward Profiles"
            desc="No bio. No dp. No pressure. Just vibes and words."
          />
          <Feature
            icon={<Heart />}
            title="Judgement-Free Zone"
            desc="Cry, rant, flirt, overshare. We don’t judge. Ever."
          />
          <Feature
            icon={<Zap />}
            title="Instant Matches"
            desc="One click and boom 💥 you're talking to someone new."
          />
        </div>
      </section>

      {/* 🧠 HOW IT WORKS */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          How to start yapping 🤭
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-12 text-center">
          <Step number="1" text="Click Start Yapping 🚀" />
          <Step number="2" text="Get matched instantly ⚡" />
          <Step number="3" text="Talk or hit Next 🔄" />
        </div>
      </section>

      {/* 💖 CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          You don’t need a reason to talk 💬
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-10">
          No sign-ups. No history. No strings.  
          Just humans talking to humans.
        </p>

        <Link href="/chat">
          <button className="bg-pink-500 hover:bg-pink-600 px-10 py-4 rounded-full text-lg font-bold shadow-xl flex items-center gap-2 mx-auto animate-bounce">
            <MessageCircle /> Let’s Yap
          </button>
        </Link>
      </section>

      {/* 🖤 FOOTER */}
<footer className="border-t border-white/10 bg-black">
  <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3 text-sm">

    {/* Brand */}
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-bold text-white">
        yapping<span className="text-pink-500">.in</span>
      </h3>
      <p className="text-gray-400 max-w-xs">
        No pressure. No judgement.  
        Just late-night yaps and human vibes 💬
      </p>
    </div>

    {/* Links */}
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h4 className="mb-3 font-semibold text-white/80">Company</h4>
        <ul className="space-y-2 text-gray-400">
          <li>
            <Link href="/about" className="hover:text-blue-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-400 transition">
              Blog
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="mb-3 font-semibold text-white/80">Legal</h4>
        <ul className="space-y-2 text-gray-400">
          <li>
            <Link href="/terms" className="hover:text-pink-400 transition">
              Terms
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:text-pink-400 transition">
              Privacy
            </Link>
          </li>
        </ul>
      </div>
    </div>

    {/* Copyright */}
    <div className="flex items-end md:justify-end text-gray-500">
      © {new Date().getFullYear()} yapping.in  
      <br />
      built for overthinkers 💙
    </div>
  </div>
</footer>
    </main>
  );
}

/* 🧩 COMPONENTS */

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-gray-900/70 rounded-2xl p-8 hover:-translate-y-2 transition-all shadow-lg text-center">
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-pink-500/20 text-pink-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </div>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-blue-500 text-black font-bold flex items-center justify-center text-xl">
        {number}
      </div>
      <p className="text-lg">{text}</p>
    </div>
  );
}
