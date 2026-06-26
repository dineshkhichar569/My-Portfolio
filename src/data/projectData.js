const projectData = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React, Tailwind, and Framer Motion.",
    image: "/projects/projects_image/Portfolio.webp",
    video: "",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "CSS", "Responsive"],
    liveLink: "https://dineshportfolios.site",
    githubLink: "https://github.com/dineshkhichar569/My-Portfolio.git",
    cssPerBox: "top-[130px]",

    tagline:
      "A modern developer portfolio focused on performance and storytelling.",
    role: "Solo Developer",
    timeline: "Ongoing · since 2025",
    client: { type: "Personal" },
    status: "Live",
    category: "Personal Portfolio",
    year: "2026",

    metrics: [
      { value: "95+", label: "Lighthouse score" },
      { value: "8", label: "Projects showcased" },
      { value: "100%", label: "Responsive" },
    ],

    problem:
      "I needed a single place that presents my projects, skills, and testimonials to recruiters and clients — without sacrificing load speed or feeling like a generic template.",
    solution:
      "Built a component-driven React app with Tailwind for consistent styling and Framer Motion for restrained, purposeful animation. Every section is reusable and the media is optimized so the page stays fast despite the visual richness.",

    features: [
      "Interactive project showcase",
      "Smooth Framer Motion animations",
      "Responsive design for all devices",
      "Contact form with EmailJS",
    ],

    highlights: [
      {
        title: "Reusable component architecture",
        detail:
          "Cards, sections, and layout primitives are abstracted so new projects and pages drop in with minimal code.",
      },
      {
        title: "Performance-first media",
        detail:
          "WebP images, lazy loading, and scoped animations keep the page light without losing the polished feel.",
      },
    ],

    outcomes: [
      "Single hub used directly in job and freelance applications.",
      "Fast load times even with video and motion-heavy sections.",
    ],
    learnings: [
      "Balancing motion design with performance and accessibility.",
      "Structuring a scalable component system in React.",
    ],

    techGroups: {
      Frontend: ["React", "Tailwind CSS", "Framer Motion"],
      Styling: ["CSS", "Responsive Design"],
      Tools: ["EmailJS", "Vite"],
      Deployment: ["Vercel"],
    },

    gallery: [],
  },
  {
    title: "Jobrix",
    description:
      "A full-stack internal Applicant Tracking System (ATS) for managing the entire recruitment workflow.",
    image: "/projects/projects_image/jobrix.png",
    video: "",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    // liveLink: "",
    githubLink: "https://github.com/dineshkhichar569/jobrix-company-module.git",
    cssPerBox: "top-[190px]",

    tagline:
      "A role-based internal ATS that runs a company's entire hiring pipeline from one dashboard.",
    role: "Full Stack Developer",
    timeline: "In Progress",
    client: { type: "Personal" },
    status: "In Progress",
    category: "Full-Stack Web App",
    year: "2026",

    metrics: [
      { value: "3", label: "User roles" },
      { value: "7", label: "Pipeline stages" },
      { value: "MERN", label: "Full stack" },
    ],

    problem:
      "Recruitment teams juggle candidates across spreadsheets, email, and job boards with no single source of truth, making it hard to track who's where in the hiring process. Jobrix centralizes the entire workflow for Admins, HR, and Recruiters in one internal system — not a public job portal.",
    solution:
      "Built a role-based MERN application where each role gets its own dashboard and permissions. Admins manage teams and jobs, HR runs recruitment and pipelines, and Recruiters source and track candidates — all backed by JWT auth and a structured candidate schema that moves people through a defined hiring pipeline.",

    features: [
      "Role-based access for Admin, HR, and Recruiter",
      "JWT authentication with login and register",
      "Team member management and role assignment",
      "Job creation and management",
      "Candidate tracking through a multi-stage pipeline",
      "Interview scheduling and feedback (planned)",
    ],

    highlights: [
      {
        title: "Role-based dashboards & permissions",
        detail:
          "Admin, HR, and Recruiter each get a tailored sidebar and access level, enforced from auth down to the API.",
      },
      {
        title: "JWT authentication",
        detail:
          "Secure login/register flow with token-based sessions protecting role-specific routes.",
      },
      {
        title: "Structured candidate pipeline",
        detail:
          "Candidates carry status, source, and job links, moving through Applied → Screening → Shortlisted → Interview → Selected/Rejected.",
      },
    ],

    outcomes: [
      "Centralized hiring operations into one internal dashboard instead of scattered tools.",
      "Clear, permissioned workflows for every role in the recruitment process.",
    ],
    learnings: [
      "Designing role-based access control across frontend and backend.",
      "Modeling a real-world recruitment workflow as a structured data pipeline.",
    ],

    techGroups: {
      Frontend: ["React", "Tailwind CSS", "React Router", "Axios"],
      Backend: ["Node.js", "Express.js"],
      Database: ["MongoDB", "Mongoose"],
      Auth: ["JWT"],
      Planned: ["OpenAI API", "Cloudinary", "Email notifications"],
    },

    gallery: [],
  },

  {
    title: "Laundry Wallah",
    description:
      "A full-stack laundry service web application built to simplify booking, service management, and customer experience.",
    image: "/projects/projects_image/Laundry_wallah.webp",
    video: "",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://laundry-two-omega.vercel.app/",
    githubLink: "https://github.com/dineshkhichar569/Laundry.git",
    cssPerBox: "top-[250px]",

    tagline: "A complete laundry booking platform from order to delivery.",
    role: "Full Stack Developer",
    timeline: "4 weeks",
    client: { type: "Personal" },
    status: "Live",
    category: "Full-Stack Web App",
    year: "2025",

    metrics: [
      { value: "MERN", label: "Full stack" },
      { value: "JWT", label: "Secure auth" },
      { value: "CRUD", label: "Admin panel" },
    ],

    problem:
      "Local laundry services rely on phone calls and manual tracking, which leads to missed orders and no visibility for customers on order status.",
    solution:
      "Built an end-to-end MERN application where customers book and track orders in real time, and admins manage the full order lifecycle from a dedicated dashboard backed by a REST API.",

    features: [
      "Online order booking",
      "Admin dashboard",
      "Real-time order status",
      "Secure backend with MongoDB",
    ],

    highlights: [
      {
        title: "REST API with Express",
        detail:
          "Designed clean, resource-based endpoints for orders, services, and users with proper validation.",
      },
      {
        title: "Full CRUD with MongoDB",
        detail:
          "Implemented complete create/read/update/delete flows with Mongoose schemas and an admin control panel.",
      },
    ],

    outcomes: [
      "Centralized booking replaced manual phone-based ordering.",
      "Admins gained full visibility into every order's lifecycle.",
    ],
    learnings: [
      "Architecting a full MERN app from schema to deployment.",
      "Handling authentication and protected admin routes.",
    ],

    techGroups: {
      Frontend: ["React", "Tailwind CSS"],
      Backend: ["Node.js", "Express.js"],
      Database: ["MongoDB", "Mongoose"],
      Auth: ["JWT"],
      Deployment: ["Vercel"],
    },

    gallery: [],
  },

  {
    title: "Colors Diamond Website",
    description: "A premium jewelry e-commerce website built with Shopify.",
    image: "/projects/projects_image/ColorsDiamond.webp",
    video: "/projects/projects_videos/ColorsDiamond.mp4",
    techStack: ["Shopify", "HTML", "CSS", "JavaScript", "Responsive Design"],
    liveLink: "https://colors-diamond.myshopify.com/",
    cssPerBox: "top-[310px]",

    tagline: "Luxury Shopify storefront crafted for premium jewelry brands.",
    role: "Shopify Frontend Developer",
    timeline: "5 weeks",
    client: { type: "Client", platform: "Upwork" },
    status: "Live",
    category: "Shopify E-Commerce",
    year: "2025",

    metrics: [
      { value: "Liquid", label: "Custom sections" },
      { value: "100%", label: "Mobile ready" },
      { value: "PDP", label: "Custom build" },
    ],

    problem:
      "A premium jewelry brand needed a storefront that conveyed luxury and presented products with detail-rich pages, which the default Shopify theme couldn't deliver.",
    solution:
      "Built custom Shopify Liquid sections including a tailored product page, elegant hero banners, and refined responsive layouts that elevate the brand's premium positioning.",

    features: [
      "Custom Shopify sections",
      "Responsive product pages",
      "Elegant hero banners",
      "Optimized shopping experience",
    ],

    highlights: [
      {
        title: "Custom Liquid components",
        detail:
          "Built bespoke product and content sections beyond the default theme, editable from the Shopify Theme Editor.",
      },
      {
        title: "Premium responsive UI",
        detail:
          "Focused on a luxury aesthetic that holds up cleanly across desktop, tablet, and mobile.",
      },
    ],

    outcomes: [
      "Storefront presentation aligned with a premium brand identity.",
      "Merchant-editable sections reduced dependence on a developer.",
    ],
    learnings: [
      "Deep Shopify Liquid templating and theme architecture.",
      "Designing for a luxury brand without clutter.",
    ],

    techGroups: {
      Platform: ["Shopify", "Liquid"],
      Frontend: ["HTML", "CSS", "JavaScript"],
      Design: ["Responsive Design", "Custom Sections"],
    },

    gallery: [],
  },

  {
    title: "Tarecom Website",
    description: "A modern e-commerce platform built using Shopify.",
    image: "/projects/projects_image/Tarecom.webp",
    video: "/projects/projects_videos/Tarecom.mp4",
    techStack: ["Shopify", "HTML", "CSS", "JavaScript", "Responsive Design"],
    // liveLink: "https://tarecom.com/",
    cssPerBox: "top-[310px]",

    tagline:
      "Custom Shopify storefront tailored for a seamless shopping experience.",
    role: "Shopify Frontend Developer",
    timeline: "3 weeks",
    client: { type: "Client", platform: "Local" },
    status: "Offline",
    category: "Shopify E-Commerce",
    year: "2025",

    metrics: [
      { value: "Custom", label: "Landing pages" },
      { value: "Fast", label: "Optimized load" },
      { value: "100%", label: "Responsive" },
    ],

    problem:
      "The default Shopify theme limited the brand's ability to stand out and guide customers smoothly from landing to checkout.",
    solution:
      "Extended the theme with custom UI components, reusable sections, and responsive collection layouts that improved navigation and overall shopping flow.",

    features: [
      "Custom landing pages",
      "Responsive product collections",
      "Optimized navigation",
      "Performance-focused design",
    ],

    highlights: [
      {
        title: "Reusable Shopify sections",
        detail:
          "Developed modular sections the merchant can rearrange and reuse across pages.",
      },
      {
        title: "Mobile experience overhaul",
        detail:
          "Significantly improved the mobile shopping flow with responsive layouts and cleaner navigation.",
      },
    ],

    outcomes: [
      "Smoother browse-to-checkout journey for customers.",
      "More flexible storefront the merchant can manage independently.",
    ],
    learnings: [
      "Customizing existing Shopify themes without breaking updates.",
      "Building modular, merchant-friendly sections.",
    ],

    techGroups: {
      Platform: ["Shopify", "Liquid"],
      Frontend: ["HTML", "CSS", "JavaScript"],
      Design: ["Responsive Design", "Custom Sections"],
    },

    gallery: [],
  },

  {
    title: "Antriya Talking Book Website",
    description:
      "A playful and responsive product landing page for kids' interactive talking books.",
    image: "/projects/projects_image/Antriya.webp",
    video: "/projects/projects_videos/Antriya.mp4",
    techStack: ["Shopify", "HTML", "CSS", "JavaScript", "Responsive Design"],
    liveLink: "https://antriya-toy.myshopify.com/",
    cssPerBox: "top-[270px]",

    tagline:
      "An engaging Shopify landing page designed for children's educational toys.",
    role: "Shopify Frontend Developer",
    timeline: "2 weeks",
    client: { type: "Client", platform: "Upwork" },
    status: "Live",
    category: "Shopify Landing Page",
    year: "2025",

    metrics: [
      { value: "Playful", label: "Design system" },
      { value: "Kids", label: "Target audience" },
      { value: "100%", label: "Responsive" },
    ],

    problem:
      "A children's educational toy brand needed a landing page that felt playful and engaging for parents and kids while still presenting products clearly.",
    solution:
      "Designed a colorful, animated Shopify landing page with reusable content sections, balancing a fun visual identity against clarity and usability.",

    features: [
      "Interactive landing page",
      "Playful animations",
      "Responsive layouts",
      "Optimized product showcase",
    ],

    highlights: [
      {
        title: "Playful yet usable design",
        detail:
          "Kept the interface colorful and fun without compromising readability or conversion focus.",
      },
      {
        title: "Reusable content sections",
        detail:
          "Built modular Shopify sections the brand can reuse for future product launches.",
      },
    ],

    outcomes: [
      "Distinct, child-friendly brand presence on the storefront.",
      "Reusable sections sped up future page creation.",
    ],
    learnings: [
      "Designing for a young audience while keeping UX clean.",
      "Working color-heavy designs into a responsive system.",
    ],

    techGroups: {
      Platform: ["Shopify", "Liquid"],
      Frontend: ["HTML", "CSS", "JavaScript"],
      Design: ["Responsive Design", "Animations"],
    },

    gallery: [],
  },

  {
    title: "Knowledge-Based Course Advisor",
    description:
      "AI-powered academic advisor using Horn Clauses for intelligent course recommendations.",
    image: "/projects/projects_image/Backlog-Based.webp",
    video: "",
    techStack: [
      "React",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "Horn Clauses",
      "REST API",
      "Vercel",
      "Render",
    ],
    liveLink: "https://knowledge-based-course-advisor.vercel.app/",
    githubLink:
      "https://github.com/dineshkhichar569/knowledge-based-course-advisor.git",
    cssPerBox: "top-[310px]",

    tagline:
      "Rule-based AI that recommends eligible courses using logical inference.",
    role: "Full Stack Developer",
    timeline: "3 weeks",
    client: { type: "Personal" },
    status: "Live",
    category: "AI / Full-Stack",
    year: "2026",

    metrics: [
      { value: "Horn", label: "Clause engine" },
      { value: "FastAPI", label: "Python backend" },
      { value: "Real-time", label: "Inference" },
    ],

    problem:
      "Students with backlogs often don't know which courses they're actually eligible for, because prerequisite rules are scattered and hard to reason about manually.",
    solution:
      "Built an inference engine that reasons over course prerequisites using Horn Clauses, exposed through a FastAPI backend and consumed by a React frontend for instant eligibility results.",

    features: [
      "Knowledge-based inference engine",
      "Course eligibility prediction",
      "REST API integration",
      "Interactive React interface",
    ],

    highlights: [
      {
        title: "Logical reasoning with Horn Clauses",
        detail:
          "Encoded prerequisite rules as Horn Clauses and built an engine that infers eligibility from a student's completed courses.",
      },
      {
        title: "Decoupled React + FastAPI",
        detail:
          "Connected a React frontend to a Python FastAPI backend over REST for real-time inference results.",
      },
    ],

    outcomes: [
      "Turned a confusing manual process into instant eligibility answers.",
      "Demonstrated applied symbolic AI in a real student workflow.",
    ],
    learnings: [
      "Implementing rule-based inference and symbolic reasoning.",
      "Wiring a Python backend to a React frontend cleanly.",
    ],

    techGroups: {
      Frontend: ["React", "Tailwind CSS"],
      Backend: ["FastAPI", "Python"],
      Logic: ["Horn Clauses", "REST API"],
      Deployment: ["Vercel", "Render"],
    },

    gallery: [],
  },

  {
    title: "MentorShip Website",
    description:
      "Built for growth, guidance, and simplicity at every step of your learning journey.",
    image: "/projects/projects_image/MentorShip.webp",
    video: "/projects/projects_videos/Mentor.mp4",
    techStack: ["HTML", "CSS", "Vanilla JavaScript", "Responsive"],
    liveLink: "https://lively-mooncake-cd83f4.netlify.app/",
    githubLink: "https://github.com/dineshkhichar569/MentorShip",
    cssPerBox: "top-[360px]",

    tagline:
      "A modern mentorship platform landing page focused on user engagement.",
    role: "Frontend Developer",
    timeline: "1 week",
    client: { type: "Personal" },
    status: "Live",
    category: "Frontend Landing Page",
    year: "2025",

    metrics: [
      { value: "Vanilla", label: "No frameworks" },
      { value: "Smooth", label: "Scroll UX" },
      { value: "100%", label: "Responsive" },
    ],

    problem:
      "A mentorship program needed a clean, engaging landing page that communicates its value and guides visitors toward signing up.",
    solution:
      "Built a fully responsive landing page in vanilla JavaScript with smooth-scrolling sections and an interactive UI, proving strong fundamentals without relying on a framework.",

    features: [
      "Responsive design",
      "Modern landing page",
      "Interactive UI",
      "Smooth scrolling sections",
    ],

    highlights: [
      {
        title: "Built with vanilla JavaScript",
        detail:
          "Implemented all interactivity without a framework, reinforcing core DOM and JS fundamentals.",
      },
      {
        title: "Clean, responsive layout",
        detail:
          "Focused on a tidy structure and smooth section transitions across all screen sizes.",
      },
    ],

    outcomes: [
      "Clear, conversion-oriented page for the mentorship program.",
      "Demonstrated strong fundamentals without framework reliance.",
    ],
    learnings: [
      "Building interactive UIs in plain JavaScript.",
      "Crafting smooth scroll and layout without a library.",
    ],

    techGroups: {
      Frontend: ["HTML", "CSS", "Vanilla JavaScript"],
      Design: ["Responsive Design"],
      Deployment: ["Netlify"],
    },

    gallery: [],
  },

  {
    title: "NFT Selling Website",
    description:
      "Designed for creators and crypto enthusiasts to explore and showcase NFTs.",
    image: "/projects/projects_image/NFT.webp",
    video: "/projects/projects_videos/NFT.mp4",
    techStack: ["HTML", "CSS", "Vanilla JavaScript", "Responsive"],
    liveLink: "https://nft-sellingmarket.netlify.app/",
    githubLink: "https://github.com/dineshkhichar569/NFT-SellingMarket",
    cssPerBox: "top-[400px]",

    tagline: "A futuristic NFT marketplace landing page with modern UI.",
    role: "Frontend Developer",
    timeline: "1 week",
    client: { type: "Personal" },
    status: "Live",
    category: "Frontend Landing Page",
    year: "2025",

    metrics: [
      { value: "Web3", label: "Design trend" },
      { value: "Animated", label: "Sections" },
      { value: "100%", label: "Responsive" },
    ],

    problem:
      "Web3 marketplaces have a distinct visual language, and the goal was to capture that modern, futuristic aesthetic in an engaging landing page.",
    solution:
      "Built a visually striking NFT marketplace interface with gradient-driven card layouts and animated sections, staying fully responsive across devices.",

    features: [
      "Modern NFT marketplace UI",
      "Responsive layouts",
      "Animated sections",
      "Clean product showcase",
    ],

    highlights: [
      {
        title: "Gradient-driven Web3 UI",
        detail:
          "Created appealing gradients and card layouts inspired by modern Web3 design trends.",
      },
      {
        title: "Responsive across devices",
        detail:
          "Maintained consistent behavior and visual quality from mobile to desktop.",
      },
    ],

    outcomes: [
      "Captured a modern Web3 aesthetic in a polished landing page.",
      "Reinforced strong CSS and layout skills.",
    ],
    learnings: [
      "Designing futuristic, gradient-heavy interfaces.",
      "Keeping visually complex layouts fully responsive.",
    ],

    techGroups: {
      Frontend: ["HTML", "CSS", "Vanilla JavaScript"],
      Design: ["Responsive Design", "Animations"],
      Deployment: ["Netlify"],
    },

    gallery: [],
  },
];

export default projectData;
