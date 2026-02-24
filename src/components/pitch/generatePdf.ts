import jsPDF from "jspdf";

// Colors as mutable tuples
const BG: [number, number, number] = [10, 14, 26];
const FG: [number, number, number] = [220, 228, 240];
const MUTED: [number, number, number] = [120, 135, 165];
const PRIMARY: [number, number, number] = [100, 130, 230];
const ACCENT: [number, number, number] = [160, 100, 210];
const CYAN: [number, number, number] = [60, 200, 220];
const RED: [number, number, number] = [240, 90, 90];
const GREEN: [number, number, number] = [80, 200, 140];
const AMBER: [number, number, number] = [240, 190, 60];

type RGB = [number, number, number];

const W = 1920;
const H = 1080;

function bg(pdf: jsPDF) {
  pdf.setFillColor(...BG);
  pdf.rect(0, 0, W, H, "F");
}

function glassBox(pdf: jsPDF, x: number, y: number, w: number, h: number, r = 16) {
  pdf.setFillColor(18, 24, 42);
  pdf.roundedRect(x, y, w, h, r, r, "F");
  pdf.setDrawColor(40, 55, 85);
  pdf.setLineWidth(1.5);
  pdf.roundedRect(x, y, w, h, r, r, "S");
}

function title(pdf: jsPDF, text: string, x: number, y: number, size = 72) {
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(size);
  pdf.setTextColor(...FG);
  pdf.text(text, x, y);
}

function sub(pdf: jsPDF, text: string, x: number, y: number, size = 28, color: RGB = MUTED) {
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(size);
  pdf.setTextColor(...color);
  pdf.text(text, x, y, { maxWidth: 1400 });
}

function lbl(pdf: jsPDF, text: string, x: number, y: number, size = 22, color: RGB = PRIMARY) {
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(size);
  pdf.setTextColor(...color);
  pdf.text(text, x, y);
}

function gradBar(pdf: jsPDF, x: number, y: number, w: number, h: number) {
  const steps = 20;
  const stepW = w / steps;
  for (let i = 0; i < steps; i++) {
    const t = i / steps;
    pdf.setFillColor(
      Math.round(PRIMARY[0] * (1 - t) + ACCENT[0] * t),
      Math.round(PRIMARY[1] * (1 - t) + ACCENT[1] * t),
      Math.round(PRIMARY[2] * (1 - t) + ACCENT[2] * t)
    );
    pdf.rect(x + i * stepW, y, stepW + 1, h, "F");
  }
}

function pgNum(pdf: jsPDF, n: number) {
  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(16);
  pdf.setTextColor(...MUTED);
  pdf.text(`${n} / 15`, W - 80, H - 30);
  pdf.setFontSize(14);
  pdf.setTextColor(60, 70, 100);
  pdf.text("Techgram", 80, H - 30);
}

// ── Slides ──

function s1(pdf: jsPDF) {
  bg(pdf);
  pdf.setFillColor(30, 40, 80);
  pdf.circle(960, 350, 250, "F");
  pdf.setFillColor(25, 35, 65);
  pdf.circle(960, 350, 180, "F");

  lbl(pdf, "TECHGRAM", 770, 300, 36, MUTED);
  title(pdf, "Revolutionizing", 460, 430, 96);
  title(pdf, "Global Education with AI", 320, 540, 80);
  sub(pdf, "Building the world's first AI-native Student Operating System —", 310, 640, 30);
  sub(pdf, "personalizing learning, skills, and careers for 250M+ students", 340, 680, 30);
  glassBox(pdf, 600, 750, 720, 60);
  lbl(pdf, "PRE-SEED  ·  2025  ·  AI × EDUCATION × INDIA", 660, 790, 22, MUTED);

  ["250M+ Students", "$30B+ Market", "AI-Powered", "4 Realms"].forEach((b, i) => {
    const bx = 200 + i * 400;
    glassBox(pdf, bx, 870, 240, 45, 22);
    lbl(pdf, b, bx + 30, 900, 18, MUTED);
  });
  pgNum(pdf, 1);
}

