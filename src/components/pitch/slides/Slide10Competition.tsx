import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import { Check, X, Shield, Zap } from "lucide-react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import competitionBg from "@/assets/competition-bg.jpg";

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

const radarData = [
  { subject: "AI", Techgram: 95, BYJUS: 50, YouTube: 20 },
  { subject: "Social", Techgram: 90, BYJUS: 15, YouTube: 40 },
  { subject: "Career", Techgram: 85, BYJUS: 20, YouTube: 10 },
  { subject: "Lifestyle", Techgram: 80, BYJUS: 5, YouTube: 5 },
  { subject: "Price", Techgram: 90, BYJUS: 30, YouTube: 95 },
  { subject: "Scale", Techgram: 70, BYJUS: 60, YouTube: 90 },
];

const Slide10Competition = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full relative">
        <img src={competitionBg} alt="" className="absolute top-0 right-0 w-[300px] h-[300px] object-cover opacity-15 rounded-3xl pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-end gap-6"
        >
          <div>
            <p className="text-primary text-xl font-medium tracking-widest uppercase mb-2">Competitive Analysis</p>
            <h2 className="text-6xl font-bold mb-2">
              Why <span className="gradient-text">Techgram Wins</span>
            </h2>
          </div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="glass-card glow-border rounded-2xl px-6 py-3 mb-2"
          >
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-4xl font-bold gradient-text">10x</span>
              <span className="text-lg text-muted-foreground">Better</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex-1 flex gap-8 items-center">
          {/* Comparison matrix */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card rounded-2xl p-5 flex-1 overflow-hidden"
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
                    transition={{ delay: 0.5 + fi * 0.06 }}
                    className="border-b border-border/50"
                  >
                    <td className="p-3 text-base font-medium">{f}</td>
                    {competitors.map((c) => (
                      <td key={c.name} className="p-3 text-center">
                        {c.checks[fi] ? (
                          <Check className={`w-7 h-7 mx-auto ${c.name === "Techgram" ? "text-emerald-400" : "text-muted-foreground"}`} />
                        ) : (
                          <X className="w-7 h-7 mx-auto text-red-400/50" />
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Right column */}
          <div className="w-[480px] space-y-6">
            {/* Radar chart */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="glass-card rounded-2xl p-5"
            >
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsla(222, 30%, 25%, 0.4)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 13 }} />
                  <Radar name="Techgram" dataKey="Techgram" stroke="hsl(230, 80%, 65%)" fill="hsla(230, 80%, 65%, 0.25)" strokeWidth={2} />
                  <Radar name="BYJU'S" dataKey="BYJUS" stroke="hsl(0, 70%, 55%)" fill="hsla(0, 70%, 55%, 0.1)" strokeWidth={1} />
                  <Radar name="YouTube" dataKey="YouTube" stroke="hsl(45, 90%, 55%)" fill="hsla(45, 90%, 55%, 0.1)" strokeWidth={1} />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Moats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" /> Defensible Moats
              </h3>
              <div className="space-y-2">
                {moats.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 + i * 0.1 }}
                    className="glass-card rounded-xl p-3 glow-border"
                  >
                    <p className="text-sm text-muted-foreground">{m}</p>
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

export default Slide10Competition;
