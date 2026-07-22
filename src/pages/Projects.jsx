import { motion } from "framer-motion";

import {
  Github,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Layers3,
} from "lucide-react";

import { ScrollAnimation } from "@/components/ScrollAnimation";

// Project Images
import project1 from "@/assets/projects_img/project-1.png";
import project2 from "@/assets/projects_img/project-2.png";
import project3 from "@/assets/projects_img/project-3.png";
import project4 from "@/assets/projects_img/project-4.png";
import project5 from "@/assets/projects_img/project-5.png";


const projects = [

{
  title: "Affint AI – Powerful AI Workspace",

  description:
    "A modern AI-powered workspace built with Next.js that enables users to create, edit, and collaborate on AI-generated documents, spreadsheets, and presentations with seamless integrations across popular productivity platforms.",

  image: project5,

  github: "https://github.com/Ssharma0355/ai-office-work.git",

  live: "https://affint.ai/",

  tags: [
    "Next.js",
    "React.js",
    "FastAPI",
    "MongoDB",
    "Tailwind CSS",
    "TypeScript",
    "JWT Authentication",
    "AI Integration",
    "Slack",
    "GitHub",
    "Google Workspace"
  ],

  features: [
    "Built a full-stack AI workspace with Next.js, enabling users to create, edit, and collaborate on AI-powered documents, spreadsheets, and presentations.",

    "Integrated AI agents to automate content generation, editing, summarization, and workflow assistance across multiple productivity tools.",

    "Connected with Slack, GitHub, Google Workspace, and other third-party services through webhooks for real-time notifications and workflow automation.",

    "Implemented secure JWT authentication, protected routes, and scalable FastAPI backend APIs for AI-powered features.",

    "Designed a responsive, high-performance interface using Tailwind CSS with optimized rendering, lazy loading, and reusable component architecture."
  ],
},
  {
    title: "Job & Networking Platform",

    description:
      "A modern AI-powered job and networking platform inspired by swipe-based matching systems, enabling candidates and recruiters to connect seamlessly through real-time interactions and smart engagement workflows.",

    image: project4,

    github: "https://github.com/Ssharma0355/job-networking-platform",

    live: "https://job-networking-platform.vercel.app/",

    tags: [
      "React.js",
      "FastAPI",
      "MongoDB",
      "Tailwind CSS",
      "JWT Authentication",
      "REST APIs",
      "Framer Motion",
    ],

    features: [
      "Designed and developed a swipe-based matching experience inspired by Tinder-style interactions for recruiters and job seekers.",

      "Implemented infinite scrolling, lazy image loading, and debounced searching to improve scalability and frontend performance.",

      "Built reusable card systems and optimized rendering performance for smoother mobile and desktop interactions.",

      "Integrated JWT-based authentication with protected routes and secure API communication.",

      "Created responsive UI layouts with Tailwind CSS and interactive transitions using Framer Motion.",
    ],
  },

  {
    title: "On Wheels — Cab & Moto Booking Platform",

    description:
      "A scalable ride-booking application supporting cab and moto services with real-time location tracking, online payments, booking workflows, and optimized server-side rendering.",

    image: project3,

    github: "https://github.com/Ssharma0355/taxi-motar-app",

    live: "https://taxi-motar-app-dada.vercel.app/",

    tags: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Mapbox API",
      "Tailwind CSS",
      "SSR",
    ],

    features: [
      "Developed a complete ride-booking workflow supporting cab and moto transportation services.",

      "Integrated Mapbox API for live location tracking, route visualization, and booking coordination.",

      "Implemented Stripe payment integration for secure online transactions and payment management.",

      "Optimized SEO and page performance using server-side rendering with Next.js.",

      "Built responsive booking interfaces and reusable UI systems for consistent user experience.",
    ],
  },

  {
    title: "AI Search with GPT",

    description:
      "An advanced AI-powered search and chat application integrating Large Language Models for contextual conversations, intelligent search workflows, and real-time content generation.",

    image: project2,

    github: "https://github.com/Ssharma0355/ai-chat-gpt",

    live: "https://ai-chat-gpt-three.vercel.app/",

    tags: [
      "React.js",
      "OpenAI API",
      "Node.js",
      "Tailwind CSS",
      "JWT",
      "AI/ML",
      "LLM Integration",
    ],

    features: [
      "Integrated GPT-based APIs to enable real-time AI conversations and intelligent query handling.",

      "Implemented secure authentication systems using JWT and protected application routes.",

      "Built dynamic search experiences with contextual AI responses and conversational workflows.",

      "Optimized frontend responsiveness and loading performance for seamless user interaction.",

      "Designed scalable frontend architecture using reusable React components and modular state management.",
    ],
  },

  {
    title: "When Sachin Explains",

    description:
      "A modern personal branding and content creator portfolio platform showcasing educational content, social presence, and creator-focused engagement experiences.",

    image: project1,

    github: "https://github.com/Ssharma0355/when-sachin-explains",

    live: "https://when-sachin-explains.vercel.app/",

    tags: [
      "React.js",
      "Tailwind CSS",
      "YouTube API",
      "Instagram API",
      "Responsive Design",
      "Portfolio",
    ],

    features: [
      "Built a creator-focused portfolio platform showcasing educational and technical content.",

      "Integrated YouTube and Instagram APIs for dynamic social media content rendering.",

      "Designed reusable UI sections and responsive layouts optimized for all screen sizes.",

      "Implemented modern animations and smooth interactions for enhanced user engagement.",

      "Focused on clean personal branding design with optimized frontend performance.",
    ],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Heading */}
      <ScrollAnimation>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-5">
            <Sparkles className="w-4 h-4 text-gray-300" />

            <span className="text-sm text-gray-300">
              Selected Work & Engineering Projects
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black gradient-text">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg leading-relaxed">
            A collection of scalable SaaS applications, AI-powered products,
            booking systems, and modern frontend engineering projects focused on
            performance, usability, and production-ready architecture.
          </p>
        </motion.div>
      </ScrollAnimation>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ScrollAnimation key={project.title}>
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md hover:bg-white/10 transition-all duration-500 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                {/* Title */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold leading-tight">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                      <Layers3 className="w-4 h-4" />

                      <span>Production Ready Project</span>
                    </div>
                  </div>

                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-7">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-4 mb-7">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-white/50 mt-2 flex-shrink-0" />

                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300 hover:bg-white/20 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-300 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    View Source Code
                  </motion.a>

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition-all duration-300 text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Preview
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;