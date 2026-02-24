import { useState, useRef, useEffect, useCallback } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Loader2, Check } from "lucide-react";
import SlideLayout from "./SlideLayout";

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

const slideComponents = [
  { Component: Slide1Hero, title: "Hero" },
  { Component: Slide2Overview, title: "Overview" },
  { Component: Slide3Problem, title: "Problem" },
  { Component: Slide4Solution, title: "Solution" },
  { Component: Slide5Metaverse, title: "Metaverse" },
  { Component: Slide6Market, title: "Market" },
  { Component: Slide7Opportunity, title: "Opportunity" },
  { Component: Slide8GTM, title: "GTM" },
  { Component: Slide9Economics, title: "Economics" },
  { Component: Slide10Competition, title: "Competition" },
  { Component: Slide11Traction, title: "Traction" },
  { Component: Slide12Team, title: "Team" },
  { Component: Slide13Investment, title: "Investment" },
  { Component: Slide14Roadmap, title: "Roadmap" },
  { Component: Slide15CTA, title: "Contact" },
];

interface PdfExporterProps {
  onClose: () => void;
}

const PdfExporter = ({ onClose }: PdfExporterProps) => {
  const [status, setStatus] = useState<"rendering" | "capturing" | "done" | "error">("rendering");
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const [slidesReady, setSlidesReady] = useState(false);

  // Wait for slides to render with animations
  useEffect(() => {
    const timer = setTimeout(() => setSlidesReady(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const generatePdf = useCallback(async () => {
    if (!containerRef.current) return;
    setStatus("capturing");

    try {
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1920, 1080],
      });

      const slideElements = containerRef.current.querySelectorAll("[data-slide]");

      for (let i = 0; i < slideElements.length; i++) {
        const el = slideElements[i] as HTMLElement;
        setCurrentSlide(slideComponents[i].title);
        setProgress(((i + 1) / slideElements.length) * 100);

        const canvas = await html2canvas(el, {
          width: 1920,
          height: 1080,
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#0a0e1a",
          logging: false,
        });

        const imgData = canvas.toDataURL("image/jpeg", 0.95);

        if (i > 0) pdf.addPage([1920, 1080], "landscape");
        pdf.addImage(imgData, "JPEG", 0, 0, 1920, 1080);
      }

      pdf.save("Techgram-Pitch-Deck.pdf");
      setStatus("done");
    } catch (err) {
      console.error("PDF generation error:", err);
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    if (slidesReady) {
      generatePdf();
    }
  }, [slidesReady, generatePdf]);

  return (
    <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex flex-col">
      {/* Header with status */}
      <div className="flex items-center justify-between p-6 border-b border-border/30">
        <div className="flex items-center gap-4">
          <Download className="w-6 h-6 text-primary" />
          <div>
            <h2 className="text-xl font-bold text-foreground">Exporting PDF</h2>
            <p className="text-sm text-muted-foreground">
              {status === "rendering" && "Rendering all slides (waiting 5s for animations)..."}
              {status === "capturing" && `Capturing: ${currentSlide} (${Math.round(progress)}%)`}
              {status === "done" && "PDF downloaded successfully!"}
              {status === "error" && "An error occurred. Please try again."}
            </p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 rounded-full glass-card hover:bg-muted/30 transition">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-muted/30">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          animate={{ width: status === "rendering" ? "30%" : `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Status icon */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {(status === "rendering" || status === "capturing") && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col items-center gap-4"
            >
              <Loader2 className="w-16 h-16 text-primary animate-spin" />
              <p className="text-lg text-muted-foreground">
                {status === "rendering"
                  ? "Preparing slides..."
                  : `Capturing slide ${Math.ceil((progress / 100) * 15)} of 15`}
              </p>
            </motion.div>
          )}
          {status === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                <Check className="w-10 h-10 text-accent" />
              </div>
              <p className="text-lg text-foreground font-medium">PDF saved as Techgram-Pitch-Deck.pdf</p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 rounded-lg glass-card hover:bg-muted/30 transition text-foreground"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Offscreen render area — renders all slides at 1920x1080 */}
      <div
        ref={containerRef}
        className="absolute"
        style={{
          left: "-9999px",
          top: 0,
          width: 1920,
          height: 1080 * slideComponents.length,
          overflow: "hidden",
        }}
      >
        {slideComponents.map(({ Component }, i) => (
          <div
            key={i}
            data-slide={i}
            style={{ width: 1920, height: 1080, position: "relative", background: "#0a0e1a" }}
          >
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfExporter;
