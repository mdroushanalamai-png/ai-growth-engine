import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import { BookX, UserX, Smartphone, GraduationCap } from "lucide-react";

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

const Slide3Problem = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-red-400 text-lg font-medium tracking-widest uppercase mb-2">The Problem</p>
          <h2 className="text-5xl font-bold mb-2">
            India's <span className="text-red-400">Education Crisis</span>
          </h2>
          <p className="text-xl text-muted-foreground">A $200B+ market plagued by systemic failures</p>
        </motion.div>

        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-2 gap-8 w-full">
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className="glass-card rounded-2xl p-8 flex gap-6 items-start hover:glow-border transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-red-500/15 flex items-center justify-center shrink-0">
                  <p.icon className="w-7 h-7 text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{p.title}</h3>
                  <p className="text-3xl font-bold text-red-400 mb-2">{p.stat}</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide3Problem;
