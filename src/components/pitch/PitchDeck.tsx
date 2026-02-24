import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid } from "lucide-react";

import Slide1Hero from "./slides/Slide1Hero";
import Slide2Overview from "./slides/Slide2Overview";
import Slide3Problem from "./slides/Slide3Problem";
import Slide4Solution from "./slides/Slide4Solution";
import Slide5Metaverse from "./slides/Slide5Metaverse";
import Slide6Market from "./slides/Slide6Market";
import Slide7Opportunity from "./slides/Slide7Opportunity";
import Slide8GTM from "./slides/Slide8GTM";
import Slide9Economics from "./slides/Slide9Economics";
import Slide10Competition from "./slides/Slide10Competition";
import Slide11Traction from "./slides/Slide11Traction";
import Slide12Team from "./slides/Slide12Team";
import Slide13Investment from "./slides/Slide12Investment";
import Slide14Roadmap from "./slides/Slide13Roadmap";
import Slide15CTA from "./slides/Slide14CTA";

const slides = [
  { component: Slide1Hero, title: "Hero" },
  { component: Slide2Overview, title: "Overview" },
  { component: Slide3Problem, title: "Problem" },
  { component: Slide4Solution, title: "Solution" },
  { component: Slide5Metaverse, title: "Metaverse" },
  { component: Slide6Market, title: "Market" },
  { component: Slide7Opportunity, title: "Opportunity" },
  { component: Slide8GTM, title: "GTM" },
  { component: Slide9Economics, title: "Economics" },
  { component: Slide10Competition, title: "Competition" },
  { component: Slide11Traction, title: "Traction" },
  { component: Slide12Team, title: "Team" },
  { component: Slide13Investment, title: "Investment" },
  { component: Slide14Roadmap, title: "Roadmap" },
  { component: Slide15CTA, title: "Contact" },
];

const PitchDeck = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const go = useCallback(
    (index: number) => {
      if (index < 0 || index >= slides.length || index === current) return;
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => go(current + 1), [go, current]);
  const prev = useCallback(() => go(current - 1), [go, current]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      else if (e.key === "Escape") {
        if (isFullscreen) document.exitFullscreen?.();
        if (showGrid) setShowGrid(false);
      }
      else if (e.key === "f" || e.key === "F5") { e.preventDefault(); toggleFullscreen(); }
      else if (e.key === "g") setShowGrid((v) => !v);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, isFullscreen, showGrid]);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  // Auto-hide controls
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const show = () => {
      setShowControls(true);
      clearTimeout(timer);
      timer = setTimeout(() => setShowControls(false), 3000);
    };
    window.addEventListener("mousemove", show);
    show();
    return () => {
      window.removeEventListener("mousemove", show);
      clearTimeout(timer);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const SlideComponent = slides[current].component;

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  if (showGrid) {
    return (
      <div className="fixed inset-0 bg-background z-50 overflow-auto p-8">
        <ParticleBackground />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold gradient-text">Techgram Pitch Deck</h2>
            <button
              onClick={() => setShowGrid(false)}
              className="px-4 py-2 rounded-lg glass-card text-foreground hover:bg-muted/30 transition"
            >
              Close Grid
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setShowGrid(false); }}
                className={`group relative aspect-video rounded-lg overflow-hidden glass-card hover:glow-border transition-all ${i === current ? "ring-2 ring-primary glow-border" : ""}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition">
                    {i + 1}. {slide.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background overflow-hidden">
      <ParticleBackground />

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <Progress
          value={((current + 1) / slides.length) * 100}
          className="h-1 rounded-none bg-muted/30"
        />
      </div>

      {/* Slide area - 16:9 letterboxed */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="relative w-full h-full" style={{ maxWidth: 'calc(100vh * 16 / 9)', maxHeight: 'calc(100vw * 9 / 16)' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0"
            >
              <SlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3"
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={prev}
          disabled={current === 0}
          className="p-2 rounded-full glass-card text-foreground disabled:opacity-30 hover:bg-muted/30 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <span className="text-sm text-muted-foreground font-medium px-3 py-1 rounded-full glass">
          {current + 1} / {slides.length}
        </span>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="p-2 rounded-full glass-card text-foreground disabled:opacity-30 hover:bg-muted/30 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <button onClick={() => setShowGrid(true)} className="p-2 rounded-full glass-card text-foreground hover:bg-muted/30 transition">
          <Grid className="w-5 h-5" />
        </button>

        <button onClick={toggleFullscreen} className="p-2 rounded-full glass-card text-foreground hover:bg-muted/30 transition">
          {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
        </button>
      </motion.div>
    </div>
  );
};

export default PitchDeck;
