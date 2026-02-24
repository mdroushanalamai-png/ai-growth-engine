import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import AnimatedCounter from "../AnimatedCounter";
import { Rocket, Zap, Globe, Crown, TrendingUp } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from "recharts";

const timeline = [
  { year: "Y1", title: "Foundation", desc: "MVP launch, 50K users, PMF", icon: Rocket },
  { year: "Y2", title: "Growth", desc: "200K paid users, institutional deals", icon: Zap },
  { year: "Y3", title: "Scale", desc: "Pan-India, 500K paid, Series B", icon: TrendingUp },
  { year: "Y4", title: "Expand", desc: "SEA & Africa entry, 800K paid", icon: Globe },
  { year: "Y5", title: "IPO Ready", desc: "1.2M paid, $10B valuation target", icon: Crown },
];

const growthData = [
  { year: "Y1", revenue: 7, users: 50 },
  { year: "Y2", revenue: 54, users: 200 },
  { year: "Y3", revenue: 270, users: 500 },
  { year: "Y4", revenue: 918, users: 800 },
  { year: "Y5", revenue: 2946, users: 1200 },
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
          <p className="text-primary text-xl font-medium tracking-widest uppercase mb-2">Future Roadmap</p>
          <h2 className="text-6xl font-bold mb-2">
            Vision to <span className="gradient-text">$10 Billion</span>
          </h2>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center gap-8">
          {/* Timeline */}
          <div className="relative">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 1.2 }}
              className="absolute top-14 left-0 right-0 h-1 origin-left"
              style={{ background: "linear-gradient(to right, hsl(230, 80%, 65%), hsl(270, 60%, 55%), hsl(190, 90%, 55%))" }}
            />
            <div className="flex justify-between relative">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center text-center w-[280px]"
                >
                  <span className="text-base font-bold text-primary mb-2">{t.year}</span>
                  <div className="w-28 h-28 rounded-2xl glass-card glow-border flex items-center justify-center mb-4 relative z-10">
                    <t.icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{t.title}</h3>
                  <p className="text-base text-muted-foreground">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex gap-8">
            {/* Growth chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 flex-1"
            >
              <h3 className="text-xl font-semibold mb-3">Revenue (₹ Cr) & Users (K) Growth</h3>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsla(222, 30%, 25%, 0.3)" />
                  <XAxis dataKey="year" stroke="hsl(215, 20%, 55%)" fontSize={15} />
                  <YAxis stroke="hsl(215, 20%, 55%)" fontSize={13} />
                  <Tooltip contentStyle={{ background: "hsl(222, 47%, 9%)", border: "1px solid hsl(222, 30%, 25%)", borderRadius: 12, color: "hsl(210, 40%, 96%)" }} />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(230, 80%, 65%)" fill="hsla(230, 80%, 65%, 0.2)" strokeWidth={2} />
                  <Area type="monotone" dataKey="users" stroke="hsl(270, 60%, 55%)" fill="hsla(270, 60%, 55%, 0.15)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Valuation + Exit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="glass-card rounded-2xl p-8 glow-border text-center w-[500px] flex flex-col justify-center"
            >
              <p className="text-lg text-muted-foreground mb-3">Target Valuation by Year 5</p>
              <p className="text-8xl font-bold gradient-text glow-text stat-glow">
                <AnimatedCounter target={10} prefix="$" suffix="B" duration={3000} />
              </p>
              <p className="text-xl text-muted-foreground mt-4">IPO / Strategic Exit Target</p>
              <div className="flex gap-4 mt-4 justify-center">
                <span className="glass rounded-full px-4 py-2 text-sm text-muted-foreground">📈 IPO Ready</span>
                <span className="glass rounded-full px-4 py-2 text-sm text-muted-foreground">🤝 Strategic Acquisition</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide13Roadmap;
