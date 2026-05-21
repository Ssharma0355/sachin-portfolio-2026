import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Command,
  ArrowRight,
  Sparkles,
  X,
} from "lucide-react";

const searchData = [
  {
    title: "Home",
    description: "Welcome page and portfolio overview",
    path: "/",
    keywords: [
      "home",
      "portfolio",
      "sachin",
      "frontend developer",
      "react developer",
      "nextjs",
      "software engineer",
      "full stack developer",
      "mern stack",
      "landing page",
    ],
  },

  {
    title: "About",
    description: "Learn more about Sachin Sharma",
    path: "/about",
    keywords: [
      "about",
      "bio",
      "profile",
      "resume",
      "career",
      "frontend engineer",
      "developer",
      "background",
    ],
  },

  {
    title: "Education",
    description: "Academic background and qualifications",
    path: "/education",
    keywords: [
      "education",
      "college",
      "degree",
      "computer science",
      "engineering",
      "btech",
      "university",
      "academic",
    ],
  },

  {
    title: "Experience",
    description: "Professional work experience and internships",
    path: "/experience",
    keywords: [
      "experience",
      "jobs",
      "career",
      "work",
      "slideoo",
      "myclnq",
      "frontend",
      "react",
      "nextjs",
      "healthcare",
      "saas",
    ],
  },

  {
    title: "Skills",
    description: "Technical skills, frameworks and tools",
    path: "/skills",
    keywords: [
      "skills",
      "react",
      "nextjs",
      "javascript",
      "typescript",
      "tailwind",
      "mongodb",
      "nodejs",
      "frontend",
      "backend",
      "zustand",
      "redux",
      "fastapi",
    ],
  },

  {
    title: "Projects",
    description: "Featured projects and case studies",
    path: "/projects",
    keywords: [
      "projects",
      "portfolio",
      "github",
      "job platform",
      "ai search",
      "cab booking",
      "networking",
      "full stack",
      "web apps",
    ],
  },

  {
    title: "Content Creator",
    description: "When Sachin Explains — YouTube & Social Content",
    path: "/content-creator",
    keywords: [
      "youtube",
      "content creator",
      "instagram",
      "when sachin explains",
      "storytelling",
      "current affairs",
      "social issues",
      "career reality",
      "documentary",
    ],
  },

  {
    title: "Contact",
    description: "Get in touch for work or collaboration",
    path: "/contact",
    keywords: [
      "contact",
      "email",
      "hire",
      "linkedin",
      "github",
      "collaboration",
      "freelance",
      "work",
    ],
  },
];

const SearchDialog = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Filter Results
  const results = useMemo(() => {
    if (!searchQuery.trim()) return searchData;

    const query = searchQuery.toLowerCase();

    return searchData.filter((item) => {
      return (
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.keywords.some((keyword) =>
          keyword.toLowerCase().includes(query)
        )
      );
    });
  }, [searchQuery]);

  // Navigate
  const handleSelect = useCallback(
    (path) => {
      navigate(path);
      setIsOpen(false);
      setSearchQuery("");
      setSelectedIndex(0);
    },
    [navigate]
  );

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Open Search
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (!isOpen) return;

      // Close
      if (e.key === "Escape") {
        setIsOpen(false);
        setSearchQuery("");
      }

      // Down
      if (e.key === "ArrowDown") {
        e.preventDefault();

        setSelectedIndex((prev) =>
          prev + 1 >= results.length ? 0 : prev + 1
        );
      }

      // Up
      if (e.key === "ArrowUp") {
        e.preventDefault();

        setSelectedIndex((prev) =>
          prev - 1 < 0 ? results.length - 1 : prev - 1
        );
      }

      // Enter
      if (e.key === "Enter" && results.length > 0) {
        e.preventDefault();

        handleSelect(results[selectedIndex].path);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex, handleSelect]);

  // Reset selected index
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Search Button
  if (!isOpen) {
    return (
      <button
      onClick={() => setIsOpen(true)}
      className="group flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-3 sm:px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
    >
        <Search className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />

        <span className="hidden sm:block text-sm text-gray-400 group-hover:text-white transition-colors">
          Search pages...
        </span>

        <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-400">
          <Command className="w-3 h-3" />
          <span>K</span>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-24">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Dialog */}
      <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input */}
        <div className="flex items-center gap-4 px-5 py-5 border-b border-white/10">
          <Search className="w-5 h-5 text-gray-500" />

          <input
            type="text"
            placeholder="Search for pages, skills, projects..."
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder:text-gray-500 outline-none text-base"
          />

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[500px] overflow-y-auto py-2">
          {results.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Sparkles className="w-10 h-10 text-gray-600 mb-4" />

              <h3 className="text-lg font-semibold text-white mb-2">
                No Results Found
              </h3>

              <p className="text-sm text-gray-400">
                Try searching for projects, skills, experience, or pages.
              </p>
            </div>
          ) : (
            results.map((result, index) => (
              <button
                key={result.path}
                onClick={() => handleSelect(result.path)}
                className={`group w-full flex items-center justify-between gap-5 px-5 py-4 transition-all duration-200 ${
                  selectedIndex === index
                    ? "bg-white/10"
                    : "hover:bg-white/5"
                }`}
              >
                <div className="text-left">
                  <h3 className="text-white font-medium mb-1">
                    {result.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {result.description}
                  </p>
                </div>

                <ArrowRight
                  className={`w-4 h-4 flex-shrink-0 transition-all duration-200 ${
                    selectedIndex === index
                      ? "opacity-100 translate-x-0 text-white"
                      : "opacity-0 -translate-x-2 text-gray-500 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                />
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-white/10 text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span>↑↓ Navigate</span>

            <span>↵ Select</span>

            <span>Esc Close</span>
          </div>

          <div className="hidden sm:flex items-center gap-1">
            <Command className="w-3 h-3" />
            <span>K</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDialog;