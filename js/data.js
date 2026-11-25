/* ============================================================
   PORTFOLIO CONTENT — edit this file to update your website.
   No HTML knowledge needed: just change the values below.
   ============================================================ */

const PORTFOLIO = {
  name: "Nicholas",
  role: "Software Engineer",
  // Words that rotate in the hero headline
  taglines: ["web apps", "REST APIs", "full-stack tools", "clean software"],
  intro:
    "I build fast, reliable and thoughtfully designed software across the stack — from interactive front-ends to SQL-backed APIs and command-line tools.",
  location: "United States",
  email: "nbenja17@wgu.edu",
  resumeUrl: "#", // e.g. "assets/resume.pdf"
  availableForWork: true,

  socials: [
    { label: "GitHub", url: "https://github.com/benjamin26886", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/in/your-profile", icon: "linkedin" },
    { label: "Email", url: "mailto:nbenja17@wgu.edu", icon: "mail" },
  ],

  about: [
    "Hi! I'm Nicholas, a software engineer who enjoys building things that solve real problems — whether that's a responsive web app, a REST API, or a command-line tool.",
    "I care about clean, readable code, solid fundamentals and continuous learning. I'm currently looking for software engineering opportunities where I can contribute, grow and ship meaningful products.",
  ],

  stats: [
    { value: "6+", label: "Projects built" },
    { value: "10+", label: "Technologies" },
    { value: "∞", label: "Curiosity" },
  ],

  /* ---- TECH STACK ----
     Add new skills here as you learn them.
     "icon" uses Devicon names: https://devicon.dev  (e.g. "python", "react", "docker")
     If no icon exists, leave it out and the first letters will be shown instead. */
  skills: [
    {
      category: "Languages",
      items: [
        { name: "JavaScript", icon: "javascript" },
        { name: "Python", icon: "python" },
        { name: "Java", icon: "java" },
        { name: "SQL", icon: "azuresqldatabase" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css3" },
      ],
    },
    {
      category: "Frameworks & Databases",
      items: [
        { name: "React", icon: "react" },
        { name: "Node.js", icon: "nodejs" },
        { name: "Express", icon: "express" },
        { name: "SQLite", icon: "sqlite" },
      ],
    },
    {
      category: "Tools & Workflow",
      items: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "VS Code", icon: "vscode" },
        { name: "Maven", icon: "maven" },
        { name: "Vite", icon: "vitejs" },
        { name: "Jest", icon: "jest" },
      ],
    },
  ],

  /* ---- PROJECTS ---- */
  projects: [
    {
      title: "Kanban Task Manager",
      description:
        "An accessible, dependency-free Kanban board with drag-and-drop columns, keyboard navigation, due-date badges, search/filtering, dark mode, and localStorage persistence.",
      tags: ["HTML5", "CSS3", "JavaScript", "ES Modules"],
      github: "https://github.com/benjamin26886/task-manager",
      live: "https://benjamin26886.github.io/task-manager/",
      featured: true,
    },
    {
      title: "Expense Tracker CLI",
      description:
        "A zero-dependency Python command-line application backed by SQLite for tracking expenses, setting monthly category budgets with warnings, and exporting reports to ASCII tables or CSV.",
      tags: ["Python", "SQLite", "argparse", "unittest"],
      github: "https://github.com/benjamin26886/expense-tracker",
      live: "",
    },
    {
      title: "Developer Portfolio",
      description:
        "A fast, responsive, zero-dependency personal portfolio website featuring a custom HTML5 Canvas particle network, dynamic content data model, and scroll reveal animations.",
      tags: ["HTML5", "CSS3", "JavaScript", "Canvas"],
      github: "https://github.com/benjamin26886/benjamin26886.github.io",
      live: "https://benjamin26886.github.io/",
    },
  ],

  /* ---- EXPERIENCE / EDUCATION ---- */
  experience: [
    {
      title: "B.S. in Software Engineering / Computer Science",
      org: "Western Governors University (WGU)",
      period: "In Progress",
      points: [
        "Coursework in data structures & algorithms, object-oriented programming, relational databases, and full-stack web development.",
        "Building portfolio projects across JavaScript/React, Node.js, Python, Java, and SQL.",
      ],
    },
  ],
};
