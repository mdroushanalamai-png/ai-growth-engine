import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import { Mail, Globe, Linkedin, Sparkles } from "lucide-react";

const Slide14CTA = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full text-center relative">
        {/* Glowing orb */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(270, 60%, 55%, 0.15) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <Sparkles className="w-6 h-6 text-accent" />
          <span className="text-xl tracking-[0.3em] text-muted-foreground uppercase">Techgram</span>
          <Sparkles className="w-6 h-6 text-accent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl font-bold leading-tight mb-8 max-w-[1200px]"
        >
          Let's Build the{" "}
          <span className="gradient-text">Future of Education</span>
          {" "}Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-2xl text-muted-foreground max-w-[800px] mb-12 italic"
        >
          "An investment in education is an investment in our future."
        </motion.p>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex gap-6"
        >
          {[
            { icon: Mail, label: "hello@techgram.in" },
            { icon: Globe, label: "techgram.in" },
            { icon: Linkedin, label: "LinkedIn" },
          ].map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1 }}
              className="glass-card rounded-xl px-6 py-4 flex items-center gap-3 hover:glow-border transition-all cursor-pointer"
            >
              <c.icon className="w-5 h-5 text-primary" />
              <span className="text-lg">{c.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-12"
        >
          <div className="px-10 py-4 rounded-full text-xl font-semibold cursor-pointer glow-border transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, hsl(230, 80%, 55%), hsl(270, 60%, 50%))",
            }}
          >
            Invest in Techgram →
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};

export default Slide14CTA;
