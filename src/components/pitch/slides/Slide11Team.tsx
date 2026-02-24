import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import { User, Plus } from "lucide-react";

const founders = [
  {
    name: "Ariba Irfan",
    role: "CEO & Co-Founder",
    skills: ["Vision & Strategy", "Business Development", "EdTech Domain"],
    desc: "Driving Techgram's mission to transform education through AI",
  },
  {
    name: "Md. Roushan",
    role: "CSO & Co-Founder",
    skills: ["Strategy", "Operations", "Growth"],
    desc: "Scaling go-to-market strategy and institutional partnerships",
  },
  {
    name: "Nikhil Nigam",
    role: "CTO & Co-Founder",
    skills: ["AI/ML", "Full-Stack", "System Architecture"],
    desc: "Building the AI engine powering personalized education",
  },
];

const hires = [
  "Head of AI/ML",
  "Product Designer",
  "Growth Lead",
  "Full-Stack Engineers (3)",
];

const Slide11Team = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-lg font-medium tracking-widest uppercase mb-2">The Team</p>
          <h2 className="text-5xl font-bold mb-2">
            <span className="gradient-text">Passionate Founders</span>, Big Vision
          </h2>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center gap-12">
          {/* Founder cards */}
          <div className="grid grid-cols-3 gap-8">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className="glass-card rounded-2xl p-8 text-center hover:glow-border transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mx-auto mb-5">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-1">{f.name}</h3>
                <p className="text-primary text-lg mb-3">{f.role}</p>
                <p className="text-muted-foreground mb-5">{f.desc}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {f.skills.map((s) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="px-3 py-1 rounded-full text-sm glass text-muted-foreground"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Post-funding hires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-muted-foreground">Post-Funding Key Hires</h3>
            <div className="flex gap-4">
              {hires.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="glass rounded-xl px-5 py-3 flex items-center gap-2 text-muted-foreground"
                >
                  <Plus className="w-4 h-4 text-primary" />
                  <span>{h}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide11Team;
