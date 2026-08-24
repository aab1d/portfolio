import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const COLORS = {
  paper: "#F6F5F1",
  ink: "#14171C",
  inkSoft: "#565B62",
  line: "#DCD9D1",
  signal: "#2B6E63",
  panel: "#EFEDE7",
};

const PROJECTS = [
  {
    code: "FLM 01",
    title: "Filmomatics",
    desc: "A browsable film catalog built with the full mechanics of a small storefront: cart, favorites, registration, and login. The point wasn't the film data — it was getting the interaction model right, so state holds together as you move between pages instead of resetting.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://aab1d.github.io/filmomatics/",
    source: "https://github.com/aab1d",
  },
  {
    code: "BLG 02",
    title: "BlogSite",
    desc: "An editorial platform for long-form writing across technology, philosophy, and mathematics — categorized articles, an about and contact structure, a gallery for supporting images. Built to actually hold reading, not placeholder text.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://aab1d.github.io/blog-site/",
    source: "https://github.com/aab1d",
  },
  {
    code: "EXP 03",
    title: "Expense Tracker",
    desc: "A React application for logging and reviewing personal spending. The kind of tool I built for myself first — the bar for a finance app is that you actually trust it enough to keep using it.",
    tags: ["React", "JavaScript"],
    live: "https://expense-tr4cker.netlify.app/",
    source: "https://github.com/aab1d",
  },
];

