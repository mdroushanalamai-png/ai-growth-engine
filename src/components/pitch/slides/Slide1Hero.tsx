import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import { Sparkles } from "lucide-react";
import techgramLogo from "@/assets/techgram-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const floatingBadges = [
  { text: "250M+ Students", x: -420, y: -180 },
  { text: "$30B+ Market", x: 400, y: -160 },
  { text: "AI-Powered", x: -380, y: 140 },
  { text: "4 Realms", x: 420, y: 120 },
];

const Slide1Hero = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full text-center relative aurora-bg">
        {/* Background image */}
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
        {/* Aurora glow orbs */}
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(230, 80%, 65%) 0%, hsl(270, 60%, 55%) 40%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, hsl(190, 90%, 55%) 0%, transparent 60%)",
          }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating stat badges */}
        {floatingBadges.map((b, i) => (
          <motion.div
            key={b.text}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 + i * 0.15, type: "spring" }}
            className="absolute glass rounded-full px-5 py-2 text-sm font-medium text-muted-foreground"
            style={{ left: `calc(50% + ${b.x}px)`, top: `calc(50% + ${b.y}px)` }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {b.text}
            </motion.div>
          </motion.div>
        ))}

        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <div className="w-36 h-36 rounded-3xl glass-card flex items-center justify-center glow-border pulse-glow">
            <img src={techgramLogo} alt="Techgram" className="w-24 h-24 object-contain" />
          </div>
        </motion.div>

        {/* Company name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <Sparkles className="w-7 h-7 text-accent" />
          <span className="text-3xl font-medium tracking-[0.3em] text-muted-foreground uppercase">
            Techgram
          </span>
          <Sparkles className="w-7 h-7 text-accent" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-8xl font-bold leading-tight mb-8 max-w-[1400px]"
        >
          <span className="gradient-text">Revolutionizing</span>
          <br />
          <span className="text-foreground">Global Education with </span>
          <span className="gradient-text">AI</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-3xl text-muted-foreground max-w-[1000px] leading-relaxed"
        >
          Building the world's first AI-native Student Operating System —
          personalizing learning, skills, and careers for 250M+ students
        </motion.p>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-12 px-8 py-4 rounded-full glass-card text-lg text-muted-foreground tracking-wider font-medium glow-border"
        >
          PRE-SEED · 2025 · AI × EDUCATION × INDIA
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide1Hero;