function s2(pdf: jsPDF) {
  bg(pdf);
  lbl(pdf, "OVERVIEW", 80, 80, 22);
  title(pdf, "World's First Complete", 80, 150, 64);
  title(pdf, "Student Operating System", 80, 230, 64);
  sub(pdf, "One unified AI platform replacing fragmented education, social, lifestyle & career tools", 80, 290, 26);

  [
    { l: "Target Students", v: "250M+" },
    { l: "Paid Users (Y5)", v: "1.2M" },
    { l: "Revenue (Y5)", v: "₹2946 Cr" },
    { l: "Gross Margin", v: "84%" },
  ].forEach((s, i) => {
    const x = 80 + i * 440;
    glassBox(pdf, x, 370, 400, 250);
    title(pdf, s.v, x + 60, 520, 54);
    sub(pdf, s.l, x + 100, 575, 24);
  });

  glassBox(pdf, 80, 680, 1760, 280);
  lbl(pdf, "Projected Paid User Growth (K)", 120, 720, 22);
  [50, 200, 500, 800, 1200].forEach((d, i) => {
    const x = 200 + i * 300;
    const barH = (d / 1200) * 170;
    pdf.setFillColor(...PRIMARY);
    pdf.roundedRect(x, 920 - barH, 60, barH, 6, 6, "F");
    sub(pdf, ["Y1","Y2","Y3","Y4","Y5"][i], x + 10, 945, 18);
    lbl(pdf, String(d), x + 5, 910 - barH, 16, FG);
  });
  pgNum(pdf, 2);
}

function s3(pdf: jsPDF) {
  bg(pdf);
  lbl(pdf, "THE PROBLEM", 80, 80, 22, RED);
  title(pdf, "India's Education Crisis", 80, 160, 64);
  sub(pdf, "A $200B+ market plagued by systemic failures", 80, 210, 26);

  [
    { t: "Fragmented Learning", st: "10+ apps", d: "Students juggle disconnected tools" },
    { t: "Employability Crisis", st: "48%", d: "Graduates are unemployable" },
    { t: "Distraction Economy", st: "4+ hrs/day", d: "Lost to social media" },
    { t: "Broken Tuition", st: "₹37L Cr", d: "One-size-fits-all batch teaching" },
  ].forEach((p, i) => {
    const x = 80 + (i % 2) * 700;
    const y = 290 + Math.floor(i / 2) * 250;
    glassBox(pdf, x, y, 640, 210);
    lbl(pdf, p.t, x + 30, y + 50, 26, FG);
    title(pdf, p.st, x + 30, y + 110, 48);
    sub(pdf, p.d, x + 30, y + 160, 20);
  });

  glassBox(pdf, 1500, 290, 350, 480);
  lbl(pdf, "India Education Gap", 1520, 340, 20);
  [{ n: "Spending", v: 4.6 }, { n: "Outcomes", v: 1.8 }, { n: "Access", v: 2.2 }, { n: "Digital", v: 3.1 }].forEach((g, i) => {
    const y = 400 + i * 90;
    sub(pdf, g.n, 1530, y, 18);
    pdf.setFillColor(...RED);
    pdf.roundedRect(1530, y + 10, (g.v / 5) * 280, 30, 6, 6, "F");
  });

  glassBox(pdf, 80, 810, 700, 70);
  lbl(pdf, "Only 7%", 120, 855, 28, RED);
  sub(pdf, "have access to quality tutoring", 280, 855, 20);
  glassBox(pdf, 820, 810, 700, 70);
  lbl(pdf, "80%", 860, 855, 28, RED);
  sub(pdf, "dropout from online courses", 960, 855, 20);
  pgNum(pdf, 3);
}

function s4(pdf: jsPDF) {
  bg(pdf);
  lbl(pdf, "THE SOLUTION", 80, 80, 22);
  title(pdf, "One Unified Ecosystem —", 80, 160, 64);
  title(pdf, "Four Powerful Pillars", 80, 240, 64);

  pdf.setFillColor(20, 30, 55);
  pdf.circle(960, 430, 70, "F");
  pdf.setDrawColor(...PRIMARY);
  pdf.setLineWidth(2);
  pdf.circle(960, 430, 70, "S");
  lbl(pdf, "AI", 940, 440, 32, PRIMARY);

  [
    { t: "AI Super Teacher", d: "Adaptive learning engine", c: PRIMARY },
    { t: "Connect Realm", d: "Student social network", c: ACCENT },
    { t: "Career Guide", d: "AI-driven career mapping", c: GREEN },
    { t: "Lifestyle Hub", d: "Student services & tools", c: AMBER },
  ].forEach((p, i) => {
    const x = 80 + i * 440;
    glassBox(pdf, x, 560, 400, 220);
    lbl(pdf, p.t, x + 40, 610, 28, p.c);
    sub(pdf, p.d, x + 40, 660, 22);
  });

  glassBox(pdf, 300, 830, 1320, 80);
  lbl(pdf, "Why AI?", 340, 878, 26, PRIMARY);
  ["10x faster learning", "3x better retention", "24/7 personalized"].forEach((w, i) => {
    lbl(pdf, w, 540 + i * 380, 878, 22, FG);
  });
  pgNum(pdf, 4);
}