const SKILLS = [
  { group: "Languages", items: ["JavaScript", "Java", "C++", "C"] },
  { group: "Frontend", items: ["React", "HTML / CSS"] },
  { group: "Backend", items: ["Node", "Express", "MongoDB"] },
  { group: "Tools", items: ["Git", "GitHub"] },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const [navOpen, setNavOpen] = useState(false);

  const fDisplay = { fontFamily: "'Space Grotesk', sans-serif" };
  const fBody = { fontFamily: "'Newsreader', serif" };
  const fMono = { fontFamily: "'JetBrains Mono', monospace" };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  return (
    <div style={{ background: COLORS.paper, color: COLORS.ink, ...fBody, minHeight: "100vh" }}>
      <div className="grid md:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside
          className="md:sticky md:top-0 md:h-screen flex flex-col justify-between p-8"
          style={{ borderRight: `1px solid ${COLORS.line}`, borderBottom: `1px solid ${COLORS.line}` }}
        >
          <div>
            <div style={fDisplay} className="text-2xl font-semibold tracking-tight">
              Abid Farooq
            </div>
            <div className="mt-1 text-sm" style={{ color: COLORS.inkSoft }}>
              Software Developer
            </div>

            <nav className="mt-12">
              <div
                style={fMono}
                className="text-xs uppercase tracking-widest mb-4"
                style={{ ...fMono, color: COLORS.inkSoft, letterSpacing: "0.12em", fontSize: "0.68rem" }}
              >
                Index
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  ["00", "Intro", "intro"],
                  ["01", "Selected work", "work"],
                  ["02", "Skills", "skills"],
                  ["03", "Contact", "contact"],
                ].map(([num, label, id]) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className="flex items-baseline gap-2 hover:opacity-70 transition-opacity"
                      style={{ color: COLORS.ink, background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    >
                      <span style={{ ...fMono, fontSize: "0.72rem", color: COLORS.inkSoft }}>{num}</span>
                      <span style={{ fontFamily: "'Newsreader', serif", fontSize: "0.98rem" }}>{label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div style={{ ...fMono, fontSize: "0.72rem", color: COLORS.inkSoft, lineHeight: 1.7 }} className="mt-12 md:mt-0">
            <div>
              <span
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: COLORS.signal,
                  marginRight: 7,
                }}
              />
              <span style={{ color: COLORS.ink }}>Available for work</span>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main>
          <section id="intro" className="px-6 md:px-16 pt-20 pb-20 md:pt-24" style={{ borderBottom: `1px solid ${COLORS.line}`, maxWidth: 820 }}>
            <Reveal>
              <div style={{ ...fMono, fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: COLORS.signal }}>
                Software Developer
              </div>
              <h1 style={{ ...fDisplay, fontWeight: 500, fontSize: "2.15rem", lineHeight: 1.35, maxWidth: "15ch", marginTop: 22 }}>
                I build small, exact tools.
              </h1>
              <p style={{ color: COLORS.inkSoft, fontSize: "1.05rem", maxWidth: "52ch", marginTop: 22 }}>
                Trackers, catalogs, and reading platforms — projects sized to be finished, not padded out.
                I care more about a login flow that behaves correctly than one that looks impressive and does neither.
              </p>
            </Reveal>
          </section>

          <section id="work" className="px-6 md:px-16 py-20" style={{ borderBottom: `1px solid ${COLORS.line}`, maxWidth: 820 }}>
            <Reveal>
              <div className="flex items-baseline justify-between mb-10">
                <h2 style={{ ...fDisplay, fontWeight: 600, fontSize: "1.05rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Selected work
                </h2>
                <span style={{ ...fMono, fontSize: "0.78rem", color: COLORS.inkSoft }}>{PROJECTS.length} entries</span>
              </div>
            </Reveal>

            {PROJECTS.map((p, i) => (
              <Reveal key={p.code} delay={i * 80}>
                <div
                  className="grid grid-cols-1 md:grid-cols-[90px_1fr] gap-2 md:gap-7 py-8 group"
                  style={{ borderTop: `1px solid ${COLORS.line}` }}
                >
                  <div style={{ ...fMono, fontSize: "0.78rem", color: COLORS.inkSoft, paddingTop: 4 }}>{p.code}</div>
                  <div>
                    <h3 style={{ ...fDisplay, fontWeight: 600, fontSize: "1.3rem", marginBottom: 10 }}>{p.title}</h3>
                    <p style={{ color: COLORS.inkSoft, fontSize: "1rem", maxWidth: "56ch" }}>{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            ...fMono,
                            fontSize: "0.72rem",
                            padding: "4px 9px",
                            background: COLORS.panel,
                            borderRadius: 3,
                            color: COLORS.inkSoft,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-5 mt-5">
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 transition-colors"
                        style={{ ...fMono, fontSize: "0.82rem", textDecoration: "none", borderBottom: `1px solid ${COLORS.ink}`, paddingBottom: 2, color: COLORS.ink }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.signal; e.currentTarget.style.borderColor = COLORS.signal; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = COLORS.ink; e.currentTarget.style.borderColor = COLORS.ink; }}
                      >
                        View live <ArrowUpRight size={13} />
                      </a>
                      <a
                        href={p.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 transition-colors"
                        style={{ ...fMono, fontSize: "0.82rem", textDecoration: "none", borderBottom: `1px solid ${COLORS.ink}`, paddingBottom: 2, color: COLORS.ink }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.signal; e.currentTarget.style.borderColor = COLORS.signal; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = COLORS.ink; e.currentTarget.style.borderColor = COLORS.ink; }}
                      >
                        Source <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </section>

          <section id="skills" className="px-6 md:px-16 py-20" style={{ borderBottom: `1px solid ${COLORS.line}`, maxWidth: 820 }}>
            <Reveal>
              <h2 style={{ ...fDisplay, fontWeight: 600, fontSize: "1.05rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 40 }}>
                Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {SKILLS.map((s) => (
                  <div key={s.group}>
                    <div style={{ ...fMono, fontSize: "0.72rem", color: COLORS.inkSoft, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
                      {s.group}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {s.items.map((item) => (
                        <span
                          key={item}
                          style={{
                            ...fMono,
                            fontSize: "0.8rem",
                            padding: "6px 11px",
                            background: COLORS.panel,
                            borderRadius: 3,
                            color: COLORS.ink,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <section id="contact" className="px-6 md:px-16 py-20" style={{ maxWidth: 820 }}>
            <Reveal>
              <h2 style={{ ...fDisplay, fontWeight: 500, fontSize: "1.7rem", lineHeight: 1.4, maxWidth: "18ch" }}>
                Open to hearing what you're building.
              </h2>
              <p style={{ color: COLORS.inkSoft, marginTop: 16, maxWidth: "48ch" }}>
                Reach out about roles, freelance work, or a project you'd like a second pair of hands on.
              </p>
              <div className="flex flex-col gap-4 mt-9">
                <a
                  href="mailto:aabidfarooq44@gmail.com"
                  className="inline-flex items-center gap-3 w-fit transition-colors"
                  style={{ textDecoration: "none", color: COLORS.ink, fontSize: "1.05rem" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.signal)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.ink)}
                >
                  <Mail size={17} />
                  Email <span style={{ ...fMono, fontSize: "0.75rem", color: COLORS.inkSoft }}>→ aabidfarooq44@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/aab1d/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 w-fit transition-colors"
                  style={{ textDecoration: "none", color: COLORS.ink, fontSize: "1.05rem" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.signal)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.ink)}
                >
                  <Linkedin size={17} />
                  LinkedIn <span style={{ ...fMono, fontSize: "0.75rem", color: COLORS.inkSoft }}>→ linkedin.com/in/aab1d</span>
                </a>
                <a
                  href="https://github.com/aab1d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 w-fit transition-colors"
                  style={{ textDecoration: "none", color: COLORS.ink, fontSize: "1.05rem" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.signal)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.ink)}
                >
                  <Github size={17} />
                  GitHub <span style={{ ...fMono, fontSize: "0.75rem", color: COLORS.inkSoft }}>→ github.com/aab1d</span>
                </a>
              </div>
            </Reveal>
          </section>

          <footer className="px-6 md:px-16 pb-12" style={{ ...fMono, fontSize: "0.72rem", color: COLORS.inkSoft }}>
            © 2026 Abid Farooq. Built by hand, not a template.
          </footer>
        </main>
      </div>
    </div>
  );
}
