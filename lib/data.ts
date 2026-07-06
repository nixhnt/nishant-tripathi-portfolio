// ---------------------------------------------------------------------------
// All portfolio copy lives here. Edit this file to update the site content
// without touching any component markup.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Nishant Tripathi",
  shortName: "Nix",
  role: "IT Infrastructure Intern",
  targetRole: "Cloud Security Engineer (in progress)",
  location: "Mumbai, India",
  email: "nishant.tripathi.work@gmail.com", // placeholder — update to your real address
  phone: "+91 00000 00000", // placeholder — update to your real number
  company: "Cloudstrats",
  companyLocation: "Ghatkopar West, Mumbai",
  manager: "Conan Drego",
  skipManager: "Parimal Deshpande",
  resumeUrl: "/resume.pdf",
  taglineRoles: [
    "IT Infrastructure Intern",
    "Aspiring Cloud Security Engineer",
    "Network & Cloud Enthusiast",
    "CCNA Candidate · 2026",
  ],
  bio: [
    "I'm an Electronics & Telecommunication Engineering graduate (LTCE, Navi Mumbai, 2026) who fell in love with the plumbing of the internet — routers, VPNs, and the quiet 3 a.m. alerts that keep networks alive.",
    "Right now I'm an IT Infrastructure Intern at Cloudstrats, working across networking, servers, and cloud fundamentals. Before that, I got a first-hand look at real NOC operations during my internship at Reliance Jio Home Connect.",
    "My roadmap is deliberate: CCNA by September 2026, Fortinet NSE4 by December 2026, and a full-time NOC / L1 network security role by January 2027 — on my way to becoming a Cloud Security Engineer.",
  ],
  stats: [
    { label: "SVM model accuracy (final year project)", value: 95.36, suffix: "%" },
    { label: "Interview rounds cleared at Cloudstrats", value: 3, suffix: "" },
    { label: "Networking protocols hands-on", value: 10, suffix: "+" },
    { label: "Months of infra internship experience", value: 8, suffix: "+" },
  ],
};