function s5(pdf: jsPDF) {
  bg(pdf);
  lbl(pdf, "EDUCATIONAL METAVERSE", 80, 80, 22);
  title(pdf, "Four Realms, One Living Universe", 80, 160, 64);

  pdf.setFillColor(20, 30, 55);
  pdf.circle(500, 580, 80, "F");
  pdf.setDrawColor(...PRIMARY);
  pdf.setLineWidth(2);
  pdf.circle(500, 580, 80, "S");
  lbl(pdf, "Techgram", 440, 570, 22, PRIMARY);
  lbl(pdf, "OS", 475, 600, 22, PRIMARY);

  pdf.setDrawColor(40, 55, 90);
  pdf.setLineWidth(1);
  pdf.circle(500, 580, 200, "S");
  pdf.circle(500, 580, 300, "S");

  [
    { t: "Learning Realm", d: "AI tutoring, adaptive tests", m: "3x retention", x: 100, _y: 280, c: PRIMARY },
    { t: "Community Realm", d: "Study groups, mentorship", m: "45min avg session", x: 750, _y: 280, c: ACCENT },
    { t: "Lifestyle Realm", d: "Marketplace, housing, wellness", m: "2.5x engagement", x: 100, _y: 740, c: CYAN },
    { t: "Career Realm", d: "Skills, certifications, jobs", m: "85% placement", x: 750, _y: 740, c: AMBER },
  ].forEach((r) => {
    glassBox(pdf, r.x, r._y, 380, 170);
    lbl(pdf, r.t, r.x + 30, r._y + 45, 26, r.c);
    sub(pdf, r.d, r.x + 30, r._y + 85, 20);
    lbl(pdf, r.m, r.x + 30, r._y + 130, 20, r.c);
  });

  glassBox(pdf, 1200, 300, 650, 400);
  lbl(pdf, "Why It Works", 1240, 360, 28, FG);
  ["Seamless cross-realm data flow", "AI connects all student activities", "Single identity across all services", "Network effects multiply value"].forEach((p, i) => {
    pdf.setFillColor(...PRIMARY);
    pdf.circle(1260, 420 + i * 60, 6, "F");
    sub(pdf, p, 1280, 428 + i * 60, 22);
  });
  pgNum(pdf, 5);
}

function s6(pdf: jsPDF) {
  bg(pdf);
  lbl(pdf, "CONVERGING MARKET", 80, 80, 22);
  title(pdf, "$30B+ Converging Mega-Market", 80, 160, 64);
  sub(pdf, "Four massive sectors merging into one addressable opportunity", 80, 210, 26);

  [
    { l: "EdTech", v: "$12B", x: 250, _y: 450, c: PRIMARY },
    { l: "Freelance/Gig", v: "$8B", x: 480, _y: 450, c: ACCENT },
    { l: "Student Living", v: "$6B", x: 250, _y: 650, c: CYAN },
    { l: "Social", v: "$5B", x: 480, _y: 650, c: AMBER },
  ].forEach((s) => {
    pdf.setFillColor(s.c[0], s.c[1], s.c[2]);
    pdf.circle(s.x, s._y, 120, "F");
    lbl(pdf, s.l, s.x - 50, s._y - 10, 22, FG);
    lbl(pdf, s.v, s.x - 30, s._y + 25, 20, [255, 255, 255]);
  });

  glassBox(pdf, 325, 515, 120, 50);
  lbl(pdf, "Techgram", 340, 548, 18, PRIMARY);

  glassBox(pdf, 780, 300, 500, 160);
  sub(pdf, "Total Converging Market", 820, 350, 20);
  title(pdf, "$30B+", 820, 420, 56);

  glassBox(pdf, 1320, 300, 500, 160);
  sub(pdf, "India Student Population", 1360, 350, 20);
  title(pdf, "250M+", 1360, 420, 56);

  glassBox(pdf, 780, 500, 1040, 280);
  lbl(pdf, "Segment CAGR %", 820, 545, 22);
  [
    { n: "EdTech", v: 35, c: PRIMARY },
    { n: "Gig Economy", v: 28, c: ACCENT },
    { n: "Student Living", v: 22, c: CYAN },
    { n: "Social", v: 18, c: AMBER },
  ].forEach((c, i) => {
    const yy = 580 + i * 45;
    sub(pdf, c.n, 830, yy + 12, 16);
    pdf.setFillColor(...c.c);
    pdf.roundedRect(1020, yy - 5, (c.v / 40) * 550, 25, 5, 5, "F");
    lbl(pdf, `${c.v}%`, 1020 + (c.v / 40) * 550 + 15, yy + 12, 16, FG);
  });

  glassBox(pdf, 780, 810, 1040, 120);
  lbl(pdf, "Why India First?", 820, 855, 22, PRIMARY);
  sub(pdf, "World's largest Gen-Z  ·  800M+ smartphones  ·  15% YoY growth  ·  Tier 2-3 opportunity", 820, 895, 18);
  pgNum(pdf, 6);
}

