import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import AnimatedCounter from "../AnimatedCounter";

const segments = [
  { label: "EdTech", value: "$12B", color: "hsl(230, 80%, 65%)", size: 260 },
  { label: "Freelance/Gig", value: "$8B", color: "hsl(270, 60%, 55%)", size: 220 },
  { label: "Student Living", value: "$6B", color: "hsl(190, 90%, 55%)", size: 200 },
  { label: "Social/Community", value: "$5B", color: "hsl(45, 90%, 55%)", size: 180 },
];

const Slide6Market = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-lg font-medium tracking-widest uppercase mb-2">Converging Market</p>
          <h2 className="text-5xl font-bold mb-2">
            <span className="gradient-text">$30B+</span> Converging Mega-Market
          </h2>
          <p className="text-xl text-muted-foreground">Four massive sectors merging into one addressable opportunity</p>
        </motion.div>

        <div className="flex-1 flex items-center justify-center gap-20">
          {/* Venn diagram */}
          <div className="relative" style={{ width: 600, height: 600 }}>
            {segments.map((s, i) => {
              const positions = [
                { x: 170, y: 170 },
                { x: 310, y: 170 },
                { x: 170, y: 310 },
                { x: 310, y: 310 },
              ];
              return (
                <motion.div
                  key={s.label}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.6 }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.8, type: "spring" }}
                  className="absolute rounded-full flex items-center justify-center"
                  style={{
                    width: s.size,
                    height: s.size,
                    left: positions[i].x,
                    top: positions[i].y,
                    background: `radial-gradient(circle, ${s.color}40, ${s.color}10)`,
                    border: `2px solid ${s.color}60`,
                  }}
                >
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">{s.label}</p>
                    <p className="text-sm" style={{ color: s.color }}>{s.value}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Center convergence */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute glass-card glow-border rounded-full w-24 h-24 flex items-center justify-center"
              style={{ left: 238, top: 238 }}
            >
              <span className="text-sm font-bold gradient-text">Techgram</span>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-2xl p-8 glow-border">
              <p className="text-muted-foreground text-lg mb-2">Total Converging Market</p>
              <p className="text-5xl font-bold gradient-text">
                <AnimatedCounter target={30} prefix="$" suffix="B+" duration={2000} />
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-muted-foreground text-lg mb-2">India Student Population</p>
              <p className="text-4xl font-bold text-foreground">
                <AnimatedCounter target={250} suffix="M+" duration={2000} />
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-muted-foreground text-lg mb-2">CAGR Growth</p>
              <p className="text-4xl font-bold text-emerald-400">
                <AnimatedCounter target={25} suffix="%" duration={2000} />
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide6Market;
