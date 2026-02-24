import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import AnimatedCounter from "../AnimatedCounter";
import { Users, CreditCard, TrendingUp, Target } from "lucide-react";

const stats = [
  { icon: Users, label: "Target Students", value: 250, suffix: "M+", color: "from-blue-500 to-cyan-400" },
  { icon: CreditCard, label: "Paid Users (Y5)", value: 1.2, suffix: "M", decimals: 1, color: "from-purple-500 to-pink-400" },
  { icon: TrendingUp, label: "Revenue (Y5)", prefix: "₹", value: 2946, suffix: " Cr", color: "from-emerald-400 to-teal-400" },
  { icon: Target, label: "Gross Margin", value: 84, suffix: "%", color: "from-amber-400 to-orange-400" },
];

const Slide2Overview = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-lg font-medium tracking-widest uppercase mb-2">Overview</p>
          <h2 className="text-5xl font-bold mb-2">
            World's First Complete{" "}
            <span className="gradient-text">Student Operating System</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-[1000px]">
            One unified AI platform replacing fragmented education, social, lifestyle & career tools
          </p>
        </motion.div>

        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-4 gap-8 w-full">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className="glass-card rounded-2xl p-8 text-center glow-border"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold mb-3 glow-text">
                  <AnimatedCounter
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={2000}
                  />
                </div>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide2Overview;
