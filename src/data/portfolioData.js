import {
  FaGithub, FaLinkedin, FaTrophy, FaMedal, FaMusic, FaGamepad,
  FaUsers, FaHandsHelping, FaStar, FaBrain, FaRobot, FaTerminal,
  FaSitemap, FaCubes, FaDatabase, FaServer, FaNetworkWired,
  FaGraduationCap, FaCode, FaMapMarkerAlt,
} from 'react-icons/fa';
import {
  SiCodeforces, SiLeetcode, SiC, SiCplusplus, SiPython, SiJavascript,
  SiHtml5, SiCss, SiReact, SiTailwindcss, SiBootstrap, SiNodedotjs,
  SiFlask, SiExpress, SiFastapi, SiMysql, SiPostgresql, SiFirebase,
  SiPandas, SiNumpy, SiLangchain, SiOllama, SiStreamlit,
  SiGit, SiGithub, SiDocker, SiGithubactions, SiPostman, SiVercel,
  SiLinux, SiVite,
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

// ── EDIT THESE ─────────────────────────────────────────────────────────────
export const GITHUB_USERNAME     = '08-charan';
export const LEETCODE_USERNAME   = '08__charan';
export const CODEFORCES_USERNAME = '08__charan';
export const LINKEDIN_USERNAME   = 'lakavath-sai-charan-88b227336';
export const CONTACT_EMAIL       = 'ffsunny405@gmail.com';
// ──────────────────────────────────────────────────────────────────────────

export const PERSONAL = {
  name: 'Lakavath Sai Charan',
  initials: 'LSC',
  headline: 'Computer Science Undergraduate at IIT Kharagpur',
  subheadline: 'Building AI-powered Applications, Full-Stack Systems & Developer Tools',
  tagline: 'AI Enthusiast · Full Stack Developer · Problem Solver',
  location: 'IIT Kharagpur, West Bengal, India',
  locationShort: 'Kharagpur, India',
  institute: 'Indian Institute of Technology Kharagpur',
  degree: 'B.Tech + M.Tech (Dual Degree) in Computer Science and Engineering',
  gradYear: '2028',
  status: 'open_to_internships',
};

export const INTERNSHIP_STATUS = {
  seeking: true,
  label: 'Currently Seeking',
  role: 'Software Engineering Internship',
  timeline: 'May – July 2027',
};

export const TYPING_ROLES = [
  'AI Engineer',
  'Full Stack Developer',
  'Software Engineer',
  'Problem Solver',
  'IIT Kharagpur CSE Student',
];

export const SOCIALS = {
  github:     { label: 'GitHub',     url: `https://github.com/08-charan`,               icon: FaGithub     },
  linkedin:   { label: 'LinkedIn',   url: `https://linkedin.com/in/lakavath-sai-charan-88b227336`,        icon: FaLinkedin   },
  codeforces: { label: 'Codeforces', url: `https://codeforces.com/profile/08__charan`,icon: SiCodeforces },
  leetcode:   { label: 'LeetCode',   url: `https://leetcode.com/08__charan`,           icon: SiLeetcode   },
  email:      { label: 'Email',      url: `mailto:ffsunny405@gmail.com`,                             icon: null         },
};

export const RESUME_URL = '/resume.pdf';

export const NAV_LINKS = [
  { label: 'About',       href: '#about'        },
  { label: 'Skills',      href: '#skills'       },
  { label: 'Projects',    href: '#projects'     },
  { label: 'Achievements',href: '#achievements' },
  { label: 'Education',   href: '#education'    },
  { label: 'Profiles',    href: '#profiles'     },
  { label: 'Experience',  href: '#experience'   },
  { label: 'Contact',     href: '#contact'      },
];

export const ABOUT = {
  paragraphs: [
    "I enjoy solving challenging engineering problems using Artificial Intelligence and scalable software systems. My interests span Large Language Models, backend engineering, full-stack development, and developer productivity tools.",
    "I enjoy turning ideas into products that are practical, reliable, and user-focused — code that solves a real problem first, and looks good doing it second.",
  ],
  interests: [
    'Large Language Models', 'Generative AI', 'Full Stack Development',
    'Backend Engineering', 'Developer Tools', 'Intelligent Systems', 'Problem Solving',
  ],
};

export const STATS = [
  { number: 4,    suffix: '+',  label: 'Major AI Projects',      icon: FaRobot,       accent: 'electric' },
  { number: 300,  suffix: '+',  label: 'DSA Problems Solved',     icon: FaCode,        accent: 'violet'   },
  { number: 1108, suffix: '',   label: 'Codeforces Rating',       icon: SiCodeforces,  accent: 'electric' },
  { prefix: 'AIR ', number: 333, suffix: '', label: 'JEE Advanced', icon: FaMedal,   accent: 'violet'   },
  { number: 2028, suffix: '',   label: 'Graduation',              icon: FaGraduationCap,accent: 'electric'},
  { number: 5,    suffix: '+',  label: 'Leadership Positions',    icon: FaUsers,       accent: 'violet'   },
];

export const SKILLS = [
  {
    category: 'Languages',
    items: [
      { name: 'C',          icon: SiC         },
      { name: 'C++',        icon: SiCplusplus },
      { name: 'Python',     icon: SiPython    },
      { name: 'JavaScript', icon: SiJavascript},
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'HTML',         icon: SiHtml5      },
      { name: 'CSS',          icon: SiCss        },
      { name: 'React.js',     icon: SiReact      },
      { name: 'Tailwind CSS', icon: SiTailwindcss},
      { name: 'Bootstrap',    icon: SiBootstrap  },
      { name: 'Vite',         icon: SiVite       },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js',    icon: SiNodedotjs  },
      { name: 'Flask',      icon: SiFlask      },
      { name: 'FastAPI',    icon: SiFastapi    },
      { name: 'Express.js', icon: SiExpress    },
      { name: 'REST APIs',  icon: FaNetworkWired},
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MySQL',      icon: SiMysql      },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Firebase',   icon: SiFirebase   },
    ],
  },
  {
    category: 'AI / ML & LLMs',
    items: [
      { name: 'Machine Learning',   icon: FaBrain     },
      { name: 'Pandas',             icon: SiPandas    },
      { name: 'NumPy',              icon: SiNumpy     },
      { name: 'LangChain',          icon: SiLangchain },
      { name: 'Ollama',             icon: SiOllama    },
      { name: 'Streamlit',          icon: SiStreamlit },
      { name: 'Generative AI',      icon: FaRobot     },
      { name: 'Prompt Engineering', icon: FaTerminal  },
    ],
  },
  {
    category: 'Core CS',
    items: [
      { name: 'Data Structures & Algorithms', icon: FaSitemap },
      { name: 'OOPs',                         icon: FaCubes   },
      { name: 'DBMS',                         icon: FaDatabase},
      { name: 'Operating Systems',            icon: FaServer  },
    ],
  },
  {
    category: 'Developer Tools',
    items: [
      { name: 'Git',            icon: SiGit           },
      { name: 'GitHub',         icon: SiGithub        },
      { name: 'Docker',         icon: SiDocker        },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'VS Code',        icon: TbBrandVscode   },
      { name: 'Postman',        icon: SiPostman       },
      { name: 'Linux',          icon: SiLinux         },
      { name: 'Vercel',         icon: SiVercel        },
    ],
  },
];

