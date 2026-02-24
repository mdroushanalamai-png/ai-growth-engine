import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import AnimatedCounter from "../AnimatedCounter";
import { Rocket, Zap, Globe, Crown, TrendingUp } from "lucide-react";

const timeline = [
  { year: "Y1", title: "Foundation", desc: "MVP launch, 50K users, PMF", icon: Rocket },
  { year: "Y2", title: "Growth", desc: "200K paid users, institutional deals", icon: Zap },
  { year: "Y3", title: "Scale", desc: "Pan-India, 500K paid, Series B", icon: TrendingUp },
  { year: "Y4", title: "Expand", desc: "SEA & Africa entry, 800K paid", icon: Globe },
  { year: "Y5", title: "IPO Ready", desc: "1.2M paid, $10B valuation target", icon: Crown },
];

const Slide13Roadmap = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-lg font-medium tracking-widest uppercase mb-2">Future Roadmap</p>
          <h2 className="text-5xl font-bold mb-2">
            Vision to <span className="gradient-text">$10 Billion</span>
          </h2>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center gap-16">
          {/* Timeline */}
          <div className="relative">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 1.2 }}
              className="absolute top-12 left-0 right-0 h-1 origin-left"
              style={{ background: "linear-gradient(to right, hsl(230, 80%, 65%), hsl(270, 60%, 55%), hsl(190, 90%, 55%))" }}
            />

            <div className="flex justify-between relative">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center text-center w-[300px]"
                >
                  <span className="text-sm font-medium text-primary mb-2">{t.year}</span>
                  <div className="w-24 h-24 rounded-2xl glass-card glow-border flex items-center justify-center mb-4 relative z-10">
                    <t.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Valuation target */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="glass-card rounded-2xl p-8 glow-border text-center max-w-[700px] mx-auto"
          >
            <p className="text-lg text-muted-foreground mb-3">Target Valuation by Year 5</p>
            <p className="text-7xl font-bold gradient-text glow-text">
              <AnimatedCounter target={10} prefix="$" suffix="B" duration={3000} />
            </p>
            <p className="text-lg text-muted-foreground mt-3">IPO / Strategic Exit Target</p>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide13Roadmap;