function s7(pdf: jsPDF) {
  bg(pdf);
  lbl(pdf, "MARKET OPPORTUNITY", 80, 80, 22);
  title(pdf, "TAM / SAM / SOM Analysis", 80, 160, 64);

  const cx = 350, cy = 560;
  pdf.setFillColor(40, 55, 100);
  pdf.circle(cx, cy, 250, "F");
  pdf.setFillColor(60, 45, 100);
  pdf.circle(cx, cy, 170, "F");
  pdf.setFillColor(30, 90, 100);
  pdf.circle(cx, cy, 90, "F");

  lbl(pdf, "TAM — $68B", cx - 60, cy - 210, 22, FG);
  lbl(pdf, "SAM — 50-70M", cx - 65, cy - 130, 22, FG);
  lbl(pdf, "SOM — 20M", cx - 45, cy + 10, 22, FG);

  glassBox(pdf, 700, 270, 1140, 300);
  lbl(pdf, "Revenue Trajectory (₹ Cr)", 740, 315, 22);
  [7, 54, 270, 918, 2946].forEach((d, i) => {
    const x = 820 + i * 200;
    const barH = (d / 3000) * 220;
    gradBar(pdf, x, 540 - barH, 80, barH);
    sub(pdf, ["Y1","Y2","Y3","Y4","Y5"][i], x + 20, 560, 18);
    lbl(pdf, `${d}`, x + 10, 530 - barH, 16, FG);
  });

  [
    { yr: "Year 1", rv: "₹7.2 Cr", u: "50K paid" },
    { yr: "Year 2", rv: "₹54 Cr", u: "200K paid" },
    { yr: "Year 3", rv: "₹270 Cr", u: "500K paid" },
    { yr: "Year 5", rv: "₹2,946 Cr", u: "1.2M paid" },
  ].forEach((p, i) => {
    const yy = 610 + i * 60;
    glassBox(pdf, 700, yy, 700, 50);
    sub(pdf, p.yr, 730, yy + 33, 20, FG);
    lbl(pdf, p.rv, 920, yy + 33, 24, PRIMARY);
    sub(pdf, p.u, 1140, yy + 33, 18);
  });

  [{ l: "CAC", v: "₹200" }, { l: "LTV", v: "₹15,600" }, { l: "LTV:CAC", v: "78:1" }, { l: "Payback", v: "< 30d" }].forEach((u, i) => {
    const x = 1460 + (i % 2) * 200;
    const yy = 610 + Math.floor(i / 2) * 120;
    glassBox(pdf, x, yy, 180, 100);
    sub(pdf, u.l, x + 30, yy + 35, 16);
    lbl(pdf, u.v, x + 20, yy + 72, 22, PRIMARY);
  });
  pgNum(pdf, 7);
}

