import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import ContentCreator from "./pages/ContentCreator";
import Resume from "./pages/Resume";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Per-page SEO metadata
const pageMeta = {
  "/": {
    title: "Sachin Sharma - Full Stack Developer | MERN Stack Expert",
    description:
      "Sachin Sharma — Full Stack Developer specializing in MERN stack, React.js, Node.js, Next.js and TypeScript. Based in Kolkata, India.",
  },
  "/about": {
    title: "About - Sachin Sharma | Full Stack Developer",
    description:
      "Learn about Sachin Sharma — B.Tech Computer Science graduate, Full Stack Developer with 3+ internships and 10+ projects. Based in Kolkata, India.",
  },
  "/projects": {
    title: "Projects - Sachin Sharma | Full Stack Developer Portfolio",
    description:
      "Explore full-stack web projects built by Sachin Sharma using React.js, Node.js, MongoDB, Next.js and TypeScript.",
  },
  "/skills": {
    title: "Skills - Sachin Sharma| React, Node.js, MERN Stack",
    description:
      "Technical skills of Sachin Sharma — React.js, Node.js, Express, MongoDB, Next.js, TypeScript, AWS, Docker and more.",
  },
  "/experience": {
    title: "Experience - Sachin Sharma | Full Stack Developer",
    description:
      "Professional experience of Sachin Sharma including 3+ internships in full stack web development.",
  },
  "/education": {
    title: "Education - Sachin Sharma | B.Tech Computer Science",
    description:
      "Educational background of Sachin Sharma — B.Tech in Computer Science with 7.64 CGPA.",
  },
 
  "/contact": {
    title: "Contact - Sachin Sharma | Hire a Full Stack Developer",
    description:
      "Get in touch with Sachin Sharma for freelance projects, job opportunities or collaborations. Based in Kolkata, India.",
  },
  "/content": {
    title: "Content Creation - Sachin Sharma | Tech Creator & Developer",
    description:
      "Explore tech content, developer insights, coding tutorials, frontend engineering tips, and AI/web development content created by Sachin Sharma.",
  },
};

// Hook to update document title + meta description on route change
function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || {
      title: "Sachin Sharma - Full Stack Developer",
      description:
        "Portfolio of Sachin Sharma — Full Stack Developer specializing in MERN stack and modern web technologies.",
    };

    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl)
      ogUrl.setAttribute(
        "content",
        `https://niladri1.vercel.app${location.pathname}`,
      );

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical)
      canonical.setAttribute(
        "href",
        `https://niladri1.vercel.app${location.pathname}`,
      );
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <SEOUpdater />
      <div className="min-h-screen flex flex-col">
        <Background3D />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/content" element={<ContentCreator />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
