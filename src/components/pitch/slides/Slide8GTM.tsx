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

const funnelSteps = [
  { label: "Awareness", value: "10M+", width: "100%" },
  { label: "Sign-ups", value: "2M", width: "75%" },
  { label: "Active Users", value: "800K", width: "50%" },
  { label: "Paid Users", value: "200K", width: "30%" },
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
          <p className="text-primary text-xl font-medium tracking-widest uppercase mb-2">Go-To-Market</p>
          <h2 className="text-6xl font-bold mb-2">
            Five Phases to <span className="gradient-text">Global Dominance</span>
          </h2>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center gap-8">
          {/* Timeline */}
          <div className="relative">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="absolute top-10 left-0 right-0 h-1 origin-left"
              style={{ background: "linear-gradient(to right, hsl(230, 80%, 65%), hsl(270, 60%, 55%), hsl(190, 90%, 55%))" }}
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
                  <div className="w-20 h-20 rounded-full glass-card glow-border flex items-center justify-center mb-4 relative z-10">
                    <p.icon className="w-9 h-9 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                  <p className="text-base text-primary font-medium mb-1">{p.period}</p>
                  <p className="text-base text-muted-foreground">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex gap-8">
            {/* Validation metrics */}
            <div className="grid grid-cols-4 gap-5 flex-1">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="glass-card rounded-xl p-5 text-center"
                >
                  <p className="text-5xl font-bold gradient-text stat-glow mb-2">
                    <AnimatedCounter target={m.value} suffix={m.suffix} duration={2000} />
                  </p>
                  <p className="text-base text-muted-foreground">{m.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Funnel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="glass-card rounded-2xl p-5 w-[380px]"
            >
              <h3 className="text-lg font-semibold mb-4">Conversion Funnel (Y2)</h3>
              <div className="space-y-3">
                {funnelSteps.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.6 + i * 0.1, duration: 0.4 }}
                    className="origin-left"
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{f.label}</span>
                      <span className="font-semibold text-foreground">{f.value}</span>
                    </div>
                    <div className="h-5 rounded-full overflow-hidden glass">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: f.width,
                          background: `linear-gradient(to right, hsl(230, 80%, 65%), hsl(${230 + i * 15}, 70%, 60%))`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide8GTM;
