"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons";

export function Header() {
  return (
    <motion.header
      className="border-b border-gray-800/50 bg-black/80 backdrop-blur-md sticky top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg group"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Logo className="h-6 w-6 text-[#32A9E0] group-hover:text-[#F77F82] transition-colors duration-300" />
            </motion.div>
            <motion.span
              className="bg-gradient-to-r from-[#32A9E0] to-[#F77F82] bg-clip-text text-transparent"
              whileHover={{
                backgroundPosition: "100%",
              }}
            >
              yapping
            </motion.span>
          </Link>
        </motion.div>
        <nav className="flex items-center gap-1">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              asChild
              className="text-gray-300 hover:text-[#32A9E0] hover:bg-[#32A9E0]/10 rounded-full transition-all duration-300"
            >
              <Link href="/blog">
                <motion.span
                  whileHover={{
                    x: [0, 3, 0],
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: 1,
                    repeatType: "reverse",
                  }}
                >
                  Blog
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
