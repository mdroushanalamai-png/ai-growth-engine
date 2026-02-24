import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const revenueData = [
  { year: "Y1", revenue: 7.2 },
  { year: "Y2", revenue: 54 },
  { year: "Y3", revenue: 270 },
  { year: "Y4", revenue: 918 },
  { year: "Y5", revenue: 2946 },
];

const streamData = [
  { name: "Premium AI Plans", value: 40, color: "hsl(230, 80%, 65%)" },
  { name: "Certifications", value: 25, color: "hsl(270, 60%, 55%)" },
  { name: "Institutional", value: 20, color: "hsl(190, 90%, 55%)" },
  { name: "Student Services", value: 15, color: "hsl(45, 90%, 55%)" },
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
          <p className="text-primary text-lg font-medium tracking-widest uppercase mb-2">Unit Economics</p>
          <h2 className="text-5xl font-bold mb-2">
            Path to <span className="gradient-text">₹2,946 Cr Revenue</span>
          </h2>
        </motion.div>

        <div className="flex-1 flex items-center gap-12">
          {/* Bar chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card rounded-2xl p-8 flex-1"
          >
            <h3 className="text-xl font-semibold mb-6">Revenue Growth (₹ Cr)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsla(222, 30%, 25%, 0.3)" />
                <XAxis dataKey="year" stroke="hsl(215, 20%, 55%)" fontSize={18} />
                <YAxis stroke="hsl(215, 20%, 55%)" fontSize={16} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(222, 47%, 9%)",
                    border: "1px solid hsl(222, 30%, 25%)",
                    borderRadius: 12,
                    color: "hsl(210, 40%, 96%)",
                  }}
                />
                <Bar dataKey="revenue" radius={[8, 8, 0, 0]}>
                  {revenueData.map((_, i) => (
                    <Cell key={i} fill={`hsl(${230 + i * 10}, 80%, ${60 + i * 3}%)`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Donut chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass-card rounded-2xl p-8 w-[550px]"
          >
            <h3 className="text-xl font-semibold mb-6">Revenue Streams</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={streamData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={130}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {streamData.map((s, i) => (
                    <Cell key={i} fill={s.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "hsl(222, 47%, 9%)",
                    border: "1px solid hsl(222, 30%, 25%)",
                    borderRadius: 12,
                    color: "hsl(210, 40%, 96%)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3 mt-4">
              {streamData.map((s) => (
                <div key={s.name} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ background: s.color }} />
                  <span className="text-sm text-muted-foreground">{s.name}</span>
                  <span className="ml-auto text-sm font-medium">{s.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide9Economics;
