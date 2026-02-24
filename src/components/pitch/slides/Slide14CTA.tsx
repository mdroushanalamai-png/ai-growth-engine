import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import { Mail, Globe, Linkedin, Sparkles, Rocket, TrendingUp, Users, Zap } from "lucide-react";
import techgramLogo from "@/assets/techgram-logo.png";

const whyInvest = [
  { icon: Rocket, text: "First-mover in AI-native student OS — no direct competitor" },
  { icon: TrendingUp, text: "$30B+ TAM growing 25% YoY with strong unit economics" },
  { icon: Users, text: "250M+ addressable students, world's largest Gen-Z market" },
  { icon: Zap, text: "78:1 LTV:CAC ratio with <30 day payback period" },
];

const Slide14CTA = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col items-center justify-center h-full text-center relative aurora-bg">
        {/* Glowing orbs */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(270, 60%, 55%, 0.15) 0%, hsla(230, 80%, 65%, 0.08) 40%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsla(190, 90%, 55%, 0.1) 0%, transparent 60%)",
          }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-6"
        >
          <img src={techgramLogo} alt="Techgram" className="w-28 h-28 object-contain" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <Sparkles className="w-7 h-7 text-accent" />
          <span className="text-2xl tracking-[0.3em] text-muted-foreground uppercase font-medium">Techgram</span>
          <Sparkles className="w-7 h-7 text-accent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-7xl font-bold leading-tight mb-6 max-w-[1200px]"
        >
          Let's Build the{" "}
          <span className="gradient-text">Future of Education</span>
          {" "}Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-2xl text-muted-foreground max-w-[800px] mb-8 italic"
        >
          "An investment in education is an investment in our future."
        </motion.p>

        {/* Why invest now */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="grid grid-cols-2 gap-4 max-w-[900px] mb-10"
        >
          {whyInvest.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              className="glass rounded-xl px-5 py-3 flex items-center gap-3 text-left"
            >
              <w.icon className="w-5 h-5 text-primary shrink-0" />
              <span className="text-base text-muted-foreground">{w.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex gap-6 mb-8"
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
              transition={{ delay: 1.5 + i * 0.1 }}
              className="glass-card rounded-xl px-6 py-4 flex items-center gap-3 hover:glow-border transition-all cursor-pointer"
            >
              <c.icon className="w-5 h-5 text-primary" />
              <span className="text-lg font-medium">{c.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <motion.div
            className="px-12 py-5 rounded-full text-2xl font-bold cursor-pointer transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, hsl(230, 80%, 55%), hsl(270, 60%, 50%))",
            }}
            animate={{ boxShadow: ["0 0 20px hsla(230, 80%, 55%, 0.3)", "0 0 50px hsla(230, 80%, 55%, 0.6)", "0 0 20px hsla(230, 80%, 55%, 0.3)"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Invest in Techgram →
          </motion.div>
        </motion.div>

        {/* Founder contact */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="text-sm text-muted-foreground mt-6"
        >
          Ariba Irfan · CEO & Co-Founder · ariba@techgram.in
        </motion.p>
      </div>
    </SlideLayout>
  );
};

export default Slide14CTA;
