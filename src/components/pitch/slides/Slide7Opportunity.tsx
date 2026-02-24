import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import AnimatedCounter from "../AnimatedCounter";

const circles = [
  { label: "TAM", value: "$68B", desc: "Global Student Services", size: 500, color: "hsla(230, 80%, 65%, 0.15)", borderColor: "hsla(230, 80%, 65%, 0.4)" },
  { label: "SAM", value: "50-70M", desc: "India Addressable Students", size: 350, color: "hsla(270, 60%, 55%, 0.2)", borderColor: "hsla(270, 60%, 55%, 0.5)" },
  { label: "SOM", value: "20M", desc: "Year 5 Target", size: 200, color: "hsla(190, 90%, 55%, 0.25)", borderColor: "hsla(190, 90%, 55%, 0.6)" },
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
          <p className="text-primary text-lg font-medium tracking-widest uppercase mb-2">Market Opportunity</p>
          <h2 className="text-5xl font-bold mb-2">
            <span className="gradient-text">TAM / SAM / SOM</span> Analysis
          </h2>
        </motion.div>

        <div className="flex-1 flex items-center justify-center gap-16">
          {/* Concentric circles */}
          <div className="relative flex items-center justify-center" style={{ width: 550, height: 550 }}>
            {circles.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.3, duration: 0.8, type: "spring" }}
                className="absolute rounded-full flex flex-col items-center justify-center"
                style={{
                  width: c.size,
                  height: c.size,
                  background: c.color,
                  border: `2px solid ${c.borderColor}`,
                }}
              >
                {i === circles.length - 1 && (
                  <div className="text-center">
                    <p className="text-2xl font-bold text-foreground">{c.label}</p>
                    <p className="text-lg text-primary">{c.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
            {/* Labels positioned outside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-2 text-center"
            >
              <span className="text-lg font-semibold text-foreground">TAM — $68B</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="absolute top-[75px] text-center"
            >
              <span className="text-lg font-semibold text-foreground">SAM — 50-70M</span>
            </motion.div>
          </div>

          {/* Revenue projections */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="space-y-6 max-w-[500px]"
          >
            <h3 className="text-3xl font-bold mb-6">Revenue Projections</h3>
            {[
              { year: "Year 1", rev: "₹7.2 Cr", users: "50K" },
              { year: "Year 2", rev: "₹54 Cr", users: "200K" },
              { year: "Year 3", rev: "₹270 Cr", users: "500K" },
              { year: "Year 4", rev: "₹918 Cr", users: "800K" },
              { year: "Year 5", rev: "₹2,946 Cr", users: "1.2M" },
            ].map((r, i) => (
              <motion.div
                key={r.year}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="flex items-center justify-between glass-card rounded-xl p-4"
              >
                <span className="text-lg font-medium">{r.year}</span>
                <span className="text-xl font-bold gradient-text">{r.rev}</span>
                <span className="text-muted-foreground">{r.users} paid</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide7Opportunity;
