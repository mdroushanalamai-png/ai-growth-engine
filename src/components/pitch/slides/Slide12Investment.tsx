import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import AnimatedCounter from "../AnimatedCounter";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const fundData = [
  { name: "Technology", value: 70, color: "hsl(230, 80%, 65%)" },
  { name: "Team", value: 15, color: "hsl(270, 60%, 55%)" },
  { name: "Marketing", value: 12.5, color: "hsl(190, 90%, 55%)" },
  { name: "Contingency", value: 2.5, color: "hsl(45, 90%, 55%)" },
];

const milestones = [
  "Launch MVP with 10K users",
  "Achieve product-market fit",
  "Sign 5 institutional partners",
  "Build core AI personalization engine",
  "Prepare for Series A raise",
];

const Slide12Investment = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-lg font-medium tracking-widest uppercase mb-2">Investment Ask</p>
          <h2 className="text-5xl font-bold mb-2">
            Raising <span className="gradient-text">₹80 Lakhs</span> Seed Round
          </h2>
        </motion.div>

        <div className="flex-1 flex items-center gap-12">
          {/* Pie chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card rounded-2xl p-8 w-[600px]"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">Use of Funds</h3>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={fundData}
                  cx="50%"
                  cy="50%"
                  outerRadius={140}
                  paddingAngle={3}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {fundData.map((d, i) => (
                    <Cell key={i} fill={d.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {fundData.map((d) => (
                <div key={d.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: d.color }} />
                  <span className="text-sm text-muted-foreground">{d.name} — {d.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            {/* Amount */}
            <div className="glass-card rounded-2xl p-8 glow-border text-center">
              <p className="text-muted-foreground text-lg mb-2">Seed Round</p>
              <p className="text-6xl font-bold gradient-text">
                <AnimatedCounter target={80} prefix="₹" suffix=" Lakhs" duration={2000} />
              </p>
            </div>

            {/* Milestones */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Key Milestones</h3>
              <div className="space-y-3">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <span className="text-xs text-primary font-bold">{i + 1}</span>
                    </div>
                    <span className="text-base text-muted-foreground">{m}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide12Investment;