export const PROJECTS = [
  {
    id: 'nl-to-sql',
    fileName: 'nl_to_sql.py',
    title: 'Enterprise NL Interface for Databases',
    description:
      'A natural-language-to-SQL interface that lets non-technical users query relational databases in plain English, with guardrails for safe and accurate query generation.',
    features: [
      'Natural language → SQL translation using LLMs',
      'Automated query validation & safety guardrails',
      'AI-driven schema-aware query generation',
      'PostgreSQL + FastAPI backend',
      'Enterprise-ready, extensible architecture',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'LangChain', 'Ollama', 'LLMs'],
    github: `https://github.com/08-charan/nl-to-sql`,
    demo: '#',
    accent: 'violet',
    rating: 5,
    featured: true,
    highlight:
      'AI-driven database interfaces are transforming how non-technical teams access and query data.',
    coverGradient:
      'from-violet-600/30 via-purple-500/15 to-blue-600/20',
  },

  {
    id: 'code-reviewer',
    fileName: 'code_reviewer.py',
    title: 'AI Code Reviewer',
    description:
      'An intelligent developer tool that reviews source code, flags bugs, explains errors, and suggests optimizations using LLM-based analysis.',
    features: [
      'Upload & review source code files',
      'Automatic bug detection & explanation',
      'AI-powered optimization suggestions',
      'AST-aware static analysis',
      'Compile / runtime error insights',
    ],
    tech: ['Python', 'LLMs', 'AST Parsing', 'Flask', 'AI APIs'],
    github: `https://github.com/08-charan/ai-code-reviewer`,
    demo: '#',
    accent: 'electric',
    rating: 5,
    highlight:
      'AI developer tools are one of the fastest-growing categories in software engineering.',
    coverGradient:
      'from-blue-600/30 via-cyan-500/15 to-indigo-600/20',
  },

  {
    id: 'ride-sharing',
    fileName: 'ride_sharing.tsx',
    title: 'Ride Sharing & Carpooling System',
    description:
      'A comprehensive full-stack ride-sharing web application with React frontend, Node.js backend, and MySQL database covering authentication, booking flows, and ride management.',
    features: [
      'User authentication & verification',
      'Ride booking and management',
      'Secure user management',
      'Relational database integration',
      'Fully responsive UI',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    github: `https://github.com/08-charan/ride-sharing-carpooling`,
    demo: '#',
    accent: 'electric',
    rating: 0,
    coverGradient:
      'from-green-600/25 via-emerald-500/15 to-blue-600/20',
  },

  {
    id: 'excuse-generator',
    fileName: 'excuse_generator.py',
    title: 'AI Intelligent Excuse Generator',
    description:
      'An AI-powered web application that generates context-aware and professionally worded excuses with multilingual GPT-based output.',
    features: [
      'AI-generated context-aware excuses',
      'Multilingual language support',
      'Smart context generation',
      'Professional response formatting',
      'Web-based interactive interface',
    ],
    tech: ['Python', 'Flask', 'OpenAI API', 'HTML', 'CSS'],
    github: `https://github.com/08-charan/ai-excuse-generator`,
    demo: '#',
    accent: 'violet',
    rating: 0,
    coverGradient:
      'from-orange-600/25 via-pink-500/15 to-violet-600/20',
  },

  {
    id: 'resume-shortlisting',
    fileName: 'resume_ranker.py',
    title: 'AI Resume Shortlisting System',
    description:
      'An AI-powered recruitment platform that parses resumes, extracts candidate information, and ranks applicants against job descriptions using NLP and LLM-based analysis.',
    features: [
      'Automated resume parsing',
      'Candidate information extraction',
      'AI-powered candidate ranking',
      'Job description matching',
      'REST API and database integration',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'NLP', 'LLMs'],
    github: 'https://github.com/08-charan/ai-resume-shortlisting',
    demo: '#',
    accent: 'violet',
    rating: 4,
    highlight:
      'AI-assisted recruitment can help automate candidate screening and job-description matching.',
    coverGradient:
      'from-fuchsia-600/25 via-purple-500/15 to-blue-600/20',
  },

  {
    id: 'course-management',
    fileName: 'course_management.sql',
    title: 'Online Course Management System',
    description:
      'A database-driven course management platform designed to manage students, courses, enrollments, and academic information through a structured relational database system.',
    features: [
      'Student and course management',
      'Course enrollment workflows',
      'Relational database design',
      'Structured SQL queries',
      'Database-backed application architecture',
    ],
    tech: ['SQL', 'PostgreSQL', 'React', 'FastAPI'],
    github: '#',
    demo: '#',
    accent: 'electric',
    rating: 4,
    highlight:
      'A structured relational system for managing core academic and course information.',
    coverGradient:
      'from-cyan-600/25 via-blue-500/15 to-indigo-600/20',
  },
];
export const ACHIEVEMENTS = [
  { icon: FaMedal,    label: 'JEE Advanced 2023', prefix: 'AIR ',  number: 333, detail: '2023 JEE ADV'  },
  { icon: SiCodeforces,label:'Codeforces',         prefix: '',     number: 1108, detail: 'Peak rating'           },
  { icon: FaMusic,    label: 'General Championship',staticValue: 'Silver', detail: 'Choreography, 2023–2024' },
];

export const EDUCATION = [
  {
    year: '2023 – 2028',
    institute: 'Indian Institute of Technology Kharagpur',
    program: 'B.Tech + M.Tech (Dual Degree) in Computer Science and Engineering',
    note: 'Expected Graduation: 2028',
  },
];

export const TIMELINE = [
  { year: '2023', event: 'Joined IIT Kharagpur',   desc: 'Started B.Tech + M.Tech (Dual Degree) in Computer Science and Engineering', type: 'education'   },
  { year: '2023', event: 'NSS Unit-6 Leadership',  desc: 'Community service, social initiatives, and group leadership', type: 'experience' },
  { year: '2024', event: 'Cricket Secretary',       desc: 'Led sports events for 300+ students at Nehru Hall',           type: 'experience' },
  { year: '2024', event: 'eSports Event Head',      desc: 'Organized campus-wide gaming tournaments and events',         type: 'experience' },
  { year: '2025', event: 'AI Projects Sprint',      desc: 'Built AI Code Reviewer and AI Excuse Generator',             type: 'project'    },
  { year: 'Ongoing', event: 'A to Z DSA Course', desc: 'Completed the A to Z Data Structures and Algorithms course through AlgoZenith, strengthening problem-solving and algorithmic skills.', type: 'education',},
  { year: '2026', event: 'Enterprise NL Interface', desc: 'Natural-language-to-SQL system using LLMs and FastAPI',       type: 'project'    },
  { year: '2027', event: 'Targeting SDE Roles',     desc: 'Open to Software Engineering internships from May 2027',      type: 'goal'       },
];

export const EXPERIENCE = [
  {
    icon: FaBrain,
    role: 'Artificial Intelligence Intern',
    org: 'Deevelo X × LaunchEd Global',
    period: 'May 2025 – Jun 2025',
    description:
      'Completed an Artificial Intelligence internship focused on AI application development, Large Language Models (LLMs), prompt engineering, Python, and modern software engineering workflows.',
  },
  {
    icon: FaTrophy,
    role: 'Secretary — Cricket',
    org: 'Nehru Hall, IIT Kharagpur',
    period: '2024 – 2025',
    description: 'Led sports events involving 300+ students, coordinating tournament scheduling, team management, logistics, and inter-hall competition planning.',
  },
  {
    icon: FaGamepad,
    role: 'Event Head — eSports',
    org: 'IIT Kharagpur',
    period: '2024 – 2025',
    description: 'Organized and managed campus-wide gaming events and tournaments, overseeing participant registrations, bracket management, and live event execution.',
  },
  {
    icon: FaUsers,
    role: 'Associate Member — Telugu Cultural Association',
    org: 'IIT Kharagpur',
    period: '2023 – 2025',
    description: 'Contributed to cultural events and initiatives promoting regional culture among 400+ Telugu-speaking students at IIT Kharagpur.',
  },
  {
    icon: FaHandsHelping,
    role: 'Leadership Activities — NSS Unit-6',
    org: 'IIT Kharagpur',
    period: '2023 – 2024',
    description: 'Volunteered in community service programs, coordinating team activities and leading group participation in NSS social initiatives.',
  },
  {
    icon: FaHandsHelping,
    role: 'Volunteer — Kshitij',
    org: 'Annual Techno-Management Fest, IIT Kharagpur',
    period: '2023 – 2024',
    description:
      'Contributed as a volunteer to the organization and execution of Kshitij events.',
  },
];

export const CERTIFICATIONS = [
  {
    name: 'Artificial Intelligence Internship',
    issuer: 'Deevelo X × LaunchEd Global',
    year: '2025',
    url: '/certificates/ai-internship-certificate.pdf',
  },
];

export const CURRENTLY_BUILDING = [
  'Enterprise Natural Language Interface for Databases',
  'AI Resume Shortlisting System',
  'AI Code Reviewer — v2 with multi-language support',
  'Learning System Design & Distributed Systems',
];

export const CODING_PROFILES = [
  { name: 'GitHub',     icon: FaGithub,     url: SOCIALS.github.url,     stat: 'Repos & contributions'  },
  { name: 'LeetCode',   icon: SiLeetcode,   url: SOCIALS.leetcode.url,   stat: 'Problem solving'         },
  { name: 'Codeforces', icon: SiCodeforces, url: SOCIALS.codeforces.url, stat: 'Peak rating 1108'        },
  { name: 'LinkedIn',   icon: FaLinkedin,   url: SOCIALS.linkedin.url,   stat: 'Professional network'    },
];
