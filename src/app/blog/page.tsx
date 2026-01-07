"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";

const blogs = [
  {
    id: 1,
    title: "Why Anonymous Chats Feel So Comforting",
    emoji: "💙",
    content: `
Anonymous chatting removes judgment. When no one knows your name, face, or history,
you speak more freely. This freedom creates emotional safety, especially for Gen Z,
who often feel pressured to perform online. Anonymous platforms allow raw expression,
deep conversations, and honest feelings without fear of social consequences.

People open up faster, listen better, and feel understood. That's why anonymous chat
apps continue to grow despite social media dominance.
    `,
  },
  {
    id: 2,
    title: "The Rise of Real-Time Conversations on the Internet",
    emoji: "⚡",
    content: `
Real-time chat has replaced slow, asynchronous communication. From instant replies
to typing indicators, users now expect conversations to feel alive. Socket-based
communication powers this shift, enabling smooth, instant interaction.

Real-time chatting increases engagement, emotional connection, and retention.
Platforms that feel "alive" win attention faster than static feeds.
    `,
  },
  {
    id: 3,
    title: "Gen Z and the Need to Be Heard",
    emoji: "🎤",
    content: `
Gen Z values authenticity over perfection. They prefer spaces where they can talk,
rant, vent, and express emotions freely. Anonymous chat platforms provide that outlet.

Unlike traditional social networks, these platforms remove follower counts and likes,
focusing purely on conversation and connection.
    `,
  },
  {
    id: 4,
    title: "How Random Matching Creates Unexpected Connections",
    emoji: "🎲",
    content: `
Random matching removes bias. You don't choose based on looks, status, or popularity.
You connect based on thoughts and words. This randomness often leads to surprisingly
deep and meaningful conversations.

Many users report feeling more understood by strangers than people they know.
    `,
  },
  {
    id: 5,
    title: "The Psychology Behind Talking to Strangers",
    emoji: "🧠",
    content: `
Talking to strangers activates curiosity and openness. Since there's no shared past,
conversations start fresh. This clean slate reduces anxiety and increases honesty.

Psychologists call this the "stranger on a train" effect — people confess more to
those they'll never meet again.
    `,
  },
  {
    id: 6,
    title: "Why Minimal UI Improves Conversations",
    emoji: "✨",
    content: `
A clean interface removes distractions. When the UI is simple, users focus on words,
not buttons. Dark themes reduce eye strain and create emotional comfort.

Minimal UI combined with smooth animations makes chatting feel natural and calm.
    `,
  },
  {
    id: 7,
    title: "The Importance of Typing Indicators",
    emoji: "⌨️",
    content: `
Typing indicators reduce uncertainty. They tell users someone is present and engaged.
This small feature significantly improves conversation flow and emotional connection.

Without typing indicators, chats feel robotic and disconnected.
    `,
  },
  {
    id: 8,
    title: "Why Speed Matters in Chat Apps",
    emoji: "🚀",
    content: `
If matching takes more than a second, users leave. Attention spans are short.
Instant matching keeps excitement high and reduces drop-offs.

Speed is not a luxury — it's a requirement for real-time platforms.
    `,
  },
  {
    id: 9,
    title: "Anonymous Doesn't Mean Unsafe",
    emoji: "🛡️",
    content: `
With proper moderation tools, anonymous platforms can be safe. Features like easy
disconnect, reporting, and no data storage protect users while preserving anonymity.

Safety and freedom must coexist.
    `,
  },
  {
    id: 10,
    title: "The Future of Social Interaction",
    emoji: "🔮",
    content: `
The future is private, instant, and human. People want real conversations, not
performative content. Chat-based platforms fulfill this need better than feeds.

We are moving from broadcasting to connecting.
    `,
  },
  {
    id: 11,
    title: "Why Text Still Beats Voice for Strangers",
    emoji: "💬",
    content: `
Text gives control. You can think before replying, express emotions carefully,
and disconnect easily. For strangers, this feels safer than voice or video.

Text is less invasive and more inclusive.
    `,
  },
  {
    id: 12,
    title: "Emotional Venting in Anonymous Spaces",
    emoji: "😮‍💨",
    content: `
Many users join anonymous chats to vent. Sharing emotions without consequences
reduces stress and anxiety. Sometimes, being heard is enough.

These platforms unintentionally act as emotional release valves.
    `,
  },
  {
    id: 13,
    title: "How UI Animations Affect Mood",
    emoji: "🎨",
    content: `
Smooth animations create delight. Small transitions, fades, and movements make
apps feel alive. Harsh transitions increase cognitive load.

Good animation design supports emotional comfort.
    `,
  },
  {
    id: 14,
    title: "Why No Sign-Up Is a Superpower",
    emoji: "🎯",
    content: `
Every extra step loses users. No sign-up means instant entry, zero friction,
and higher retention. Users value speed and privacy.

Removing barriers increases participation.
    `,
  },
  {
    id: 15,
    title: "Random Chats as Digital Therapy",
    emoji: "💆",
    content: `
While not a replacement for therapy, random chats provide temporary relief.
Talking to someone unknown can feel freeing and validating.

Human connection, even briefly, has impact.
    `,
  },
  {
    id: 16,
    title: "Dark Mode and Emotional Comfort",
    emoji: "🌙",
    content: `
Dark themes feel safe, calm, and intimate. They reduce visual noise and match
late-night usage patterns common among Gen Z.

Dark mode isn't a trend — it's a preference.
    `,
  },
  {
    id: 17,
    title: "Why People Prefer One-on-One Chats",
    emoji: "👥",
    content: `
One-on-one conversations feel personal. There's no audience, no pressure,
and no competition for attention.

Private chats create deeper bonds.
    `,
  },
  {
    id: 18,
    title: "The Role of Silence in Conversations",
    emoji: "🤫",
    content: `
Silence isn't bad. Pauses allow thinking and emotional processing.
Typing indicators help users respect these pauses.

Good chat systems support silence naturally.
    `,
  },
  {
    id: 19,
    title: "Why Stranger Chats Feel More Honest",
    emoji: "💯",
    content: `
Without long-term consequences, people speak honestly.
There's no reputation to protect.

This honesty is rare in modern social media.
    `,
  },
  {
    id: 20,
    title: "Building Human-Centered Chat Platforms",
    emoji: "❤️",
    content: `
Great chat platforms prioritize people over metrics.
Speed, privacy, simplicity, and emotional safety matter most.

Technology should support human connection — not replace it.
    `,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 12,
    },
  },
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />
      
      <main className="flex-grow">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Page Title */}
          <motion.div
            className="text-center mb-16"
            variants={titleVariants}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-[#32A9E0] to-[#F77F82] bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring" as const,
                stiffness: 100,
                damping: 12,
                delay: 0.2,
              }}
            >
              The Yapping Blog
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              thoughts, vibes, and late-night internet wisdom ✨
            </motion.p>
          </motion.div>

          {/* Blog Cards Grid */}
          <motion.div
            className="max-w-4xl mx-auto space-y-6"
            variants={containerVariants}
          >
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                className="group relative"
                variants={cardVariants}
                whileHover={{
                  y: -4,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 sm:p-8 cursor-pointer relative overflow-hidden"
                  whileHover={{
                    borderColor: "rgba(50, 169, 224, 0.3)",
                    boxShadow: "0 8px 32px rgba(50, 169, 224, 0.1), 0 0 0 1px rgba(247, 127, 130, 0.1)",
                    transition: { duration: 0.2 },
                  }}
                  style={{
                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#32A9E0]/0 via-[#32A9E0]/5 to-[#F77F82]/0 rounded-2xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  {/* Emoji with animation */}
                  <motion.div
                    className="inline-block text-4xl mb-4"
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    {blog.emoji}
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    className="text-2xl sm:text-3xl font-bold mb-4 text-[#32A9E0] group-hover:text-[#F77F82] transition-colors duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.1 }}
                  >
                    {blog.title}
                  </motion.h2>

                  {/* Content */}
                  <motion.p
                    className="text-gray-300 leading-relaxed whitespace-pre-line text-sm sm:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.2 }}
                  >
                    {blog.content.trim()}
                  </motion.p>

                  {/* Decorative dots */}
                  <motion.div
                    className="flex gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-[#32A9E0]"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>

          {/* Footer Spacing */}
          <motion.div
            className="h-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