export const socials = [
  { name: "GitHub", url: "https://github.com/nishanttripathi", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/nishanttripathi", icon: "linkedin" },
  { name: "Email", url: "mailto:nishant.tripathi.work@gmail.com", icon: "mail" },
  { name: "Twitter / X", url: "https://twitter.com/nishanttripathi", icon: "twitter" },
];

export type SkillGroup = {
  category: string;
  blurb: string;
  items: { name: string; level: number }[];
};

export const skills: SkillGroup[] = [
  {
    category: "Networking",
    blurb: "Where I started, and still where I'm most at home.",
    items: [
      { name: "OSPF & Routing", level: 80 },
      { name: "VLANs & STP", level: 82 },
      { name: "ACLs & NAT/PAT", level: 78 },
      { name: "IPsec VPN", level: 70 },
      { name: "DHCP / DNS", level: 80 },
      { name: "SSH & Device Hardening", level: 75 },
    ],
  },
  {
    category: "Cloud (AWS)",
    blurb: "Built on AWS Cloud Practitioner fundamentals, applied hands-on.",
    items: [
      { name: "EC2 & VPC", level: 68 },
      { name: "S3", level: 70 },
      { name: "IAM", level: 65 },
      { name: "Cloud Security Basics", level: 60 },
    ],
  },
  {
    category: "Security Infrastructure",
    blurb: "Hands-on with the boxes that sit at the edge of the network.",
    items: [
      { name: "Cisco IOS (routers/switches)", level: 78 },
      { name: "FortiGate Firewalls", level: 65 },
      { name: "EVE-NG Lab Simulation", level: 72 },
    ],
  },
  {
    category: "Tools & Languages",
    blurb: "The scripting and tooling layer around the infrastructure.",
    items: [
      { name: "Python", level: 62 },
      { name: "PuTTY / CLI tooling", level: 80 },
      { name: "Arduino / Embedded C", level: 70 },
    ],
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "IT Infrastructure Intern",
    org: "Cloudstrats",
    location: "Ghatkopar West, Mumbai",
    period: "Jun 2026 — Present",
    current: true,
    points: [
      "Working across networking, server administration, and cloud generalist responsibilities as part of the infrastructure team.",
      "Reporting to Conan Drego, under the broader IT organisation led by Parimal Deshpande.",
      "Cleared three interview rounds — including networking depth (OSPF, VLANs, ACLs, IPsec VPN, NAT/PAT, STP) and AWS fundamentals (EC2, VPC, S3, IAM) — to join the team.",
      "Chosen deliberately over a return offer at Jio, as the role aligns more closely with a long-term Cloud Security Engineer trajectory.",
    ],
  },
  {
    role: "IT Intern (PM Internship Scheme)",
    org: "Reliance Jio Home Connect",
    location: "Wagle Estate, Thane",
    period: "2026",
    points: [
      "Got a first-hand look at live NOC operations — SSH access into network devices via PuTTY, AirFiber signal measurement, IP routing, and fault ticketing.",
      "Worked within a structured government-backed internship program (PMIS), completing the term with a confirmed experience letter.",
    ],
  },
  {
    role: "CCNA Training (Hands-on)",
    org: "NFT Network Technologies",
    location: "Thane",
    period: "Earlier",
    points: [
      "Hands-on training on real Cisco and FortiGate hardware — the foundation for everything that followed.",
      "Built practical familiarity with switching, routing, and firewall configuration outside of simulation-only environments.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  metric?: string;
};

export const projects: Project[] = [
  {
    title: "Mind Track — EEG Mental State Detection",
    description:
      "A wearable EEG system that classifies mental states in real time using a BioAmp EXG Pill and Arduino UNO R4 Minima, feeding into an SVM classifier. Co-authored and published as an IEEE paper alongside a full project report ('black book').",
    tags: ["EEG", "Arduino", "SVM", "Signal Processing", "IEEE Publication"],
    metric: "95.36% classification accuracy",
    github: "https://github.com/nishanttripathi/mind-track",
    featured: true,
  },
  {
    title: "EVE-NG Enterprise Network Lab",
    description:
      "A self-built enterprise network simulation on VMware using Cisco IOL, Dynamips, and QEMU images for FortiGate, pfSense, and FortiAnalyzer — used to practice routing, switching, and firewall scenarios beyond what a single physical lab allows.",
    tags: ["EVE-NG", "Cisco IOL", "FortiGate", "pfSense", "VMware"],
    github: "https://github.com/nishanttripathi/eve-ng-lab",
    featured: true,
  },
  {
    title: "Arduino Fingerprint Door Lock",
    description:
      "A biometric access-control system built around an Arduino and a fingerprint sensor module, with enrollment, matching, and relay-driven lock control.",
    tags: ["Arduino", "Embedded C", "Biometrics"],
    github: "https://github.com/nishanttripathi/fingerprint-lock",
  },
  {
    title: "DHT11–STM32 Interfacing",
    description:
      "Temperature and humidity sensing pipeline interfacing a DHT11 sensor with an STM32 microcontroller, with UART-based data readout.",
    tags: ["STM32", "DHT11", "Embedded Systems"],
    github: "https://github.com/nishanttripathi/dht11-stm32",
  },
  {
    title: "Proximity Sensor Security Alarm",
    description:
      "A low-cost intrusion alert system built on ultrasonic proximity sensing, triggering an audible alarm on breach detection.",
    tags: ["Embedded Systems", "Sensors", "Arduino"],
    github: "https://github.com/nishanttripathi/proximity-alarm",
  },
];

export type Achievement = {
  title: string;
  description: string;
  date: string;
};

export const achievements: Achievement[] = [
  {
    title: "IEEE Publication — Mind Track",
    description:
      "Co-authored and published an IEEE paper on EEG-based mental state detection as part of the final year project.",
    date: "2026",
  },
  {
    title: "95.36% Model Accuracy",
    description:
      "Achieved 95.36% classification accuracy with an SVM-based mental state classifier — the technical centrepiece of the Mind Track project.",
    date: "2026",
  },
  {
    title: "Cleared 3/3 Interview Rounds at Cloudstrats",
    description:
      "Cleared all interview rounds, including a senior virtual round, on networking depth and AWS fundamentals to secure the Infrastructure Intern role.",
    date: "Jun 2026",
  },
  {
    title: "81–87%+ Exam Prediction Hit Rate",
    description:
      "Built and used a structured prediction methodology for end-semester exams (NLP, OCN, NMT, EM), consistently landing 81–87%+ hit rates.",
    date: "2026",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  status: "Completed" | "In Progress" | "Planned";
  date: string;
};

export const certifications: Certification[] = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (Training)",
    status: "Completed",
    date: "2026",
  },
  {
    name: "CCNA (Cisco Certified Network Associate)",
    issuer: "Cisco",
    status: "In Progress",
    date: "Target: Sep 2026",
  },
  {
    name: "Fortinet NSE4",
    issuer: "Fortinet",
    status: "Planned",
    date: "Target: Dec 2026",
  },
  {
    name: "B.E. Electronics & Telecommunication Engineering",
    issuer: "Lokmanya Tilak College of Engineering, Navi Mumbai",
    status: "Completed",
    date: "May 2026",
  },
];

export const roadmap = [
  { phase: "CCNA + NSE4", period: "2026" },
  { phase: "First NOC / L1 Role", period: "Jan 2027" },
  { phase: "PCNSA + eJPT", period: "2027" },
  { phase: "AWS SAA + Security+", period: "2027" },
  { phase: "Python / Ansible / Terraform / SOAR", period: "2028" },
];
