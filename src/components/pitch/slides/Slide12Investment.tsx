import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import AnimatedCounter from "../AnimatedCounter";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Check, TrendingUp } from "lucide-react";

const fundData = [
  { name: "Technology", value: 70, color: "hsl(230, 80%, 65%)" },
  { name: "Team", value: 15, color: "hsl(270, 60%, 55%)" },
  { name: "Marketing", value: 12.5, color: "hsl(190, 90%, 55%)" },
  { name: "Contingency", value: 2.5, color: "hsl(45, 90%, 55%)" },
];

const milestones = [
  "Launch MVP with 10K active users",
  "Achieve product-market fit with 70%+ retention",
  "Sign 5+ institutional partners (schools/coaching)",
  "Build core AI personalization engine",
  "Reach ₹7.2 Cr ARR run-rate",
  "Prepare for Series A raise at 10x valuation",
];

const returnScenarios = [
  { scenario: "Base", multiple: "10x", value: "₹8 Cr", timeline: "3 Years" },
  { scenario: "Growth", multiple: "50x", value: "₹40 Cr", timeline: "5 Years" },
  { scenario: "Moonshot", multiple: "100x", value: "₹80 Cr", timeline: "7 Years" },
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
          <p className="text-primary text-xl font-medium tracking-widest uppercase mb-2">Investment Ask</p>
          <h2 className="text-6xl font-bold mb-2">
            Raising <span className="gradient-text">₹80 Lakhs</span> Seed Round
          </h2>
        </motion.div>

        <div className="flex-1 flex items-center gap-10">
          {/* Pie chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card rounded-2xl p-8 w-[550px]"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">Use of Funds</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fundData}
                  cx="50%"
                  cy="50%"
                  outerRadius={130}
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
                  <div className="w-4 h-4 rounded-full" style={{ background: d.color }} />
                  <span className="text-base text-muted-foreground font-medium">{d.name} — {d.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <div className="flex-1 space-y-6">
            {/* Amount */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-2xl p-8 glow-border text-center"
            >
              <p className="text-muted-foreground text-xl mb-2">Seed Round</p>
              <p className="text-7xl font-bold gradient-text stat-glow">
                <AnimatedCounter target={80} prefix="₹" suffix=" Lakhs" duration={2000} />
              </p>
            </motion.div>

            {/* Return scenarios */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" /> Return Scenarios
              </h3>
              <div className="flex gap-4">
                {returnScenarios.map((r, i) => (
                  <motion.div
                    key={r.scenario}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="flex-1 glass rounded-xl p-4 text-center"
                  >
                    <p className="text-sm text-muted-foreground">{r.scenario}</p>
                    <p className="text-3xl font-bold gradient-text">{r.multiple}</p>
                    <p className="text-base font-semibold">{r.value}</p>
                    <p className="text-xs text-muted-foreground">{r.timeline}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Milestones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">Key Milestones</h3>
              <div className="grid grid-cols-2 gap-2">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.08 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm text-muted-foreground">{m}</span>
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

export default Slide12Investment;
