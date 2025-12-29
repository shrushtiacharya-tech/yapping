"use client";

import Link from "next/link";
import { Logo } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
              <Logo className="h-6 w-6" />
              <span>yapping</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              No pressure. No judgment. Just vibes.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary">About</Link></li>
                <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/terms" className="hover:text-primary">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-primary">Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} yapping. All rights reserved. Made with 💙</p>
        </div>
      </div>
    </footer>
  );
}
