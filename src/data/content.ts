// All of the site's copy lives here. Edit this file to update the portfolio.

export type TextSegment = { text: string; italic?: boolean };

export const site = {
  name: "Somana Debnath",
  firstName: "Somana",
  lastName: "Debnath",
  monogram: "sd",
  title: "Somana Debnath · Software Engineer",
  description:
    "Computer Engineering (Co-op) student at the University of Ottawa, graduating December 2026 and looking for full-time software roles starting January 2027.",
  email: "somana.debnath@gmail.com",
  github: "https://github.com/somana-debnath",
  linkedin: "https://ca.linkedin.com/in/somanadebnath",
  resume: "/resume.pdf",
};

export const nav = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
];

export const hero = {
  badge: "Open to full-time roles · January 2027",
  subline: "Software engineer · uOttawa '26 · Ottawa & Toronto",
};

export const currently: { label: string; segments: TextSegment[]; msPerChar: number } = {
  label: "Currently",
  msPerChar: 35,
  segments: [
    { text: "Finishing my last semester at uOttawa! I just had my " },
    { text: "Iron Ring", italic: true },
    { text: " ceremony and can't wait to wear it full time." },
  ],
};

export const education = {
  school: "University of Ottawa",
  degree: "Bachelor of Applied Science",
  program: "Computer Engineering (Co-op)",
  dates: "September 2022 to December 2026",
  honours: {
    label: "Dean's Honours List",
    terms: "Winter 2023, Fall 2023, Winter 2026",
  },
};

export type Role = {
  role: string;
  company: string;
  dates: string;
  highlights: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    role: "Database & Automation Intern",
    company: "Public Services and Procurement Canada",
    dates: "May to August 2026",
    highlights: [
      "Engineered an RPA monitoring bot with UiPath, PowerShell and Python that simulates live user workflows to detect production outages, cutting mean-time-to-detection by 40%.",
      "Accelerated the bot's development with an AI-native workflow in Claude Code, from scripting to testing.",
      "Built CI/CD pipelines that automatically test and deploy the bot across production environments.",
      "Built Flask REST APIs on Docker and Kubernetes, and monitored Oracle databases with Oracle Enterprise Manager and SQL.",
    ],
    tags: ["UiPath", "Python", "PowerShell", "Flask", "Kubernetes", "Oracle", "Claude Code"],
  },
  {
    role: "Infrastructure Engineer Intern",
    company: "Public Services and Procurement Canada",
    dates: "September to December 2025",
    highlights: [
      "Managed 20+ Linux servers through upgrades, refreshes and lifecycle management, improving uptime 15%.",
      "Built 10+ automation scripts in Python, Bash and PowerShell across 8 environments, cutting manual work 30%.",
      "Supported 15+ deployments through Git-based releases, improving deployment efficiency 25%.",
      "Troubleshot 15+ production incidents with Linux diagnostics and logs, cutting resolution time 20%.",
    ],
    tags: ["Linux", "Bash", "Python", "PowerShell", "Git"],
  },
  {
    role: "Software Developer Intern",
    company: "Agriculture and Agri-Food Canada",
    dates: "January to April 2025",
    highlights: [
      "Engineered full-stack React and Python features with REST APIs for DINA, a biodiversity data platform serving 100+ researchers.",
      "Optimized pipelines with Nextflow, Snakemake and Bash, cutting run time 35% on 10+ datasets.",
      "Developed reusable Python modules in dina-py for database operations and API integrations.",
      "Wrote unit and integration tests and contributed to CI/CD and code reviews.",
    ],
    tags: ["React", "Python", "REST APIs", "Nextflow", "CI/CD"],
  },
  {
    role: "IT Analyst Intern",
    company: "Public Services and Procurement Canada",
    dates: "May to August 2024",
    highlights: [
      "Wrote SQL and PowerShell scripts monitoring 15+ databases, saving 6 hours a week.",
      "Provisioned 50+ Active Directory accounts through JIRA and supported server administration.",
    ],
    tags: ["SQL", "PowerShell", "Active Directory", "JIRA"],
  },
];

export type Project = {
  title: string;
  badge?: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    title: "Jars",
    description:
      "A kids' allowance app with Spend, Save and Give jars, built on a double-entry ledger with Row Level Security, atomic Postgres functions, pg_cron interest and 65 tests.",
    tags: ["Next.js", "TypeScript", "Supabase", "Postgres"],
    github: "https://github.com/somana-debnath/jars",
    live: "https://jars-three.vercel.app/",
    image: "/projects/jars.png",
    imageAlt: "Screenshot of the Jars allowance app",
  },
  {
    title: "Pulse",
    description:
      "A synthetic monitoring platform that runs Playwright user journeys on a schedule, opens incidents after 2 consecutive failures, and shows uptime and p95 latency on a status page. An open-source take on the RPA monitoring bot I built at PSPC.",
    tags: ["Playwright", "TypeScript", "SQL", "GitHub Actions"],
    github: "https://github.com/somana-debnath/pulse",
    live: "https://pulse-nu-ebon-23.vercel.app/",
    image: "/projects/pulse.png",
    imageAlt: "Screenshot of the Pulse status page",
  },
  {
    title: "Bridge",
    badge: "Capstone",
    description:
      "A sensor glove that turns ASL fingerspelling into text. I work on the glove hardware, including sensor wiring, ESP32 firmware and calibration.",
    tags: ["ESP32", "C++", "BLE", "IMU"],
    github: "https://github.com/stupnd/Bridge",
    image: "/projects/bridge.svg",
    imageAlt: "Illustration of a glove with small sensor dots on each finger",
  },
];

export const leadership = {
  org: "IEEE Women in Engineering",
  school: "University of Ottawa",
  dates: "2022 to 2026",
  roles: [
    { title: "VP External", dates: "2022 to 24" },
    { title: "Vice Chair", dates: "2024 to 25" },
    { title: "Chair", dates: "2025 to 26", current: true },
  ],
  intro:
    "Over four years with IEEE WIE at uOttawa, I grew through three executive roles to Chair, leading a team of student executives and connecting students with professionals in engineering and tech.",
  highlights: [
    "Founded WIEEECODE, our first-ever hackathon, giving students a space to collaborate and build",
    "Organized the Women in Engineering Panel, Wine & Cheese Networking Night and Industry Night",
    "Coordinated corporate partnerships, sponsorships and industry outreach",
    "Built my leadership, event management and communication skills while creating more opportunities for women in STEM",
  ],
};

export const contact = {
  headingStart: "Let's",
  headingItalic: "talk",
  line: "Looking for full-time software roles starting January 2027.",
  button: "Say hello",
};

// How many highlights show before "Show more".
export const visibleHighlights = 2;
