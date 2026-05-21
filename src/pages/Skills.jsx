import {
  Code2,
  Layout,
  Server,
  Database,
  MessageSquare,
  Brain,
  Cloud,
  Terminal,
  Wrench,
  Users,
  Sparkles,
  ShieldCheck,
  Rocket,
} from "lucide-react";

import { motion } from "framer-motion";

import { ScrollAnimation } from "@/components/ScrollAnimation";

import {
  JavaScriptLogo,
  ReactLogo,
  TypeScriptLogo,
  NodeLogo,
  MongoDBLogo,
  VSCodeLogo,
  GitLogo,
  TailwindLogo,
  NextjsLogo,
  VercelLogo,
  PythonLogo,
  ReduxLogo,
  ExpressLogo,
  BcryptLogo,
  JWTLogo,
  AWSLogo,
  RenderLogo,
  PostmanLogo,
  BashLogo,
  WindowsLogo,
  UbuntuLogo,
  LinuxLogo,
} from "@/components/TechLogos";

const skills = [
  {
    category: "Programming Languages",

    icon: <Code2 className="w-6 h-6" />,

    items: [
      { name: "JavaScript", icon: <JavaScriptLogo /> },
      { name: "TypeScript", icon: <TypeScriptLogo /> },
      { name: "Python", icon: <PythonLogo /> },
      { name: "Bash", icon: <BashLogo /> },
    ],
  },

  {
    category: "Frontend Development",

    icon: <Layout className="w-6 h-6" />,

    items: [
      { name: "React.js", icon: <ReactLogo /> },
      { name: "Next.js", icon: <NextjsLogo /> },
      { name: "Tailwind CSS", icon: <TailwindLogo /> },
      { name: "Redux Toolkit", icon: <ReduxLogo /> },
    ],
  },

  {
    category: "Backend Development",

    icon: <Server className="w-6 h-6" />,

    items: [
      { name: "Node.js", icon: <NodeLogo /> },
      { name: "Express.js", icon: <ExpressLogo /> },
      { name: "JWT Auth", icon: <JWTLogo /> },
      { name: "Bcrypt", icon: <BcryptLogo /> },
    ],
  },

  {
    category: "Database & Cloud",

    icon: <Database className="w-6 h-6" />,

    items: [
      { name: "MongoDB", icon: <MongoDBLogo /> },
      { name: "AWS", icon: <AWSLogo /> },
      { name: "Cloudinary", icon: <Cloud className="w-4 h-4" /> },
      { name: "Render", icon: <RenderLogo /> },
    ],
  },

  {
    category: "DevOps & Deployment",

    icon: <Rocket className="w-6 h-6" />,

    items: [
      { name: "Git", icon: <GitLogo /> },
      { name: "GitHub", icon: <GitLogo /> },
      { name: "Vercel", icon: <VercelLogo /> },
      { name: "CI/CD", icon: <ShieldCheck className="w-4 h-4" /> },
    ],
  },

  {
    category: "Tools & Platforms",

    icon: <Wrench className="w-6 h-6" />,

    items: [
      { name: "VS Code", icon: <VSCodeLogo /> },
      { name: "Postman", icon: <PostmanLogo /> },
      { name: "MongoDB Compass", icon: <MongoDBLogo /> },
      { name: "GitHub Desktop", icon: <GitLogo /> },
    ],
  },

  {
    category: "Operating Systems",

    icon: <Terminal className="w-6 h-6" />,

    items: [
      { name: "Windows", icon: <WindowsLogo className="w-4 h-4" /> },
      { name: "Ubuntu", icon: <UbuntuLogo className="w-4 h-4" /> },
      { name: "Linux", icon: <LinuxLogo className="w-4 h-4" /> },
    ],
  },

  {
    category: "Soft Skills",

    icon: <Brain className="w-6 h-6" />,

    items: [
      { name: "Team Collaboration", icon: <Users className="w-4 h-4" /> },
      {
        name: "Communication",
        icon: <MessageSquare className="w-4 h-4" />,
      },
      { name: "Problem Solving", icon: <Brain className="w-4 h-4" /> },
      { name: "Debugging", icon: <Wrench className="w-4 h-4" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-white/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Heading */}
      <ScrollAnimation>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-5">
            <Sparkles className="w-4 h-4 text-gray-300" />

            <span className="text-sm text-gray-300">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-5">
            Skills & Technologies
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            A curated stack of modern technologies, tools, and engineering
            practices I use to build scalable, performant, and production-ready
            web applications.
          </p>
        </motion.div>
      </ScrollAnimation>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <ScrollAnimation key={skillGroup.category}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-md hover:bg-white/10 transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                  {skillGroup.icon}
                </div>

                <h3 className="text-xl font-semibold">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      {skill.icon}
                    </div>

                    <span className="text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Skills;