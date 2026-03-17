import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const projects = [
  {
    title: "GoGrub",
    role: "Food Ordering Platform",
    metrics: "40% API Improvement",
    period: "Nov 2024 — Feb 2025",
    tech: ["React", "Django", "Redis", "AWS", "Docker", "WebSockets"],
    points: [
      "Built full stack food ordering platform with real-time order tracking via WebSockets.",
      "Integrated Razorpay API for secure payment processing with 100% payment status accuracy.",
      "Deployed on AWS ECS using Docker, leveraging Redis for caching — 40% faster API responses.",
      "Implemented CI/CD pipelines enabling zero-downtime updates.",
    ],
  },
  {
    title: "Marketing Fusion",
    role: "AI SaaS Platform",
    metrics: "100+ Concurrent Tasks",
    period: "Feb 2026 — Ongoing",
    tech: ["Python", "Django", "OpenAI", "Celery", "PostgreSQL", "OAuth 2.0"],
    points: [
      "Developing multi-tenant SaaS for automated social media scheduling across LinkedIn & YouTube.",
      "Integrating OpenAI API for AI-powered caption generation and hashtag optimization.",
      "Architected async publishing engine using Celery & Redis supporting 100+ concurrent users.",
      "Designed unified Analytics Dashboard with AI-powered RSS content summarization.",
    ],
  },
];

const skills = [
  { label: "Languages", items: "Python, JavaScript (ES6+), SQL, HTML5, CSS3" },
  { label: "Frontend", items: "React, Redux, Tailwind CSS, Responsive Design" },
  { label: "Backend", items: "Django, DRF, RESTful APIs, WebSockets, Celery" },
  { label: "Databases", items: "PostgreSQL, Redis" },
  { label: "Cloud & DevOps", items: "AWS, Docker, CI/CD, GitHub Actions" },
  { label: "Tools", items: "Git, Postman, Agile/Scrum, OAuth 2.0" },
  { label: "Integrations", items: "Razorpay, OpenAI, LinkedIn, YouTube" },
];

const ContentStream = () => {
  return (
    <main className="md:w-[60%] md:ml-[40%] p-8 md:p-16">
      {/* SUMMARY */}
      <motion.section
        id="summary"
        className="mb-32 max-w-xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
          Summary
        </h2>
        <p className="text-xl leading-relaxed text-muted-foreground">
          Motivated developer focused on{" "}
          <span className="text-foreground font-medium">measurable performance</span>.
          Achieved{" "}
          <span className="text-foreground font-semibold tabular-nums">40%</span>{" "}
          reduction in API latency and{" "}
          <span className="text-foreground font-semibold tabular-nums">30%</span>{" "}
          faster queries through architectural optimization, Redis caching, and
          efficient PostgreSQL indexing.
        </p>
      </motion.section>

      {/* PROJECTS */}
      <section id="projects" className="mb-32">
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-12">
          Selected Projects
        </h2>
        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-3xl font-medium tracking-tighter">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-muted-foreground pb-1 tabular-nums">
                  {project.metrics}
                </span>
              </div>
              <div className="h-[1px] w-full bg-border mb-6 origin-left group-hover:bg-muted-foreground transition-colors duration-500" />
              <p className="font-mono text-xs text-muted-foreground mb-4">
                {project.role} · {project.period}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ul className="text-muted-foreground text-sm leading-relaxed space-y-2">
                  {project.points.map((p, j) => (
                    <li key={j}>• {p}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 content-start">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-secondary text-[10px] font-mono uppercase tracking-tight rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mb-32">
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-12">
          Experience
        </h2>
        <div className="border-l border-border pl-8 space-y-16">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs text-muted-foreground mb-2">
              JULY 2024 — PRESENT
            </p>
            <h3 className="text-lg font-medium">Bridgeon Solutions</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Full Stack Developer Intern · Calicut, India
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 max-w-md">
              <li>
                • Architected full stack apps with React & DRF —{" "}
                <span className="text-foreground font-medium tabular-nums">25%</span> faster rendering.
              </li>
              <li>
                • Optimized PostgreSQL indexing — complex retrieval times reduced by{" "}
                <span className="text-foreground font-medium tabular-nums">30%</span>.
              </li>
              <li>
                • Containerized with Docker — setup time cut by{" "}
                <span className="text-foreground font-medium tabular-nums">50%</span>.
              </li>
              <li>
                • Agile/Scrum workflow with CI/CD via GitHub Actions — 100% adherence
                to production standards.
              </li>
              <li>
                • Built RESTful APIs connecting React frontend with Django backend services.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mb-32">
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((s) => (
            <motion.div
              key={s.label}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-1"
            >
              <p className="text-xs font-mono uppercase text-muted-foreground tracking-widest">
                {s.label}
              </p>
              <p className="text-sm font-medium">{s.items}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="mb-32">
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-12">
          Education
        </h2>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-muted-foreground mb-2">
            COMPLETED 2025
          </p>
          <h3 className="text-lg font-medium">
            Higher Secondary Education — Computer Science
          </h3>
          <p className="text-muted-foreground text-sm">
            GSHMH Edavenna, Kerala · Score: 85%
          </p>
        </motion.div>
      </section>

      {/* FOOTER LINKS */}
      <section className="pb-16">
        <div className="h-[1px] w-full bg-border mb-8" />
        <div className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <a
            href="https://linkedin.com/in/muhsinan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-300"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/muhammed-sinan-7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-300"
          >
            GitHub ↗
          </a>
          <a
            href="tel:+917907770534"
            className="hover:text-foreground transition-colors duration-300"
          >
            +91-7907770534
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContentStream;
