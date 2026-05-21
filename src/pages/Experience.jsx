import { motion } from "framer-motion";

import {
  Briefcase,
  MapPin,
  Building2,
  Calendar,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { ScrollAnimation } from "@/components/ScrollAnimation";

// Company Images
import slideooImg from "@/assets/experience/slideoo_page.jpg";
import myclnqImg from "@/assets/experience/myclnq_page.jpg";

const experiences = [
  {
    title: "Frontend Developer",

    company: "Slideoo AI",

    location: "Bengaluru, India",

    period: "Jun 2025 - Present",

    type: "Full Time",

    image: slideooImg,

    tech: [
      "Next.js",
      "React.js",
      "Zustand",
      "Tailwind CSS",
      "FastAPI",
      "TypeScript",
    ],

    description: [
      "Built scalable frontend modules using Next.js App Router and Zustand, improving rendering performance by 30% through optimized state subscriptions and store architecture.",

      "Converted Figma designs into reusable UI systems, improving development consistency and accelerating feature delivery speed.",

      "Implemented API caching strategies integrated with FastAPI-backed services to reduce redundant network requests and improve responsiveness during high user activity.",

      "Optimized application performance using dynamic imports and route-level code splitting for faster initial page loads and smoother UX.",
    ],
  },

  {
    title: "Frontend Developer",

    company: "MyCLNQ Health",

    location: "Remote, Singapore",

    period: "Nov 2023 - Jun 2025",

    type: "Full Time",

    image: myclnqImg,

    tech: [
      "React.js",
      "Redux Toolkit",
      "JWT Authentication",
      "REST APIs",
      "Material UI",
      "Node.js",
    ],

    description: [
      "Led migration of a legacy multi-page healthcare application into a modern React.js SPA, improving navigation and usability across patient workflows.",

      "Refactored Redux state management and optimized rendering logic, reducing average page load time by 200ms.",

      "Developed telemedicine and appointment booking modules serving 1,000+ monthly active users with zero critical production issues after deployment.",

      "Implemented JWT authentication, protected routes, token refresh handling, and role-based access control across provider and patient dashboards.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Heading */}
      <ScrollAnimation>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-5">
            <Sparkles className="w-4 h-4 text-gray-300" />

            <span className="text-sm text-gray-300">
              Professional Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black gradient-text flex items-center justify-center gap-3">
            <Briefcase className="w-10 h-10" />
            Experience
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
            Building scalable SaaS products, AI platforms, and healthcare
            applications with modern frontend technologies and performant UI
            systems.
          </p>
        </motion.div>
      </ScrollAnimation>

      {/* Experience Cards */}
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <ScrollAnimation key={exp.company}>
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md hover:bg-white/10 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-[1fr,360px]">
                {/* Content */}
                <div className="p-7 md:p-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-8">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                          <Building2 className="w-7 h-7" />
                        </div>

                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold">
                            {exp.title}
                          </h3>

                          <p className="text-lg text-gray-400 mt-1">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm md:text-base">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />

                          <span>{exp.location}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />

                          <span>{exp.period}</span>
                        </div>

                        <span className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/10">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-5">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 text-gray-300"
                      >
                        <ArrowRight className="w-5 h-5 mt-1 text-gray-400 flex-shrink-0" />

                        <span className="leading-relaxed text-sm md:text-base">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mt-8">
                    {exp.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ y: -2 }}
                        className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300 hover:bg-white/20 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative hidden lg:block overflow-hidden min-h-[420px]">
                  <div className="absolute inset-0">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                  </div>

                  {/* Floating Company Name */}
                  <div className="absolute bottom-6 left-6 z-10">
                    <div className="px-5 py-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">

                      <h4 className="text-xl font-bold">
                        {exp.company}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;