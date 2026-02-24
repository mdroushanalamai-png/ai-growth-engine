import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import { Plus, Star, Search } from "lucide-react";
import aribaPhoto from "@/assets/ariba.jpg";
import roushanPhoto from "@/assets/roushan.jpg";
import teamBg from "@/assets/team-bg.jpg";

const founders = [
  {
    name: "Ariba Irfan",
    role: "CEO & Co-Founder",
    photo: aribaPhoto,
    skills: ["Vision & Strategy", "Business Development", "EdTech Domain", "Fundraising"],
    desc: "Driving Techgram's mission to transform education through AI. Deep domain expertise in India's education ecosystem and student needs.",
  },
  {
    name: "Md. Roushan",
    role: "CSO, CTO & Co-Founder",
    photo: roushanPhoto,
    skills: ["Strategy", "Operations", "Tech Architecture", "Growth", "Partnerships"],
    desc: "Leading strategy, technology, and go-to-market. Expert in building scalable platforms and distribution channels across Tier 1-3 cities.",
  },
];

const keyHires = [
  { title: "Head of AI/ML", desc: "Personalization Engine", priority: true },
  { title: "Product Designer", desc: "UX & Student Experience", priority: false },
  { title: "Growth Lead", desc: "Student Acquisition", priority: false },
  { title: "Full-Stack Engineers (3)", desc: "Platform Development", priority: false },
];

const Slide12Team = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full relative">
        <img src={teamBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-xl font-medium tracking-widest uppercase mb-2">The Team</p>
          <h2 className="text-6xl font-bold mb-2">
            <span className="gradient-text">Passionate Founders</span>, Big Vision
          </h2>
        </motion.div>

        <div className="flex-1 flex flex-col justify-center gap-10">
          {/* Founder cards */}
          <div className="grid grid-cols-2 gap-10">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                className="glass-card rounded-2xl p-10 text-center hover:glow-border transition-all duration-300"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-primary/30">
                  <img src={f.photo} alt={f.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-3xl font-bold mb-1">{f.name}</h3>
                <p className="text-primary text-xl font-medium mb-4">{f.role}</p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{f.desc}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {f.skills.map((s) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="px-4 py-1.5 rounded-full text-base glass text-muted-foreground font-medium"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Hires & Advisors */}
          <div className="flex gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 w-[320px]"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" /> Advisory Board
              </h3>
              <p className="text-base text-muted-foreground mb-3">Building an advisory network of:</p>
              <ul className="space-y-2 text-base text-muted-foreground">
                <li>• EdTech industry veterans</li>
                <li>• AI/ML research leaders</li>
                <li>• Institutional education heads</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex-1"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-primary" /> Post-Funding Key Hires
              </h3>
              <div className="flex flex-wrap gap-3">
                {keyHires.map((h, i) => (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.08 }}
                    className={`glass rounded-xl px-5 py-3 flex items-center gap-3 ${h.priority ? 'glow-border' : ''}`}
                  >
                    <Plus className="w-4 h-4 text-primary" />
                    <div>
                      <span className="font-semibold text-foreground">{h.title}</span>
                      <span className="text-sm text-muted-foreground ml-2">{h.desc}</span>
                    </div>
                    {h.priority && <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-medium">Priority</span>}
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

export default Slide12Team;
