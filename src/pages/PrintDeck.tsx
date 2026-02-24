import Slide1Hero from "@/components/pitch/slides/Slide1Hero";
import Slide2Overview from "@/components/pitch/slides/Slide2Overview";
import Slide3Problem from "@/components/pitch/slides/Slide3Problem";
import Slide4Solution from "@/components/pitch/slides/Slide4Solution";
import Slide5Metaverse from "@/components/pitch/slides/Slide5Metaverse";
import Slide6Market from "@/components/pitch/slides/Slide6Market";
import Slide7Opportunity from "@/components/pitch/slides/Slide7Opportunity";
import Slide8GTM from "@/components/pitch/slides/Slide8GTM";
import Slide9Economics from "@/components/pitch/slides/Slide9Economics";
import Slide10Competition from "@/components/pitch/slides/Slide10Competition";
import Slide11Traction from "@/components/pitch/slides/Slide11Traction";
import Slide12Team from "@/components/pitch/slides/Slide12Team";
import Slide13Investment from "@/components/pitch/slides/Slide12Investment";
import Slide14Roadmap from "@/components/pitch/slides/Slide13Roadmap";
import Slide15CTA from "@/components/pitch/slides/Slide14CTA";
import { Download, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const slides = [
  Slide1Hero, Slide2Overview, Slide3Problem, Slide4Solution, Slide5Metaverse,
  Slide6Market, Slide7Opportunity, Slide8GTM, Slide9Economics, Slide10Competition,
  Slide11Traction, Slide12Team, Slide13Investment, Slide14Roadmap, Slide15CTA,
];

const PrintDeck = () => {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Toolbar - hidden in print */}
      <div className="fixed top-0 left-0 right-0 z-50 print-hide bg-background/90 backdrop-blur-sm border-b border-border/30 px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Deck
        </button>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Tip: Choose "Save as PDF" in the print dialog
          </span>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
          >
            <Download className="w-4 h-4" />
            Save as PDF
          </button>
        </div>
      </div>

      {/* Slides */}
      <div className="print-container pt-16">
        {slides.map((SlideComponent, i) => (
          <div key={i} className="print-slide">
            <div className="print-slide-inner">
              <SlideComponent />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PrintDeck;