function s8(pdf: jsPDF) {
  bg(pdf);
  lbl(pdf, "GO-TO-MARKET", 80, 80, 22);
  title(pdf, "Five Phases to Global Dominance", 80, 160, 64);

  gradBar(pdf, 80, 380, 1760, 6);
  [
    { t: "Beta Launch", p: "Q1-Q2 2025", d: "Core AI tutor MVP" },
    { t: "Student Acq.", p: "Q3-Q4 2025", d: "Campus ambassadors" },
    { t: "Institutional", p: "2026", d: "School partnerships" },
    { t: "Regional", p: "2027", d: "Pan-India expansion" },
    { t: "Global", p: "2028+", d: "SEA, Africa, LATAM" },
  ].forEach((ph, i) => {
    const x = 80 + i * 360;
    pdf.setFillColor(20, 30, 55);
    pdf.circle(x + 100, 383, 30, "F");
    pdf.setDrawColor(...PRIMARY);
    pdf.setLineWidth(2);
    pdf.circle(x + 100, 383, 30, "S");
    lbl(pdf, ph.t, x + 30, 460, 22, FG);
    lbl(pdf, ph.p, x + 30, 495, 18, PRIMARY);
    sub(pdf, ph.d, x + 30, 530, 18);
  });

  [{ l: "Survey Validation", v: "85%" }, { l: "Pre-Signups", v: "5000+" }, { l: "Retention Target", v: "70%+" }, { l: "LTV:CAC", v: "78:1" }].forEach((m, i) => {
    const x = 80 + i * 340;
    glassBox(pdf, x, 600, 300, 150);
    title(pdf, m.v, x + 40, 700, 44);
    sub(pdf, m.l, x + 60, 730, 18);
  });

  glassBox(pdf, 1460, 600, 400, 340);
  lbl(pdf, "Conversion Funnel (Y2)", 1490, 645, 20);
  [{ l: "Awareness", v: "10M+", w: 350 }, { l: "Sign-ups", v: "2M", w: 260 }, { l: "Active", v: "800K", w: 180 }, { l: "Paid", v: "200K", w: 110 }].forEach((f, i) => {
    const yy = 680 + i * 60;
    sub(pdf, f.l, 1490, yy, 16);
    sub(pdf, f.v, 1780, yy, 16, FG);
    gradBar(pdf, 1490, yy + 8, f.w, 18);
  });
  pgNum(pdf, 8);
}

function s9(pdf: jsPDF) {
  bg(pdf);
  lbl(pdf, "UNIT ECONOMICS", 80, 80, 22);
  title(pdf, "Path to ₹2,946 Cr Revenue", 80, 160, 64);

  glassBox(pdf, 80, 240, 1050, 440);
  lbl(pdf, "Revenue (₹ Cr) & Gross Margin %", 120, 290, 22);
  [{ yr: "Y1", r: 7.2, m: 45 }, { yr: "Y2", r: 54, m: 58 }, { yr: "Y3", r: 270, m: 72 }, { yr: "Y4", r: 918, m: 80 }, { yr: "Y5", r: 2946, m: 84 }].forEach((d, i) => {
    const x = 200 + i * 180;
    const barH = (d.r / 3000) * 300;
    pdf.setFillColor(PRIMARY[0] + i * 10, PRIMARY[1] + i * 5, PRIMARY[2]);
    pdf.roundedRect(x, 640 - barH, 80, barH, 6, 6, "F");
    sub(pdf, d.yr, x + 20, 660, 18);
    lbl(pdf, `${d.r}`, x + 5, 630 - barH, 14, FG);
    const my = 640 - (d.m / 100) * 300;
    pdf.setFillColor(...GREEN);
    pdf.circle(x + 40, my, 6, "F");
    lbl(pdf, `${d.m}%`, x + 55, my + 5, 12, GREEN);
  });

  glassBox(pdf, 1180, 240, 680, 440);
  lbl(pdf, "Revenue Streams", 1220, 290, 22);
  [{ n: "Premium AI Plans", p: 40, c: PRIMARY }, { n: "Certifications", p: 25, c: ACCENT }, { n: "Institutional", p: 20, c: CYAN }, { n: "Student Services", p: 15, c: AMBER }].forEach((s, i) => {
    const yy = 340 + i * 80;
    sub(pdf, s.n, 1220, yy, 20);
    pdf.setFillColor(...s.c);
    pdf.roundedRect(1220, yy + 10, (s.p / 100) * 500, 30, 6, 6, "F");
    lbl(pdf, `${s.p}%`, 1220 + (s.p / 100) * 500 + 15, yy + 32, 18, FG);
  });

  [{ l: "CAC", v: "₹200", d: "Cost per acquisition" }, { l: "LTV", v: "₹15,600", d: "Lifetime value" }, { l: "Payback", v: "<30d", d: "Payback period" }, { l: "Gross Margin", v: "84%", d: "At scale (Y5)" }].forEach((u, i) => {
    const x = 80 + i * 460;
    glassBox(pdf, x, 730, 420, 200);
    sub(pdf, u.l, x + 50, 790, 18);
    title(pdf, u.v, x + 50, 850, 42);
    sub(pdf, u.d, x + 50, 895, 16);
  });
  pgNum(pdf, 9);
}

