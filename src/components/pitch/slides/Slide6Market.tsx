import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import AnimatedCounter from "../AnimatedCounter";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts";
import marketBg from "@/assets/market-bg.jpg";

const segments = [
  { label: "EdTech", value: "$12B", color: "hsl(230, 80%, 65%)", size: 280 },
  { label: "Freelance/Gig", value: "$8B", color: "hsl(270, 60%, 55%)", size: 240 },
  { label: "Student Living", value: "$6B", color: "hsl(190, 90%, 55%)", size: 220 },
  { label: "Social/Community", value: "$5B", color: "hsl(45, 90%, 55%)", size: 200 },
];

const cagrData = [
  { name: "EdTech", cagr: 35, color: "hsl(230, 80%, 65%)" },
  { name: "Gig Economy", cagr: 28, color: "hsl(270, 60%, 55%)" },
  { name: "Student Living", cagr: 22, color: "hsl(190, 90%, 55%)" },
  { name: "Social", cagr: 18, color: "hsl(45, 90%, 55%)" },
];

const Slide6Market = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full relative">
        <img src={marketBg} alt="" className="absolute top-0 left-0 w-[300px] h-[300px] object-cover opacity-10 rounded-3xl pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-xl font-medium tracking-widest uppercase mb-2">Converging Market</p>
          <h2 className="text-6xl font-bold mb-2">
            <span className="gradient-text">$30B+</span> Converging Mega-Market
          </h2>
          <p className="text-2xl text-muted-foreground">Four massive sectors merging into one addressable opportunity</p>
        </motion.div>

        <div className="flex-1 flex items-center gap-8">
          {/* Venn diagram - tighter, centered */}
          <div className="relative shrink-0" style={{ width: 480, height: 480 }}>
            {segments.map((s, i) => {
              const positions = [
                { x: 100, y: 100 },
                { x: 260, y: 100 },
                { x: 100, y: 260 },
                { x: 260, y: 260 },
              ];
              return (
                <motion.div
                  key={s.label}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.65 }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.8, type: "spring" }}
                  className="absolute rounded-full flex items-center justify-center"
                  style={{
                    width: s.size * 0.75,
                    height: s.size * 0.75,
                    left: positions[i].x,
                    top: positions[i].y,
                    background: `radial-gradient(circle, ${s.color}50, ${s.color}15)`,
                    border: `2px solid ${s.color}70`,
                  }}
                >
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">{s.label}</p>
                    <p className="text-base font-semibold" style={{ color: s.color }}>{s.value}</p>
                  </div>
                </motion.div>
              );
            })}
            {/* Techgram center node */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute glass-card glow-border rounded-full w-24 h-24 flex items-center justify-center"
              style={{ left: 192, top: 192 }}
            >
              <span className="text-base font-bold gradient-text">Techgram</span>
            </motion.div>
          </div>

          {/* Right content */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Top row: total market + India stats */}
            <div className="flex gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="glass-card rounded-2xl p-5 glow-border flex-1"
              >
                <p className="text-muted-foreground text-base mb-1">Total Converging Market</p>
                <p className="text-5xl font-bold gradient-text stat-glow">
                  <AnimatedCounter target={30} prefix="$" suffix="B+" duration={2000} />
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="glass-card rounded-2xl p-5 flex-1"
              >
                <p className="text-muted-foreground text-base mb-1">India Student Population</p>
                <p className="text-4xl font-bold text-foreground">
                  <AnimatedCounter target={250} suffix="M+" duration={2000} />
                </p>
              </motion.div>
            </div>

            {/* CAGR chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="glass-card rounded-2xl p-5"
            >
              <h3 className="text-lg font-semibold mb-3">Segment CAGR %</h3>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={cagrData} layout="vertical">
                  <XAxis type="number" stroke="hsl(215, 20%, 55%)" fontSize={13} />
                  <YAxis type="category" dataKey="name" stroke="hsl(215, 20%, 55%)" fontSize={12} width={85} />
                  <Tooltip contentStyle={{ background: "hsl(222, 47%, 9%)", border: "1px solid hsl(222, 30%, 25%)", borderRadius: 12, color: "hsl(210, 40%, 96%)" }} />
                  <Bar dataKey="cagr" radius={[0, 8, 8, 0]}>
                    {cagrData.map((d, i) => (
                      <Cell key={i} fill={d.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Why India */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="glass-card rounded-2xl p-5"
            >
              <h4 className="text-base font-bold text-primary mb-2">Why India First?</h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-base text-muted-foreground">
                <span>• World's largest Gen-Z population</span>
                <span>• 800M+ smartphone users</span>
                <span>• Education spend growing 15% YoY</span>
                <span>• Massive underserved Tier 2-3 cities</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide6Market;
