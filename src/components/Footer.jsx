import { Link } from 'react-router-dom'
import { Code2, Github, Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const pageLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Content Creation', path: '/content' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-black">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Branding */}
          <div className="space-y-5">
            <Link
              to="/"
              className="flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Code2 className="h-6 w-6 text-white" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-white">
                  Sachin Sharma
                </h2>
                <p className="text-xs text-gray-400">
                  Software Developer
                </p>
              </div>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-gray-400">
              Building scalable web applications, modern UI experiences,
              and AI-powered digital products.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {pageLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:ssharma0355@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                <span>ssharma0355@gmail.com</span>
              </a>

              <a
                href="tel:+919113704388"
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4" />
                <span>+91 91137 04388</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Ssharma0355"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/sachin-sharma-sde/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="mailto:ssharma0355@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center md:flex-row">
          <p className="text-sm text-gray-500">
            © {currentYear} Sachin Sharma. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Available for opportunities
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer