import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
  Clock,
  Send,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { useState } from "react";

import { ScrollAnimation } from "@/components/ScrollAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",

    email: "",

    subject: "",

    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formspree.io/f/YOUR_FORM_ID",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        setSubmitStatus("success");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);

      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,

      label: "Email",

      value: "ssharma0355@gmail.com",

      link: "mailto:ssharma0355@gmail.com",
    },

    {
      icon: <Phone className="w-5 h-5" />,

      label: "Phone",

      value: "+91 9113704388",

      link: "tel:+919113704388",
    },

    {
      icon: <MapPin className="w-5 h-5" />,

      label: "Location",

      value: "Bengaluru, Karnataka, India",
    },

    {
      icon: <Clock className="w-5 h-5" />,

      label: "Time Zone",

      value: "IST (UTC +5:30)",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,

      label: "GitHub",

      link: "https://github.com/Ssharma0355",
    },

    {
      icon: <Linkedin className="w-5 h-5" />,

      label: "LinkedIn",

      link: "https://www.linkedin.com/in/sachin-sharma-sde/",
    },

    {
      icon: <MessageCircle className="w-5 h-5" />,

      label: "WhatsApp",

      link: "https://wa.me/919113704388",
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-7xl mx-auto pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-white/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Header */}
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
              Let's Build Something Great
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black gradient-text flex items-center justify-center gap-3">
            <MessageSquare className="w-10 h-10" />
            Contact Me
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
            Open to frontend engineering roles, freelance opportunities,
            product collaborations, and building scalable web experiences.
          </p>
        </motion.div>
      </ScrollAnimation>

      {/* Main Layout */}
      <div className="grid lg:grid-cols-[420px,1fr] gap-10">
        {/* Left Side */}
        <div className="space-y-8">
          {/* Contact Info */}
          <ScrollAnimation>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-md"
            >
              <h3 className="text-2xl font-semibold mb-7">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-gray-400 group-hover:text-white transition-colors">
                            {info.icon}
                          </div>

                          <div>
                            <p className="text-sm text-gray-400">
                              {info.label}
                            </p>

                            <p className="text-white text-sm md:text-base">
                              {info.value}
                            </p>
                          </div>
                        </div>

                        <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                        <div className="text-gray-400">{info.icon}</div>

                        <div>
                          <p className="text-sm text-gray-400">
                            {info.label}
                          </p>

                          <p className="text-white text-sm md:text-base">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollAnimation>

          {/* Social Links */}
          <ScrollAnimation>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-md"
            >
              <h3 className="text-2xl font-semibold mb-6">
                Connect with Me
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="group flex items-center justify-between px-5 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-gray-400 group-hover:text-white transition-colors">
                        {social.icon}
                      </div>

                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {social.label}
                      </span>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </ScrollAnimation>

          {/* Availability */}
          <ScrollAnimation>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                <h3 className="text-xl font-semibold">
                  Currently Available
                </h3>
              </div>

              <p className="text-gray-400 leading-relaxed">
                Available for frontend engineering opportunities, freelance
                projects, and startup collaborations worldwide.
              </p>
            </motion.div>
          </ScrollAnimation>
        </div>

        {/* Right Side - Form */}
        <ScrollAnimation>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-7 md:p-10 backdrop-blur-md"
          >
            <h3 className="text-2xl font-semibold mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-white/20 focus:ring-2 focus:ring-white/10 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-white/20 focus:ring-2 focus:ring-white/10 outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value,
                    })
                  }
                  className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-white/20 focus:ring-2 focus:ring-white/10 outline-none transition-all"
                  placeholder="Project inquiry or collaboration"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Message
                </label>

                <textarea
                  rows={7}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 focus:border-white/20 focus:ring-2 focus:ring-white/10 outline-none transition-all resize-none"
                  placeholder="Tell me about your project, role, or idea..."
                />
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Success */}
              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center"
                >
                  Message sent successfully. I'll get back to you soon.
                </motion.p>
              )}

              {/* Error */}
              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center"
                >
                  Something went wrong. Please try again later.
                </motion.p>
              )}
            </form>
          </motion.div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Contact;