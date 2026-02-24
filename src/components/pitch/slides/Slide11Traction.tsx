import { motion } from "framer-motion";
import SlideLayout from "../SlideLayout";
import AnimatedCounter from "../AnimatedCounter";
import { TrendingUp, Users, Video, ClipboardCheck, Globe, Zap, CheckCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";

const surveyData = [
  { city: "Tier 1", response: 92, fill: "hsl(217, 91%, 60%)" },
  { city: "Tier 2", response: 88, fill: "hsl(262, 83%, 58%)" },
  { city: "Tier 3", response: 85, fill: "hsl(190, 95%, 39%)" },
];

const milestones = [
  { icon: Globe, label: "Live Website", desc: "techgramedu.in attracting organic interest", done: true },
  { icon: Users, label: "5,000+ Waitlist Signups", desc: "Students actively requesting early access", done: true },
  { icon: Video, label: "10+ Zoom Interviews", desc: "Deep problem-validation with real students", done: true },
  { icon: ClipboardCheck, label: "20+ City Surveys", desc: "Tier 1, 2, 3 cities — overwhelmingly positive", done: true },
  { icon: CheckCircle, label: "90%+ Interest Rate", desc: "Students validated & excited about Techgram", done: true },
];

const Slide11Traction = () => {
  return (
    <SlideLayout>
      <div className="flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-xl font-medium tracking-widest uppercase mb-2">Traction & Momentum</p>
          <h2 className="text-6xl font-bold mb-2">
            <span className="gradient-text">Real Validation</span>, Real Demand
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            We haven't just built a concept — we've proven demand across India's student ecosystem.
          </p>
        </motion.div>

        <div className="flex-1 flex gap-10 mt-8">
          {/* Left: Key metrics */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Big stat cards */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: 5000, suffix: "+", label: "Waitlist Signups", icon: Users, color: "from-blue-500/20 to-cyan-500/20" },
                { value: 90, suffix: "%+", label: "Student Interest", icon: TrendingUp, color: "from-green-500/20 to-emerald-500/20" },
                { value: 20, suffix: "+", label: "City Surveys", icon: ClipboardCheck, color: "from-purple-500/20 to-pink-500/20" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                  className={`glass-card rounded-2xl p-6 text-center bg-gradient-to-br ${stat.color} hover:glow-border transition-all`}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-5xl font-black gradient-text mb-1">
                    <AnimatedCounter target={stat.value} duration={2000} />{stat.suffix}
                  </div>
                  <p className="text-lg font-medium text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Milestone timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 flex-1"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" /> Validation Milestones
              </h3>
              <div className="space-y-3">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    className="flex items-center gap-4 glass rounded-xl px-5 py-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <m.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-lg text-foreground">{m.label}</span>
                      <span className="text-base text-muted-foreground ml-3">{m.desc}</span>
                    </div>
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Survey chart + quote */}
          <div className="w-[480px] flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 flex-1"
            >
              <h3 className="text-xl font-bold mb-2">Survey Response Rate by City Tier</h3>
              <p className="text-sm text-muted-foreground mb-4">% of students interested in Techgram</p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={surveyData} barSize={50}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="city" tick={{ fill: "hsl(210,40%,70%)", fontSize: 16 }} />
                  <YAxis domain={[0, 100]} tick={{ fill: "hsl(210,40%,70%)", fontSize: 14 }} unit="%" />
                  <Bar dataKey="response" radius={[8, 8, 0, 0]}>
                    {surveyData.map((entry, index) => (
                      <Cell key={index} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 glow-border"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Video className="w-5 h-5 text-primary" /> Student Discovery Calls
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                Conducted <span className="text-primary font-bold">10+ in-depth Zoom sessions</span> with students across India.
                We listened to their pain points, pitched Techgram's solution, and received overwhelming validation.
              </p>
              <div className="glass rounded-xl p-4 border-l-4 border-primary">
                <p className="text-base italic text-muted-foreground">
                  "This is exactly what I've been looking for — one app for everything instead of juggling 10 different platforms."
                </p>
                <p className="text-sm text-primary mt-2 font-medium">— Student from Delhi, Tier 1</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide11Traction;
