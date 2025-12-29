import Link from "next/link";
import { Button } from "@/components/ui/button"; // Make sure this exists
import { Logo } from "@/components/icons";        // Make sure this exists

export function Header() {
  return (
    <header className="border-b border-border/50 bg-background/30 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary">
          <Logo className="h-6 w-6" />
          <span>yapping</span>
        </Link>
        <nav className="flex items-center gap-1">
          <Button variant="ghost" asChild>
            <Link href="/blog">Blog</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
