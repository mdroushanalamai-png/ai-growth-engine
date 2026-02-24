import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import { Brain, Sparkles } from "lucide-react";

const Slide1Hero = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full text-center relative">
        {/* Glowing orb */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(230, 80%, 65%) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Logo / Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 rounded-2xl glass-card flex items-center justify-center glow-border">
            <Brain className="w-12 h-12 text-primary" />
          </div>
        </motion.div>

        {/* Company name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <Sparkles className="w-6 h-6 text-accent" />
          <span className="text-2xl font-medium tracking-[0.3em] text-muted-foreground uppercase">
            Techgram
          </span>
          <Sparkles className="w-6 h-6 text-accent" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-7xl font-bold leading-tight mb-8 max-w-[1400px]"
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
          className="text-2xl text-muted-foreground max-w-[900px] leading-relaxed"
        >
          Building the world's first AI-native Student Operating System —
          personalizing learning, skills, and careers for 250M+ students
        </motion.p>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-12 px-6 py-3 rounded-full glass-card text-sm text-muted-foreground tracking-wider"
        >
          PRE-SEED · 2025 · AI × EDUCATION
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide1Hero;
