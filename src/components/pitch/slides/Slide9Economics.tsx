import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import AnimatedCounter from "../AnimatedCounter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Tooltip, LineChart, Line, ComposedChart } from "recharts";

const revenueData = [
  { year: "Y1", revenue: 7.2, margin: 45 },
  { year: "Y2", revenue: 54, margin: 58 },
  { year: "Y3", revenue: 270, margin: 72 },
  { year: "Y4", revenue: 918, margin: 80 },
  { year: "Y5", revenue: 2946, margin: 84 },
];

const streamData = [
  { name: "Premium AI Plans", value: 40, color: "hsl(230, 80%, 65%)" },
  { name: "Certifications", value: 25, color: "hsl(270, 60%, 55%)" },
  { name: "Institutional", value: 20, color: "hsl(190, 90%, 55%)" },
  { name: "Student Services", value: 15, color: "hsl(45, 90%, 55%)" },
];

const unitEcon = [
  { label: "CAC", value: "₹200", desc: "Cost per acquisition" },
  { label: "LTV", value: "₹15,600", desc: "Lifetime value" },
  { label: "Payback", value: "<30d", desc: "Payback period" },
  { label: "Gross Margin", value: "84%", desc: "At scale (Y5)" },
];

const Slide9Economics = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-xl font-medium tracking-widest uppercase mb-2">Unit Economics</p>
          <h2 className="text-6xl font-bold mb-2">
            Path to <span className="gradient-text">₹2,946 Cr Revenue</span>
          </h2>
        </motion.div>

        <div className="flex-1 flex flex-col gap-6 justify-center">
          <div className="flex gap-8">
            {/* Revenue + Margin chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 flex-1"
            >
              <h3 className="text-xl font-semibold mb-4">Revenue (₹ Cr) & Gross Margin %</h3>
              <ResponsiveContainer width="100%" height={340}>
                <ComposedChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsla(222, 30%, 25%, 0.3)" />
                  <XAxis dataKey="year" stroke="hsl(215, 20%, 55%)" fontSize={18} />
                  <YAxis yAxisId="left" stroke="hsl(215, 20%, 55%)" fontSize={16} />
                  <YAxis yAxisId="right" orientation="right" stroke="hsl(150, 60%, 50%)" fontSize={14} domain={[0, 100]} />
                  <Tooltip contentStyle={{ background: "hsl(222, 47%, 9%)", border: "1px solid hsl(222, 30%, 25%)", borderRadius: 12, color: "hsl(210, 40%, 96%)" }} />
                  <Bar yAxisId="left" dataKey="revenue" radius={[8, 8, 0, 0]}>
                    {revenueData.map((_, i) => (
                      <Cell key={i} fill={`hsl(${230 + i * 10}, 80%, ${60 + i * 3}%)`} />
                    ))}
                  </Bar>
                  <Line yAxisId="right" type="monotone" dataKey="margin" stroke="hsl(150, 70%, 50%)" strokeWidth={3} dot={{ fill: "hsl(150, 70%, 50%)", r: 5 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Donut chart */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 w-[480px]"
            >
              <h3 className="text-xl font-semibold mb-4">Revenue Streams</h3>
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie data={streamData} cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={4} dataKey="value">
                    {streamData.map((s, i) => (
                      <Cell key={i} fill={s.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "hsl(222, 47%, 9%)", border: "1px solid hsl(222, 30%, 25%)", borderRadius: 12, color: "hsl(210, 40%, 96%)" }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-2">
                {streamData.map((s) => (
                  <div key={s.name} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ background: s.color }} />
                    <span className="text-base text-muted-foreground">{s.name}</span>
                    <span className="ml-auto text-base font-bold">{s.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Unit economics callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="grid grid-cols-4 gap-6"
          >
            {unitEcon.map((u, i) => (
              <motion.div
                key={u.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                className="glass-card rounded-xl p-5 text-center glow-border"
              >
                <p className="text-sm text-muted-foreground mb-1">{u.label}</p>
                <p className="text-3xl font-bold gradient-text">{u.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{u.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide9Economics;
