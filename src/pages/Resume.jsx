import { Download, Mail, Phone, Github, Linkedin } from "lucide-react";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
<div className="min-h-screen bg-[#0a0a0a] text-white pt-[5.5rem] px-4 pb-10">
          <div className="max-w-4xl mx-auto">
        {/* Top Actions */}
        <div className="flex justify-end mb-6 print:hidden">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </div>

        {/* Resume Container */}
        <div className="bg-white text-black rounded-2xl shadow-2xl p-10 print:shadow-none print:p-0">
          {/* Header */}
          <div className="border-b pb-6 mb-6">
            <h1 className="text-4xl font-bold">Sachin Sharma</h1>

            <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-700">
              <span>Bengaluru, India</span>

              <a
                href="tel:+919113704388"
                className="flex items-center gap-1 hover:text-black"
              >
                <Phone className="w-4 h-4" />
                +91 9113704388
              </a>

              <a
                href="mailto:ssharma0355@gmail.com"
                className="flex items-center gap-1 hover:text-black"
              >
                <Mail className="w-4 h-4" />
                ssharma0355@gmail.com
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="flex items-center gap-1 hover:text-black"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="flex items-center gap-1 hover:text-black"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-xl font-bold border-b pb-2 mb-3">
              Professional Summary
            </h2>

            <p className="text-gray-800 leading-7">
              Frontend Engineer with 3+ years of experience building scalable
              healthcare and AI SaaS applications using React.js and Next.js.
              Skilled in performance optimization, state management, and
              production-ready UI systems.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-xl font-bold border-b pb-2 mb-3">
              Technical Skills
            </h2>

            <div className="space-y-2 text-gray-800">
              <p>
                <strong>Languages:</strong> JavaScript, TypeScript, HTML5, CSS3
              </p>

              <p>
                <strong>Frontend:</strong> React.js, Next.js, Redux Toolkit,
                Zustand, Tailwind CSS
              </p>

              <p>
                <strong>Backend:</strong> Node.js, Express.js, FastAPI
              </p>

              <p>
                <strong>Tools:</strong> Git, Docker, Vercel, GCP, GitHub Actions
              </p>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-bold border-b pb-2 mb-4">
              Experience
            </h2>

            <div className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">
                    Frontend Developer — Slideoo AI
                  </h3>

                  <p className="text-gray-600">Bengaluru, India</p>
                </div>

                <span className="text-sm text-gray-600">
                  Jun 2025 – Present
                </span>
              </div>

              <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-800">
                <li>
                  Built scalable frontend modules using Next.js App Router and
                  Zustand.
                </li>

                <li>
                  Improved rendering performance by 30% through optimized state
                  architecture.
                </li>

                <li>
                  Implemented API caching and route-level code splitting.
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">
                    Frontend Developer — MyCLNQ Health
                  </h3>

                  <p className="text-gray-600">Remote, Singapore</p>
                </div>

                <span className="text-sm text-gray-600">
                  Nov 2023 – Jun 2025
                </span>
              </div>

              <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-800">
                <li>
                  Migrated legacy application into modern React.js SPA.
                </li>

                <li>
                  Reduced page load time by 200ms through rendering
                  optimizations.
                </li>

                <li>
                  Developed telemedicine modules for 1000+ monthly users.
                </li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-xl font-bold border-b pb-2 mb-4">
              Projects
            </h2>

            <div className="mb-5">
              <h3 className="font-bold">
                Job & Networking Platform
              </h3>

              <p className="text-gray-700 mt-2">
                Swipe-based job matching platform using React.js, FastAPI, and
                MongoDB with smooth gesture interactions and scalable UI.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                On Wheels — Cab & Moto Booking
              </h3>

              <p className="text-gray-700 mt-2">
                Ride booking platform with Stripe integration, Mapbox tracking,
                and SSR optimization using Next.js.
              </p>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-4">
              Education
            </h2>

            <div className="flex justify-between">
              <div>
                <h3 className="font-bold">
                  B.Tech in Computer Science & Engineering
                </h3>

                <p className="text-gray-700">
                  RGPV University, Bhopal
                </p>
              </div>

              <span className="text-gray-600">
                2019 – 2023
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;