function s10(pdf: jsPDF) {
  bg(pdf);
  lbl(pdf, "COMPETITIVE ANALYSIS", 80, 80, 22);
  title(pdf, "Why Techgram Wins", 80, 160, 64);

  glassBox(pdf, 80, 240, 1050, 640);
  const features = ["AI Personalization", "Social Community", "Career Services", "Student Lifestyle", "Unified Platform", "Affordable Pricing", "Vernacular Support", "Data Network Effects"];
  const comps = ["Techgram", "Coaching", "BYJU'S", "YouTube"];
  const checks = [[1,0,1,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,1],[1,1,0,1],[1,0,0,0]];

  comps.forEach((c, i) => {
    lbl(pdf, c, 520 + i * 150, 290, 16, i === 0 ? PRIMARY : MUTED);
  });
  pdf.setDrawColor(40, 55, 85);
  pdf.setLineWidth(1);
  pdf.line(100, 305, 1100, 305);

  features.forEach((f, fi) => {
    const yy = 340 + fi * 70;
    sub(pdf, f, 120, yy, 18, FG);
    checks[fi].forEach((c, ci) => {
      const x = 555 + ci * 150;
      if (c) lbl(pdf, "✓", x, yy, 22, ci === 0 ? GREEN : MUTED);
      else lbl(pdf, "✗", x, yy, 22, RED);
    });
  });

  glassBox(pdf, 1180, 240, 680, 640);
  lbl(pdf, "Defensible Moats", 1220, 300, 26, FG);
  ["AI Personalization Engine", "Network Effects — more students = better AI", "Unified Data — cross-realm insights", "Student Graph — social + academic data"].forEach((m, i) => {
    glassBox(pdf, 1210, 340 + i * 100, 620, 75);
    sub(pdf, m, 1240, 385 + i * 100, 18);
  });

  glassBox(pdf, 1400, 770, 200, 90);
  title(pdf, "10x", 1430, 835, 52);
  sub(pdf, "Better", 1540, 835, 18, MUTED);
  pgNum(pdf, 10);
}

function s11(pdf: jsPDF) {
  bg(pdf);
  lbl(pdf, "TRACTION & MOMENTUM", 80, 80, 22);
  title(pdf, "Real Validation, Real Demand", 80, 160, 64);
  sub(pdf, "We've proven demand across India's student ecosystem.", 80, 210, 24);

  [{ v: "5000+", l: "Waitlist Signups" }, { v: "90%+", l: "Student Interest" }, { v: "20+", l: "City Surveys" }].forEach((s, i) => {
    const x = 80 + i * 420;
    glassBox(pdf, x, 280, 380, 180);
    title(pdf, s.v, x + 60, 390, 52);
    sub(pdf, s.l, x + 90, 430, 22);
  });

  glassBox(pdf, 80, 500, 1200, 430);
  lbl(pdf, "Validation Milestones", 120, 545, 24, FG);
  ["Live Website — techgramedu.in", "5,000+ Waitlist Signups", "10+ Zoom Interviews", "20+ City Surveys", "90%+ Interest Rate"].forEach((m, i) => {
    lbl(pdf, "✓", 140, 590 + i * 65, 20, PRIMARY);
    sub(pdf, m, 170, 590 + i * 65, 18);
  });

  glassBox(pdf, 1340, 500, 520, 430);
  lbl(pdf, "Survey Response by City Tier", 1380, 550, 20);
  [{ c: "Tier 1", v: 92, col: PRIMARY }, { c: "Tier 2", v: 88, col: ACCENT }, { c: "Tier 3", v: 85, col: CYAN }].forEach((s, i) => {
    const x = 1400 + i * 150;
    const barH = (s.v / 100) * 250;
    pdf.setFillColor(...s.col);
    pdf.roundedRect(x, 880 - barH, 100, barH, 6, 6, "F");
    sub(pdf, s.c, x + 15, 905, 16);
    lbl(pdf, `${s.v}%`, x + 20, 870 - barH, 16, FG);
  });
  pgNum(pdf, 11);
}

