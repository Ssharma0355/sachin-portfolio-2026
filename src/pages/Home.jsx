import { VercelLogo } from "@/components/TechLogos";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  MessageCircle,
  Copy,
  Check,
  FileDown,
  User,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useState } from "react";
import useSWR from "swr";

const cvPdf = new URL(
  "../assets/files/cv_pdf/Sachin_Sharma_CV.pdf",
  import.meta.url
).href;
const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
};

const Home = () => {
  const [copied, setCopied] = useState(false);

  const email = "ssharma0355@gmail.com";
  const whatsappNumber = "919113704388";

  // GitHub API
  const { data: githubData } = useSWR(
    "https://api.github.com/users/Ssharma0355",
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
      shouldRetryOnError: true,
      errorRetryCount: 3,
    }
  );

  const githubRepos = githubData?.public_repos || 0;

  const formatRepoCount = (count) => {
    if (count < 5) return count.toString();
    return `${Math.floor(count / 5) * 5}+`;
  };

  const displayRepos = formatRepoCount(githubRepos);

  // Copy Email
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleEmailClick = (e) => {
    if (window.innerWidth <= 640) {
      window.location.href = `mailto:${email}`;
      e.preventDefault();
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="text-center relative z-10 max-w-5xl mx-auto">
        {/* Tag */}
       

        {/* Main Heading */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight mb-4"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sachin Sharma
        </motion.h1>

        {/* Sub Heading */}
        <motion.h2
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-6 tracking-tight"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          I design & build modern web experiences
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto px-2"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Software Developer specializing in scalable full-stack applications
          using React.js, Node.js, JavaScript, and modern frontend technologies.
          Passionate about building fast, responsive, and visually polished user
          experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          {/* Resume */}
          <Link
  to="/resume"
  className="px-7 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 shadow-lg hover:scale-105"
>
  <FileDown className="w-5 h-5" />
  View Resume
</Link>

          {/* About */}
          <Link
            to="/about"
            className="px-7 py-3 rounded-full bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 hover:scale-105"
          >
            <User className="w-5 h-5" />
            About Me
          </Link>
        </motion.div>

        {/* Email */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={handleEmailClick}
            className="group relative inline-flex items-center gap-2 py-2 pl-8 pr-4 hover:bg-white/5 rounded-full transition-all duration-300 cursor-copy sm:cursor-pointer"
            aria-label={`Email ${email}`}
          >
            <div className="absolute left-3 flex items-center">
              <div className="w-3 text-gray-500 group-hover:text-white transition-colors">
                <VercelLogo />
              </div>

              <span className="text-lg font-mono text-gray-500 ml-3 group-hover:text-white transition-colors">
                ~
              </span>
            </div>

            <span className="text-gray-400 group-hover:text-white transition-colors ml-5 text-sm sm:text-base">
              {email}
            </span>

            <div className="hidden sm:flex opacity-0 group-hover:opacity-100 transition-opacity">
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              )}
            </div>
          </button>
        </motion.div>

        {/* Social Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          {/* GitHub */}
          <motion.a
            href="https://github.com/Ssharma0355"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <Github className="w-7 h-7 text-gray-300 mx-auto mb-4" />

            <h3 className="text-2xl font-bold">{displayRepos}</h3>

            <p className="text-gray-400 text-sm mt-1">
              GitHub Projects
            </p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/sachin-sharma-sde/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <Linkedin className="w-7 h-7 text-gray-300 mx-auto mb-4" />

            <h3 className="text-2xl font-bold">4000+</h3>

            <p className="text-gray-400 text-sm mt-1">
              LinkedIn Followers
            </p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <MessageCircle className="w-7 h-7 text-gray-300 mx-auto mb-4" />

            <h3 className="text-2xl font-bold">24×7</h3>

            <p className="text-gray-400 text-sm mt-1">
              Available on WhatsApp
            </p>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;