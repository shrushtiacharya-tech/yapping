import Link from "next/link";
import { Logo } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold text-white"
            >
              <Logo className="h-6 w-6 text-[#32A9E0]" />
              <span>yapping</span>
            </Link>

            <p className="max-w-xs text-sm text-white/60">
              No pressure. No judgment. <br />
              Just vibes, yaps & late-night thoughts 💬
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/80">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="/about" className="hover:text-[#32A9E0] transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#32A9E0] transition">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white/80">
                Legal-ish
              </h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <Link href="/terms" className="hover:text-[#F77F82] transition">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#F77F82] transition">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} yapping.in — built for overthinkers & yappers 💙
          </p>
        </div>
      </div>
    </footer>
  );
}
