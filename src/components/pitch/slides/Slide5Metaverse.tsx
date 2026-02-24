import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import { BookOpen, Users, ShoppingBag, Rocket } from "lucide-react";

const realms = [
  { icon: BookOpen, title: "Learning Realm", desc: "AI tutoring, adaptive tests, smart notes, doubt resolution", angle: 0, color: "hsl(230, 80%, 65%)", metric: "3x retention" },
  { icon: Users, title: "Community Realm", desc: "Study groups, mentorship, events, peer collaboration", angle: 90, color: "hsl(270, 60%, 55%)", metric: "45min avg session" },
  { icon: ShoppingBag, title: "Lifestyle Realm", desc: "Student marketplace, housing, wellness, daily tools", angle: 180, color: "hsl(190, 90%, 55%)", metric: "2.5x engagement" },
  { icon: Rocket, title: "Career Realm", desc: "Skills, certifications, internships, job matching", angle: 270, color: "hsl(45, 90%, 55%)", metric: "85% placement rate" },
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
          <p className="text-primary text-xl font-medium tracking-widest uppercase mb-2">Educational Metaverse</p>
          <h2 className="text-6xl font-bold mb-2">
            Four Realms, <span className="gradient-text">One Living Universe</span>
          </h2>
        </motion.div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative" style={{ width: 700, height: 700 }}>
            {/* Orbiting rings with gradient */}
            <motion.div
              className="absolute inset-4 rounded-full"
              style={{ border: "2px solid hsla(230, 80%, 65%, 0.15)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-16 rounded-full"
              style={{ border: "2px solid hsla(270, 60%, 55%, 0.12)" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-28 rounded-full"
              style={{ border: "1px solid hsla(190, 90%, 55%, 0.1)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="w-40 h-40 rounded-full glass-card glow-border flex items-center justify-center"
              >
                <span className="text-2xl font-bold gradient-text text-center">Techgram<br />OS</span>
              </motion.div>
            </div>

            {/* Realm nodes */}
            {realms.map((r, i) => {
              const rad = (r.angle * Math.PI) / 180;
              const radius = 280;
              const x = 350 + Math.cos(rad) * radius - 150;
              const y = 350 + Math.sin(rad) * radius - 90;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.15, type: "spring" }}
                  className="absolute glass-card rounded-2xl p-6 w-[300px] hover:glow-border transition-all"
                  style={{ left: x, top: y }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <r.icon className="w-9 h-9" style={{ color: r.color }} />
                    <h3 className="text-xl font-bold">{r.title}</h3>
                  </div>
                  <p className="text-base text-muted-foreground mb-3">{r.desc}</p>
                  <div className="px-3 py-1 rounded-full glass text-sm font-semibold inline-block" style={{ color: r.color }}>
                    {r.metric}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right side key features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="ml-12 space-y-6 max-w-[420px]"
          >
            <h3 className="text-2xl font-bold mb-4">Why It Works</h3>
            {["Seamless cross-realm data flow", "AI connects all student activities", "Single identity across all services", "Network effects multiply value exponentially"].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-xl text-muted-foreground">{t}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide5Metaverse;
