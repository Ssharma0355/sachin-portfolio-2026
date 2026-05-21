import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code2,
  Briefcase,
  GraduationCap,
  Globe,
  Download,
} from "lucide-react";

import { ScrollAnimation } from "@/components/ScrollAnimation";

import profileImg from "@/assets/profile/profile.jpg";
import cvPdf from "@/assets/files/cv_pdf/Sachin_Sharma_CV.pdf";

const About = () => {
  const achievements = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "15+ Projects",
      description:
        "Built scalable full-stack and AI-powered web applications.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "3+ Internships",
      description:
        "Worked with startups and teams on real-world development projects.",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "AI MVP Development",
      description:
        "Delivered startup MVPs with modern technologies under tight deadlines.",
    },
  ];

  const interests = [
    "Web Development",
    "UI/UX Design",
    "Cloud Computing",
    "DevOps",
    "Open Source",
    "Artificial Intelligence",
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      {/* Heading */}
      <ScrollAnimation>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center"
        >
          About Me
        </motion.h2>
      </ScrollAnimation>

      {/* Main Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <ScrollAnimation>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src={profileImg}
                alt="Sachin Sharma"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-white/5 blur-3xl -z-10" />
          </motion.div>
        </ScrollAnimation>

        {/* Content */}
        <ScrollAnimation className="space-y-8">
          {/* Description */}
          <div className="space-y-5">
            <p className="text-gray-300 leading-relaxed text-lg">
              I’m a Full Stack Developer focused on building scalable,
              high-performance web applications using modern technologies like
              React, Node.js, and cloud-based tools.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              My journey into tech started during my college years, where I
              discovered my passion for problem-solving and creating impactful
              digital products. Since then, I’ve worked on multiple real-world
              projects, startup MVPs, and user-centric web experiences.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              I specialize in frontend development, responsive UI/UX design, and
              full-stack application architecture with a strong focus on
              performance, scalability, and clean code practices.
            </p>
          </div>

          {/* Quick Facts */}
          <ScrollAnimation>
            <div>
              <h3 className="text-2xl font-semibold mb-5 gradient-text">
                Quick Facts
              </h3>

              <ul className="space-y-4">
                {[
                  "Based in Bengaluru, Karnataka, India",
                  "B.Tech in Computer Science",
                  "CGPA: 7.64",
                  "Passionate about AI & Modern Web Technologies",
                ].map((fact) => (
                  <motion.li
                    key={fact}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-white rounded-full" />
                    <span>{fact}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          {/* Buttons */}
          <ScrollAnimation>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={cvPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>

              <Link
                to="/skills"
                className="px-6 py-3 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                My Skills
              </Link>
            </div>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>

      {/* Achievements */}
      <ScrollAnimation>
        <div className="mt-24">
          <h3 className="text-3xl font-semibold mb-10 gradient-text text-center">
            Achievements
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <ScrollAnimation key={achievement.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-white mb-5">
                    {achievement.icon}
                  </div>

                  <h4 className="text-xl font-semibold mb-3">
                    {achievement.title}
                  </h4>

                  <p className="text-gray-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Interests */}
      <ScrollAnimation>
        <div className="mt-24">
          <h3 className="text-3xl font-semibold mb-10 gradient-text text-center">
            Areas of Interest
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {interests.map((interest) => (
              <ScrollAnimation key={interest}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 p-5 rounded-2xl backdrop-blur-sm flex items-center gap-3 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <Globe className="w-5 h-5 text-gray-400" />

                  <span className="text-gray-300 font-medium">
                    {interest}
                  </span>
                </motion.div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;