function s12(pdf: jsPDF) {
  bg(pdf);
  lbl(pdf, "THE TEAM", 80, 80, 22);
  title(pdf, "Passionate Founders, Big Vision", 80, 160, 64);

  [
    { n: "Ariba Irfan", r: "CEO & Co-Founder", sk: ["Vision & Strategy", "Business Dev", "EdTech Domain", "Fundraising"] },
    { n: "Md. Roushan", r: "CSO, CTO & Co-Founder", sk: ["Strategy", "Operations", "Tech Architecture", "Growth"] },
  ].forEach((f, i) => {
    const x = 80 + i * 900;
    glassBox(pdf, x, 260, 800, 420);
    pdf.setFillColor(30, 45, 75);
    pdf.circle(x + 400, 360, 60, "F");
    pdf.setDrawColor(...PRIMARY);
    pdf.setLineWidth(3);
    pdf.circle(x + 400, 360, 60, "S");
    lbl(pdf, f.n.charAt(0), x + 385, 375, 40, PRIMARY);
    title(pdf, f.n, x + 200, 470, 36);
    lbl(pdf, f.r, x + 200, 510, 22, PRIMARY);
    f.sk.forEach((s, si) => {
      glassBox(pdf, x + 120 + si * 170, 560, 150, 40, 10);
      sub(pdf, s, x + 135 + si * 170, 585, 14);
    });
  });

  glassBox(pdf, 80, 730, 1780, 220);
  lbl(pdf, "Post-Funding Key Hires", 120, 775, 24, FG);
  ["Head of AI/ML", "Product Designer", "Growth Lead", "Full-Stack Engineers (3)"].forEach((h, i) => {
    glassBox(pdf, 120 + i * 420, 800, 380, 60, 10);
    lbl(pdf, "+ " + h, 140 + i * 420, 840, 18, MUTED);
  });
  pgNum(pdf, 12);
}

function s13(pdf: jsPDF) {
  bg(pdf);
  lbl(pdf, "INVESTMENT ASK", 80, 80, 22);
  title(pdf, "Raising ₹80 Lakhs Seed Round", 80, 160, 64);

  glassBox(pdf, 80, 270, 700, 550);
  title(pdf, "Use of Funds", 200, 340, 36);
  [{ n: "Technology", p: 70, c: PRIMARY }, { n: "Team", p: 15, c: ACCENT }, { n: "Marketing", p: 12.5, c: CYAN }, { n: "Contingency", p: 2.5, c: AMBER }].forEach((f, i) => {
    const yy = 400 + i * 90;
    pdf.setFillColor(...f.c);
    pdf.circle(120, yy, 10, "F");
    sub(pdf, f.n, 150, yy + 7, 22, FG);
    pdf.setFillColor(...f.c);
    pdf.roundedRect(150, yy + 20, (f.p / 100) * 450, 25, 5, 5, "F");
    lbl(pdf, `${f.p}%`, 150 + (f.p / 100) * 450 + 15, yy + 40, 18, FG);
  });

  glassBox(pdf, 850, 270, 1000, 160);
  sub(pdf, "Seed Round", 1150, 330, 24);
  title(pdf, "₹80 Lakhs", 1100, 400, 64);

  glassBox(pdf, 850, 470, 1000, 200);
  lbl(pdf, "Return Scenarios", 890, 515, 24, FG);
  [{ s: "Base", m: "10x", v: "₹8 Cr", t: "3 Yrs" }, { s: "Growth", m: "50x", v: "₹40 Cr", t: "5 Yrs" }, { s: "Moonshot", m: "100x", v: "₹80 Cr", t: "7 Yrs" }].forEach((r, i) => {
    const x = 900 + i * 310;
    glassBox(pdf, x, 540, 280, 110, 10);
    sub(pdf, r.s, x + 100, 570, 16);
    title(pdf, r.m, x + 90, 610, 36);
    sub(pdf, `${r.v} · ${r.t}`, x + 60, 640, 14);
  });

  glassBox(pdf, 850, 710, 1000, 210);
  lbl(pdf, "Key Milestones", 890, 755, 22, FG);
  ["Launch MVP with 10K users", "Achieve PMF 70%+ retention", "Sign 5+ institutional partners", "Build AI personalization engine", "Reach ₹7.2 Cr ARR", "Prepare for Series A at 10x"].forEach((m, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    lbl(pdf, "✓", 910 + col * 460, 785 + row * 40, 16, GREEN);
    sub(pdf, m, 935 + col * 460, 785 + row * 40, 14);
  });
  pgNum(pdf, 13);
}

