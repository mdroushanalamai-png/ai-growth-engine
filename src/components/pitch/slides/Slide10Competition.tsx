import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import { Check, X, Shield } from "lucide-react";

const features = [
  "AI Personalization",
  "Social Community",
  "Career Services",
  "Student Lifestyle",
  "Unified Platform",
  "Affordable Pricing",
  "Vernacular Support",
  "Data Network Effects",
];

const competitors = [
  { name: "Techgram", checks: [1,1,1,1,1,1,1,1] },
  { name: "Coaching", checks: [0,0,0,0,0,0,1,0] },
  { name: "BYJU'S", checks: [1,0,0,0,0,0,0,0] },
  { name: "YouTube", checks: [0,0,0,0,0,1,1,0] },
];

const moats = [
  "AI Personalization Engine — learns from millions of interactions",
  "Network Effects — more students = better recommendations",
  "Unified Data — cross-realm insights no competitor can replicate",
  "Student Graph — social + academic data compound over time",
];

const Slide10Competition = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-lg font-medium tracking-widest uppercase mb-2">Competitive Analysis</p>
          <h2 className="text-5xl font-bold mb-2">
            Why <span className="gradient-text">Techgram Wins</span>
          </h2>
        </motion.div>

        <div className="flex-1 flex gap-12 items-center">
          {/* Comparison matrix */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card rounded-2xl p-6 flex-1 overflow-hidden"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 text-lg text-muted-foreground">Feature</th>
                  {competitors.map((c) => (
                    <th key={c.name} className={`p-3 text-lg text-center ${c.name === "Techgram" ? "text-primary font-bold" : "text-muted-foreground"}`}>
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((f, fi) => (
                  <motion.tr
                    key={f}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + fi * 0.08 }}
                    className="border-b border-border/50"
                  >
                    <td className="p-3 text-base">{f}</td>
                    {competitors.map((c) => (
                      <td key={c.name} className="p-3 text-center">
                        {c.checks[fi] ? (
                          <Check className={`w-6 h-6 mx-auto ${c.name === "Techgram" ? "text-emerald-400" : "text-muted-foreground"}`} />
                        ) : (
                          <X className="w-6 h-6 mx-auto text-red-400/50" />
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Moats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="w-[450px] space-y-4"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" /> Defensible Moats
            </h3>
            {moats.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.12 }}
                className="glass-card rounded-xl p-4 glow-border"
              >
                <p className="text-base text-muted-foreground">{m}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide10Competition;
