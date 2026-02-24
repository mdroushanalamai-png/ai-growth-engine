import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import { Brain, Users, Briefcase, Home, Zap, BarChart3, Clock } from "lucide-react";
import solutionBg from "@/assets/solution-bg.jpg";

const pillars = [
  { icon: Brain, title: "AI Super Teacher", desc: "Adaptive learning engine that personalizes every lesson, test, and revision in real-time", color: "from-blue-500 to-cyan-400" },
  { icon: Users, title: "Connect Realm", desc: "Student social network for collaboration, mentorship, and peer-to-peer community building", color: "from-purple-500 to-pink-400" },
  { icon: Briefcase, title: "Career Guide", desc: "AI-driven career mapping, skill certifications, and internship/job matching", color: "from-emerald-400 to-teal-400" },
  { icon: Home, title: "Lifestyle Hub", desc: "Student services — housing discovery, marketplace, wellness tools, and daily essentials", color: "from-amber-400 to-orange-400" },
];

const whyAI = [
  { icon: Zap, stat: "10x", desc: "faster learning adaptation" },
  { icon: BarChart3, stat: "3x", desc: "better retention rates" },
  { icon: Clock, stat: "24/7", desc: "personalized availability" },
];

const Slide4Solution = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full relative">
        <img src={solutionBg} alt="" className="absolute bottom-0 right-0 w-[350px] h-[350px] object-cover opacity-15 rounded-3xl pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-xl font-medium tracking-widest uppercase mb-2">The Solution</p>
          <h2 className="text-6xl font-bold mb-2">
            One Unified Ecosystem —{" "}
            <span className="gradient-text">Four Powerful Pillars</span>
          </h2>
        </motion.div>

        <div className="flex-1 flex flex-col items-center justify-center gap-10">
          <div className="relative">
            {/* Central brain */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="w-36 h-36 rounded-full glass-card glow-border flex items-center justify-center mx-auto mb-10 relative z-10"
            >
              <Brain className="w-16 h-16 text-primary" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-accent/20"
                animate={{ scale: [1.2, 1.6, 1.2], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            {/* Pillar cards */}
            <div className="grid grid-cols-4 gap-8" style={{ width: 1600 }}>
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
                  className="glass-card rounded-2xl p-8 text-center hover:glow-border transition-all duration-300"
                >
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <p.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why AI callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex gap-8 items-center glass-card rounded-2xl p-6 glow-border"
          >
            <span className="text-2xl font-bold gradient-text">Why AI?</span>
            {whyAI.map((w, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <w.icon className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold gradient-text">{w.stat}</span>
                <span className="text-base text-muted-foreground">{w.desc}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide4Solution;
