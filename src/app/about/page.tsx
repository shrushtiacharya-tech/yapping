"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Sparkles, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:p-8">
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 bg-gradient-to-r from-[#32A9E0] to-[#F77F82] bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            About yapping
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Just a space to connect, vibe, and maybe make a new friend. No pressure.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 text-center my-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <Card className="bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 hover:border-[#32A9E0]/50 transition-all duration-300 h-full group relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#32A9E0]/0 to-[#F77F82]/0 group-hover:from-[#32A9E0]/10 group-hover:to-[#F77F82]/10 transition-all duration-300"
              />
              <CardHeader className="relative z-10">
                <motion.div
                  className="mx-auto bg-[#32A9E0]/20 text-[#32A9E0] rounded-full p-3 w-fit group-hover:bg-[#F77F82]/20 group-hover:text-[#F77F82] transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(50, 169, 224, 0.2)",
                      "0 0 25px rgba(50, 169, 224, 0.4)",
                      "0 0 15px rgba(50, 169, 224, 0.2)",
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Users className="h-8 w-8" />
                </motion.div>
                <CardTitle className="pt-4 text-white">Our Vibe</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300">
                  We're all about low-key, no-stress convos. Think of us as the cozy corner of the internet where you can just be you.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <Card className="bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 hover:border-[#F77F82]/50 transition-all duration-300 h-full group relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#F77F82]/0 to-[#32A9E0]/0 group-hover:from-[#F77F82]/10 group-hover:to-[#32A9E0]/10 transition-all duration-300"
              />
              <CardHeader className="relative z-10">
                <motion.div
                  className="mx-auto bg-[#F77F82]/20 text-[#F77F82] rounded-full p-3 w-fit group-hover:bg-[#32A9E0]/20 group-hover:text-[#32A9E0] transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(247, 127, 130, 0.2)",
                      "0 0 25px rgba(247, 127, 130, 0.4)",
                      "0 0 15px rgba(247, 127, 130, 0.2)",
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Sparkles className="h-8 w-8" />
                </motion.div>
                <CardTitle className="pt-4 text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300">
                  To create a place where you can find someone to yap with, share a laugh, or just pass the time. It's that simple.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <Card className="bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 hover:border-[#32A9E0]/50 transition-all duration-300 h-full group relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#32A9E0]/0 to-[#F77F82]/0 group-hover:from-[#32A9E0]/10 group-hover:to-[#F77F82]/10 transition-all duration-300"
              />
              <CardHeader className="relative z-10">
                <motion.div
                  className="mx-auto bg-[#32A9E0]/20 text-[#32A9E0] rounded-full p-3 w-fit group-hover:bg-[#F77F82]/20 group-hover:text-[#F77F82] transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(50, 169, 224, 0.2)",
                      "0 0 25px rgba(50, 169, 224, 0.4)",
                      "0 0 15px rgba(50, 169, 224, 0.2)",
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Heart className="h-8 w-8" />
                </motion.div>
                <CardTitle className="pt-4 text-white">Our Promise</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300">
                  We're committed to keeping this space safe and respectful. You focus on the vibes, we'll handle the rest.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
