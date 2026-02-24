import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import { BookOpen, Users, ShoppingBag, Rocket } from "lucide-react";

const realms = [
  { icon: BookOpen, title: "Learning Realm", desc: "AI tutoring, adaptive tests, smart notes, doubt resolution", angle: 0, color: "hsl(230, 80%, 65%)" },
  { icon: Users, title: "Community Realm", desc: "Study groups, mentorship, events, peer collaboration", angle: 90, color: "hsl(270, 60%, 55%)" },
  { icon: ShoppingBag, title: "Lifestyle Realm", desc: "Student marketplace, housing, wellness, daily tools", angle: 180, color: "hsl(190, 90%, 55%)" },
  { icon: Rocket, title: "Career Realm", desc: "Skills, certifications, internships, job matching", angle: 270, color: "hsl(45, 90%, 55%)" },
];

const Slide5Metaverse = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-lg font-medium tracking-widest uppercase mb-2">Educational Metaverse</p>
          <h2 className="text-5xl font-bold mb-2">
            Four Realms, <span className="gradient-text">One Living Universe</span>
          </h2>
        </motion.div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative" style={{ width: 700, height: 700 }}>
            {/* Orbiting ring */}
            <motion.div
              className="absolute inset-8 rounded-full border border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-20 rounded-full border border-accent/15"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="w-36 h-36 rounded-full glass-card glow-border flex items-center justify-center"
              >
                <span className="text-xl font-bold gradient-text text-center">Techgram<br />OS</span>
              </motion.div>
            </div>

            {/* Realm nodes */}
            {realms.map((r, i) => {
              const rad = (r.angle * Math.PI) / 180;
              const radius = 280;
              const x = 350 + Math.cos(rad) * radius - 140;
              const y = 350 + Math.sin(rad) * radius - 80;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
                  className="absolute glass-card rounded-2xl p-5 w-[280px] hover:glow-border transition-all"
                  style={{ left: x, top: y }}
                >
                  <r.icon className="w-8 h-8 mb-3" style={{ color: r.color }} />
                  <h3 className="text-xl font-semibold mb-1">{r.title}</h3>
                  <p className="text-sm text-muted-foreground">{r.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Right side key features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="ml-12 space-y-6 max-w-[400px]"
          >
            {["Seamless cross-realm data flow", "AI connects all student activities", "Single identity across services", "Network effects multiply value"].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-lg text-muted-foreground">{t}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide5Metaverse;