function s14(pdf: jsPDF) {
  bg(pdf);
  lbl(pdf, "FUTURE ROADMAP", 80, 80, 22);
  title(pdf, "Vision to $10 Billion", 80, 160, 64);

  gradBar(pdf, 80, 380, 1760, 6);
  [
    { yr: "Y1", t: "Foundation", d: "MVP, 50K users" },
    { yr: "Y2", t: "Growth", d: "200K paid" },
    { yr: "Y3", t: "Scale", d: "Pan-India, 500K" },
    { yr: "Y4", t: "Expand", d: "SEA & Africa" },
    { yr: "Y5", t: "IPO Ready", d: "1.2M paid, $10B" },
  ].forEach((tm, i) => {
    const x = 80 + i * 360;
    lbl(pdf, tm.yr, x + 90, 360, 18, PRIMARY);
    pdf.setFillColor(20, 30, 55);
    pdf.roundedRect(x + 60, 410, 100, 100, 12, 12, "F");
    pdf.setDrawColor(...PRIMARY);
    pdf.setLineWidth(2);
    pdf.roundedRect(x + 60, 410, 100, 100, 12, 12, "S");
    lbl(pdf, tm.t, x + 30, 560, 22, FG);
    sub(pdf, tm.d, x + 20, 595, 16);
  });

  glassBox(pdf, 80, 650, 1100, 280);
  lbl(pdf, "Revenue & Users Growth", 120, 695, 22);
  [{ yr: "Y1", r: 7, u: 50 }, { yr: "Y2", r: 54, u: 200 }, { yr: "Y3", r: 270, u: 500 }, { yr: "Y4", r: 918, u: 800 }, { yr: "Y5", r: 2946, u: 1200 }].forEach((d, i) => {
    const x = 160 + i * 200;
    pdf.setFillColor(...PRIMARY);
    pdf.roundedRect(x, 900 - (d.r / 3000) * 180, 60, (d.r / 3000) * 180, 5, 5, "F");
    pdf.setFillColor(...ACCENT);
    pdf.roundedRect(x + 70, 900 - (d.u / 1200) * 180, 40, (d.u / 1200) * 180, 5, 5, "F");
    sub(pdf, d.yr, x + 30, 920, 16);
  });

  glassBox(pdf, 1240, 650, 620, 280);
  sub(pdf, "Target Valuation by Year 5", 1360, 720, 20);
  title(pdf, "$10B", 1410, 830, 80);
  sub(pdf, "IPO / Strategic Exit Target", 1370, 880, 18);
  pgNum(pdf, 14);
}

function s15(pdf: jsPDF) {
  bg(pdf);
  pdf.setFillColor(25, 35, 65);
  pdf.circle(960, 400, 280, "F");
  pdf.setFillColor(20, 30, 55);
  pdf.circle(960, 400, 200, "F");

  lbl(pdf, "TECHGRAM", 830, 300, 30, MUTED);
  title(pdf, "Let's Build the", 520, 430, 72);
  title(pdf, "Future of Education", 420, 520, 80);
  title(pdf, "Together", 780, 600, 72);
  sub(pdf, '"An investment in education is an investment in our future."', 490, 670, 26);

  ["First-mover in AI-native student OS", "$30B+ TAM growing 25% YoY", "250M+ addressable students", "78:1 LTV:CAC ratio"].forEach((r, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 400 + col * 560;
    const yy = 720 + row * 65;
    glassBox(pdf, x, yy, 520, 50, 10);
    lbl(pdf, "→", x + 15, yy + 35, 18, PRIMARY);
    sub(pdf, r, x + 45, yy + 35, 18);
  });

  ["hello@techgram.in", "techgram.in", "LinkedIn"].forEach((c, i) => {
    const x = 530 + i * 320;
    glassBox(pdf, x, 880, 280, 60, 10);
    lbl(pdf, c, x + 40, 918, 20, FG);
  });

  gradBar(pdf, 700, 970, 520, 55);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(26);
  pdf.setTextColor(255, 255, 255);
  pdf.text("Invest in Techgram →", 780, 1005);
  sub(pdf, "Ariba Irfan · CEO & Co-Founder · ariba@techgram.in", 620, 1060, 16);
  pgNum(pdf, 15);
}

export function generatePitchDeckPdf() {
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [W, H],
    compress: true,
  });

  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15].forEach((build, i) => {
    if (i > 0) pdf.addPage([W, H], "landscape");
    build(pdf);
  });

  pdf.save("Techgram-Pitch-Deck.pdf");
}
