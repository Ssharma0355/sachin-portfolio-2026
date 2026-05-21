import { motion } from "framer-motion";
import {
  Youtube,
  Instagram,
  Twitter,
  Globe,
  PlayCircle,
  Eye,
  Users,
  Sparkles,
  ArrowUpRight,
  Calendar,
  BadgeCheck,
} from "lucide-react";

import { ScrollAnimation } from "@/components/ScrollAnimation";

// Banner / Creator Images
import creatorBanner from "@/assets/content_creator/creator-banner.jpg";
import creatorProfile from "@/assets/profile/profile.jpg";

const socialLinks = [
  {
    name: "YouTube",
    icon: <Youtube className="w-5 h-5" />,
    link: "https://www.youtube.com/@WhenSachinExplains",
    color:
      "hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-400",
  },

  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    link: "https://instagram.com/whensachinexplains",
    color:
      "hover:bg-pink-500/10 hover:border-pink-500/20 hover:text-pink-400",
  },

  {
    name: "X / Twitter",
    icon: <Twitter className="w-5 h-5" />,
    link: "https://x.com/whensachinexpln",
    color:
      "hover:bg-white/10 hover:border-white/20 hover:text-white",
  },

  {
    name: "Website",
    icon: <Globe className="w-5 h-5" />,
    link: "https://when-sachin-explains.vercel.app",
    color:
      "hover:bg-blue-500/10 hover:border-blue-500/20 hover:text-blue-400",
  },
];

const stats = [
  {
    label: "Subscribers",
    value: "76+",
    icon: <Users className="w-5 h-5" />,
  },

  {
    label: "Videos",
    value: "67+",
    icon: <PlayCircle className="w-5 h-5" />,
  },

  {
    label: "Views",
    value: "33K+",
    icon: <Eye className="w-5 h-5" />,
  },

  {
    label: "Started",
    value: "2026",
    icon: <Calendar className="w-5 h-5" />,
  },
];

const contentTopics = [
  "Corporate Culture",
  "Career Pressure",
  "Education System",
  "Internet Culture",
  "Social Issues",
  "Current Affairs",
  "Workplace Reality",
  "Society & Psychology",
  "Youth Problems",
  "Modern India",
];

const ContentCreator = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-white/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <ScrollAnimation>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
        >
          {/* Banner */}
          <div className="relative h-[300px] md:h-[420px] overflow-hidden">
            <img
              src={creatorBanner}
              alt="When Sachin Explains"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative px-6 md:px-12 pb-10">
            {/* Profile */}
            <div className="-mt-16 md:-mt-20 mb-6 relative z-10">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl overflow-hidden border-4 border-[#0a0a0a] bg-black shadow-2xl">
                <img
                  src={creatorProfile}
                  alt="Sachin Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Heading */}
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-5">
                <Sparkles className="w-4 h-4 text-gray-300" />

                <span className="text-sm text-gray-300">
                  Content Creator & Storyteller
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h1 className="text-4xl md:text-6xl font-black leading-tight">
                  When Sachin Explains
                </h1>

                <BadgeCheck className="w-8 h-8 text-blue-400" />
              </div>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                Sachin Explains breaks down the stories shaping modern India —
                honestly and simply.
              </p>

              <div className="space-y-5 text-gray-400 leading-relaxed text-sm md:text-base">
                <p>
                  From corporate culture and workplace reality to education,
                  social issues, career pressure, internet culture, and current
                  affairs, this channel goes beyond headlines to explain why
                  things really happen.
                </p>

                <p>
                  No hype. No fake motivation. Just clear explanations, deep
                  research, and real storytelling.
                </p>

                <p>
                  If you want to understand the systems around you, question
                  surface-level narratives, and see reality with clarity, this
                  platform is built for you.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-8">
                {contentTopics.map((topic) => (
                  <span
                    key={topic}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300 hover:bg-white/20 transition-all duration-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </ScrollAnimation>

      {/* Stats */}
      <ScrollAnimation>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-white/10">
                  {stat.icon}
                </div>

                <ArrowUpRight className="w-5 h-5 text-gray-500" />
              </div>

              <h3 className="text-3xl font-black mb-1">{stat.value}</h3>

              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </ScrollAnimation>

      {/* Social Links */}
      <ScrollAnimation>
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Connect Everywhere
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Follow the journey across YouTube, Instagram, X, and the official
              website for explainers, reels, insights, and weekly content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 ${social.color}`}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 rounded-xl bg-white/10">
                    {social.icon}
                  </div>

                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {social.name}
                </h3>

                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  Visit Platform
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Mission Section */}
      <ScrollAnimation>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-20 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md"
        >
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
              <Sparkles className="w-4 h-4" />

              <span className="text-sm text-gray-300">
                Mission & Vision
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
              Explaining India Beyond Headlines
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              The goal of When Sachin Explains is not just to create content —
              it is to help people think critically, understand systems deeply,
              and question narratives intelligently.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Every video is designed to simplify complex topics into stories
              people can actually understand, relate to, and reflect on.
            </p>
          </div>
        </motion.div>
      </ScrollAnimation>
    </div>
  );
};

export default ContentCreator;