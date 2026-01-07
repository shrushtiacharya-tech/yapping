"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-gray-800/50 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-bold text-white group"
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Logo className="h-6 w-6 text-[#32A9E0] group-hover:text-[#F77F82] transition-colors duration-300" />
                </motion.div>
                <span className="bg-gradient-to-r from-[#32A9E0] to-[#F77F82] bg-clip-text text-transparent">
                  yapping
                </span>
              </Link>
            </motion.div>

            <p className="max-w-xs text-sm text-gray-400">
              No pressure. No judgment. <br />
              Just vibes, yaps & late-night thoughts{" "}
              <motion.span
                className="inline-block"
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                💬
              </motion.span>
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-300">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-[#32A9E0] transition-colors duration-300 inline-block"
                    >
                      About
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href="/blog"
                      className="text-gray-400 hover:text-[#32A9E0] transition-colors duration-300 inline-block"
                    >
                      Blog
                    </Link>
                  </motion.div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-300">
                Legal-ish
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href="/terms"
                      className="text-gray-400 hover:text-[#F77F82] transition-colors duration-300 inline-block"
                    >
                      Terms
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href="/privacy"
                      className="text-gray-400 hover:text-[#F77F82] transition-colors duration-300 inline-block"
                    >
                      Privacy
                    </Link>
                  </motion.div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-10 border-t border-gray-800/50 pt-6 text-center text-xs text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            © {new Date().getFullYear()} yapping.in — built for overthinkers & yappers{" "}
            <motion.span
              className="inline-block"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              💙
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
