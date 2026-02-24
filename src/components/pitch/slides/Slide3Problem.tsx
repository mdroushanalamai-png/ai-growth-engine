import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import { BookX, UserX, Smartphone, GraduationCap, AlertTriangle, TrendingDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Cell, Tooltip } from "recharts";

const problems = [
  {
    icon: BookX,
    title: "Fragmented Learning",
    stat: "10+ apps",
    desc: "Students juggle disconnected tools for notes, videos, tests, and doubt-solving",
  },
  {
    icon: UserX,
    title: "Employability Crisis",
    stat: "48%",
    desc: "Nearly half of Indian graduates are unemployable due to skill-curriculum mismatch",
  },
  {
    icon: Smartphone,
    title: "Distraction Economy",
    stat: "4+ hrs/day",
    desc: "Students lose productive hours to social media designed to exploit attention",
  },
  {
    icon: GraduationCap,
    title: "Broken Tuition",
    stat: "₹37L Cr",
    desc: "India's massive coaching market still relies on one-size-fits-all batch teaching",
  },
];

const additionalStats = [
  { icon: AlertTriangle, stat: "Only 7%", desc: "have access to quality tutoring" },
  { icon: TrendingDown, stat: "80%", desc: "dropout from online courses" },
];

const eduData = [
  { name: "Spending", value: 4.6, label: "% of GDP" },
  { name: "Outcomes", value: 1.8, label: "Quality Index" },
  { name: "Access", value: 2.2, label: "Equity Score" },
  { name: "Digital", value: 3.1, label: "Readiness" },
];

const Slide3Problem = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-red-400 text-xl font-medium tracking-widest uppercase mb-2">The Problem</p>
          <h2 className="text-6xl font-bold mb-2">
            India's <span className="text-red-400">Education Crisis</span>
          </h2>
          <p className="text-2xl text-muted-foreground">A $200B+ market plagued by systemic failures</p>
        </motion.div>

        <div className="flex-1 flex gap-10 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              {problems.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                  className="glass-card rounded-2xl p-6 flex gap-5 items-start hover:glow-border transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-red-500/15 flex items-center justify-center shrink-0">
                    <p.icon className="w-7 h-7 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
                    <p className="text-4xl font-bold text-red-400 mb-1">{p.stat}</p>
                    <p className="text-base text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Additional stats */}
            <div className="flex gap-4">
              {additionalStats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="glass rounded-xl px-5 py-3 flex items-center gap-3 flex-1"
                >
                  <s.icon className="w-5 h-5 text-red-400" />
                  <span className="text-2xl font-bold text-red-400">{s.stat}</span>
                  <span className="text-base text-muted-foreground">{s.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education gap chart */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="glass-card rounded-2xl p-6 w-[420px]"
          >
            <h3 className="text-xl font-semibold mb-4">India Education Gap (out of 5)</h3>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={eduData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsla(222, 30%, 25%, 0.3)" />
                <XAxis type="number" domain={[0, 5]} stroke="hsl(215, 20%, 55%)" fontSize={14} />
                <YAxis type="category" dataKey="name" stroke="hsl(215, 20%, 55%)" fontSize={14} width={80} />
                <Tooltip contentStyle={{ background: "hsl(222, 47%, 9%)", border: "1px solid hsl(222, 30%, 25%)", borderRadius: 12, color: "hsl(210, 40%, 96%)" }} />
                <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                  {eduData.map((_, i) => (
                    <Cell key={i} fill={`hsla(0, ${60 + i * 8}%, ${55 + i * 5}%, 0.8)`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide3Problem;
