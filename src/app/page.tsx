"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  MessageCircle,
  Heart,
  Zap,
  Users,
  Smile,
  ArrowRight,
  Shield,
  Clock,
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
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
          {/* Animated Background decorations */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 text-5xl"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              💬
            </motion.div>
            <motion.div
              className="absolute top-40 right-20 text-6xl"
              animate={{
                y: [0, -25, 0],
                x: [0, -15, 0],
                rotate: [0, -8, 8, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute bottom-32 left-20 text-5xl"
              animate={{
                y: [0, 20, 0],
                x: [0, -10, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              💙
            </motion.div>
            <motion.div
              className="absolute bottom-20 right-10 text-6xl"
              animate={{
                y: [0, 25, 0],
                x: [0, 15, 0],
                rotate: [0, 8, -8, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              🥹
            </motion.div>
          </div>

          <div className="container mx-auto max-w-6xl relative">
            <motion.div
              className="text-center space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: 0.2,
                }}
              >
                <span className="bg-gradient-to-r from-[#32A9E0] to-[#F77F82] bg-clip-text text-transparent">
                  Yapping
                </span>
                <span className="text-[#32A9E0]">.in</span>
              </motion.h1>
              
              <motion.p
                className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Talk. Yap. Repeat.{" "}
                <motion.span
                  className="inline-block"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  💬✨
                </motion.span>
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-[#32A9E0] to-[#F77F82] hover:from-[#32A9E0]/90 hover:to-[#F77F82]/90 text-white border-0 rounded-full shadow-lg shadow-[#32A9E0]/30 hover:shadow-[#32A9E0]/50 transition-all duration-300"
                  >
                    <Link href="/chat">
                      <Sparkles className="h-5 w-5" />
                      Start Yapping
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 h-auto border-2 border-[#32A9E0] text-[#32A9E0] hover:bg-[#32A9E0] hover:text-black rounded-full transition-all duration-300"
                  >
                    <Link href="/about">Learn More</Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center justify-center gap-2 text-sm text-gray-400 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Users className="h-4 w-4 text-[#32A9E0]" />
                </motion.div>
                <span className="font-semibold text-white">
                  {onlineUsers.toLocaleString()}
                </span>
                <span>people yapping right now</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#32A9E0] to-[#F77F82] bg-clip-text text-transparent">
                Why people love yapping 🫶
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                A space where you can be yourself, no strings attached
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <FeatureCard
                icon={<Smile className="h-8 w-8" />}
                title="No Awkward Profiles"
                description="No bio. No dp. No pressure. Just vibes and words. Connect with people through conversation, not profiles."
                delay={0.1}
              />
              <FeatureCard
                icon={<Heart className="h-8 w-8" />}
                title="Judgement-Free Zone"
                description="Cry, rant, flirt, overshare. We don't judge. Ever. This is your space to be authentically you."
                delay={0.2}
              />
              <FeatureCard
                icon={<Zap className="h-8 w-8" />}
                title="Instant Matches"
                description="One click and boom 💥 you're talking to someone new. No waiting, no swiping, just instant connection."
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F77F82] to-[#32A9E0] bg-clip-text text-transparent">
                How to start yapping 🤭
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                It's ridiculously simple. Seriously.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
              <Step
                number="1"
                title="Click Start Yapping"
                description="Hit that button and get ready to connect"
                icon={<MessageCircle className="h-6 w-6" />}
                delay={0.1}
              />
              <Step
                number="2"
                title="Get Matched Instantly"
                description="Our algorithm finds someone perfect for you"
                icon={<Zap className="h-6 w-6" />}
                delay={0.2}
              />
              <Step
                number="3"
                title="Talk or Hit Next"
                description="Vibe with them or find someone new. Your call."
                icon={<ArrowRight className="h-6 w-6" />}
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* Safety & Privacy Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#32A9E0]/20 text-[#32A9E0] mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(50, 169, 224, 0.3)",
                      "0 0 30px rgba(50, 169, 224, 0.5)",
                      "0 0 20px rgba(50, 169, 224, 0.3)",
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
                  <Shield className="h-8 w-8" />
                </motion.div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#32A9E0]">
                  Safe & Private
                </h2>
                <p className="text-lg text-gray-300">
                  Your conversations are private and anonymous. We respect your privacy and never share your data. 
                  Stay safe while you connect with new people.
                </p>
              </motion.div>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F77F82]/20 text-[#F77F82] mb-4"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(247, 127, 130, 0.3)",
                      "0 0 30px rgba(247, 127, 130, 0.5)",
                      "0 0 20px rgba(247, 127, 130, 0.3)",
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
                  <Clock className="h-8 w-8" />
                </motion.div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#F77F82]">
                  No Sign-Ups Required
                </h2>
                <p className="text-lg text-gray-300">
                  Jump right in. No email, no password, no commitment. Just open the app and start talking. 
                  It's that simple.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gradient-to-br from-[#32A9E0]/10 to-[#F77F82]/10 border-2 border-[#32A9E0]/30 backdrop-blur-sm relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#32A9E0]/0 via-[#32A9E0]/10 to-[#F77F82]/0"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <CardContent className="p-12 relative z-10">
                  <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#32A9E0] to-[#F77F82] bg-clip-text text-transparent"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    You don't need a reason to talk 💬
                  </motion.h2>
                  <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    No sign-ups. No history. No strings. Just humans talking to humans.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="text-lg px-10 py-6 h-auto bg-gradient-to-r from-[#32A9E0] to-[#F77F82] hover:from-[#32A9E0]/90 hover:to-[#F77F82]/90 text-white border-0 rounded-full shadow-lg shadow-[#32A9E0]/30 hover:shadow-[#32A9E0]/50 transition-all duration-300"
                    >
                      <Link href="/chat">
                        <MessageCircle className="h-5 w-5" />
                        Let's Yap
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className="bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 hover:border-[#32A9E0]/50 transition-all duration-300 h-full relative overflow-hidden group">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#32A9E0]/0 to-[#F77F82]/0 group-hover:from-[#32A9E0]/10 group-hover:to-[#F77F82]/10 transition-all duration-300"
        />
        <CardContent className="p-8 text-center relative z-10">
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#32A9E0]/20 text-[#32A9E0] mb-4 group-hover:bg-[#F77F82]/20 group-hover:text-[#F77F82] transition-colors duration-300"
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
            {icon}
          </motion.div>
          <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function Step({
  number,
  title,
  description,
  icon,
  delay = 0,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center text-center space-y-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative">
        <motion.div
          className="w-20 h-20 rounded-full bg-gradient-to-br from-[#32A9E0] to-[#F77F82] text-white font-bold flex items-center justify-center text-2xl shadow-lg"
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 4px 20px rgba(50, 169, 224, 0.3)",
              "0 6px 30px rgba(247, 127, 130, 0.4)",
              "0 4px 20px rgba(50, 169, 224, 0.3)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {number}
        </motion.div>
        <motion.div
          className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#F77F82] flex items-center justify-center text-white shadow-lg"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.div>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}
