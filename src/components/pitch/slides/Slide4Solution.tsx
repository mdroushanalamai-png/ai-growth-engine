import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import { Brain, Users, Briefcase, Home } from "lucide-react";

const pillars = [
  { icon: Brain, title: "AI Super Teacher", desc: "Adaptive learning engine that personalizes every lesson, test, and revision", color: "from-blue-500 to-cyan-400" },
  { icon: Users, title: "Connect Realm", desc: "Student social network for collaboration, mentorship, and community", color: "from-purple-500 to-pink-400" },
  { icon: Briefcase, title: "Career Guide", desc: "AI-driven career mapping, skill certifications, and internship matching", color: "from-emerald-400 to-teal-400" },
  { icon: Home, title: "Lifestyle Hub", desc: "Student services — housing, marketplace, wellness, and daily life tools", color: "from-amber-400 to-orange-400" },
];

const Slide4Solution = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-lg font-medium tracking-widest uppercase mb-2">The Solution</p>
          <h2 className="text-5xl font-bold mb-2">
            One Unified Ecosystem —{" "}
            <span className="gradient-text">Four Powerful Pillars</span>
          </h2>
        </motion.div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            {/* Central brain */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="w-32 h-32 rounded-full glass-card glow-border flex items-center justify-center mx-auto mb-12 relative z-10"
            >
              <Brain className="w-14 h-14 text-primary" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
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
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <p.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide4Solution;
