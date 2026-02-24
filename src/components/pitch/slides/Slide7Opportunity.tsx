import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import AnimatedCounter from "../AnimatedCounter";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from "recharts";

const circles = [
  { label: "TAM", value: "$68B", desc: "Global Student Services", size: 520, color: "hsla(230, 80%, 65%, 0.18)", borderColor: "hsla(230, 80%, 65%, 0.5)" },
  { label: "SAM", value: "50-70M", desc: "India Addressable Students", size: 360, color: "hsla(270, 60%, 55%, 0.22)", borderColor: "hsla(270, 60%, 55%, 0.55)" },
  { label: "SOM", value: "20M", desc: "Year 5 Target", size: 200, color: "hsla(190, 90%, 55%, 0.28)", borderColor: "hsla(190, 90%, 55%, 0.65)" },
];

const revenueTrajectory = [
  { year: "Y1", revenue: 7 },
  { year: "Y2", revenue: 54 },
  { year: "Y3", revenue: 270 },
  { year: "Y4", revenue: 918 },
  { year: "Y5", revenue: 2946 },
];

const unitEconomics = [
  { label: "CAC", value: "₹200" },
  { label: "LTV", value: "₹15,600" },
  { label: "LTV:CAC", value: "78:1" },
  { label: "Payback", value: "< 30 days" },
];

const Slide7Opportunity = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-xl font-medium tracking-widest uppercase mb-2">Market Opportunity</p>
          <h2 className="text-6xl font-bold mb-2">
            <span className="gradient-text">TAM / SAM / SOM</span> Analysis
          </h2>
        </motion.div>

        <div className="flex-1 flex items-center gap-12">
          {/* Concentric circles */}
          <div className="relative flex items-center justify-center" style={{ width: 540, height: 540 }}>
            {circles.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.3, duration: 0.8, type: "spring" }}
                className="absolute rounded-full flex flex-col items-center justify-center"
                style={{ width: c.size, height: c.size, background: c.color, border: `2px solid ${c.borderColor}` }}
              >
                {i === circles.length - 1 && (
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{c.label}</p>
                    <p className="text-xl text-primary">{c.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute -top-2 text-center">
              <span className="text-xl font-bold text-foreground">TAM — $68B</span>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="absolute top-[80px] text-center">
              <span className="text-xl font-bold text-foreground">SAM — 50-70M</span>
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            {/* Revenue trajectory chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Revenue Trajectory (₹ Cr)</h3>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={revenueTrajectory}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsla(222, 30%, 25%, 0.3)" />
                  <XAxis dataKey="year" stroke="hsl(215, 20%, 55%)" fontSize={16} />
                  <YAxis stroke="hsl(215, 20%, 55%)" fontSize={14} />
                  <Tooltip contentStyle={{ background: "hsl(222, 47%, 9%)", border: "1px solid hsl(222, 30%, 25%)", borderRadius: 12, color: "hsl(210, 40%, 96%)" }} />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(230, 80%, 65%)" fill="hsla(230, 80%, 65%, 0.2)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Revenue projections table */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="space-y-3"
            >
              {[
                { year: "Year 1", rev: "₹7.2 Cr", users: "50K" },
                { year: "Year 2", rev: "₹54 Cr", users: "200K" },
                { year: "Year 3", rev: "₹270 Cr", users: "500K" },
                { year: "Year 5", rev: "₹2,946 Cr", users: "1.2M" },
              ].map((r, i) => (
                <motion.div
                  key={r.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="flex items-center justify-between glass-card rounded-xl p-3 px-5"
                >
                  <span className="text-lg font-medium">{r.year}</span>
                  <span className="text-2xl font-bold gradient-text">{r.rev}</span>
                  <span className="text-muted-foreground text-lg">{r.users} paid</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Unit economics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex gap-4"
            >
              {unitEconomics.map((u, i) => (
                <div key={i} className="glass rounded-xl px-5 py-3 flex-1 text-center">
                  <p className="text-sm text-muted-foreground">{u.label}</p>
                  <p className="text-xl font-bold gradient-text">{u.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide7Opportunity;
