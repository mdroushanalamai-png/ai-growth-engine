import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import AnimatedCounter from "../AnimatedCounter";
import { Rocket, Users, Building2, Globe, Crown } from "lucide-react";

const phases = [
  { icon: Rocket, title: "Beta Launch", period: "Q1-Q2 2025", desc: "Core AI tutor MVP, early adopter testing" },
  { icon: Users, title: "Student Acquisition", period: "Q3-Q4 2025", desc: "Campus ambassadors, viral loops" },
  { icon: Building2, title: "Institutional", period: "2026", desc: "School & coaching center partnerships" },
  { icon: Globe, title: "Regional Scale", period: "2027", desc: "Pan-India expansion, vernacular AI" },
  { icon: Crown, title: "Global Dominance", period: "2028+", desc: "SEA, Africa, LATAM markets" },
];

const metrics = [
  { label: "Survey Validation", value: 85, suffix: "%" },
  { label: "Pre-Signups", value: 5000, suffix: "+" },
  { label: "Retention Target", value: 70, suffix: "%+" },
  { label: "LTV:CAC Ratio", value: 78, suffix: ":1" },
];

const Slide8GTM = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-lg font-medium tracking-widest uppercase mb-2">Go-To-Market</p>
          <h2 className="text-5xl font-bold mb-2">
            Five Phases to <span className="gradient-text">Global Dominance</span>
          </h2>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center gap-12">
          {/* Timeline */}
          <div className="relative">
            {/* Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary/30 origin-left"
            />

            <div className="flex justify-between relative">
              {phases.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center text-center w-[280px]"
                >
                  <div className="w-16 h-16 rounded-full glass-card glow-border flex items-center justify-center mb-4 relative z-10">
                    <p.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm text-primary mb-1">{p.period}</p>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Validation metrics */}
          <div className="grid grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <p className="text-4xl font-bold gradient-text mb-2">
                  <AnimatedCounter target={m.value} suffix={m.suffix} duration={2000} />
                </p>
                <p className="text-sm text-muted-foreground">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide8GTM;
