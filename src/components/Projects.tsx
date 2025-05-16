import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  role: string;
  techStack: string[];
  repoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  altText,
  title,
  description,
  role,
  techStack,
  repoLink,
}) => {
  return (
    <motion.a
      href={repoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-2xl p-6 text-black shadow-lg hover:scale-105 transition-all block w-72 h-[470px] mx-auto overflow-hidden relative group"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        <img
          src={imageSrc}
          alt={altText}
          className="rounded-2xl w-full h-48 object-contain mb-4"
        />
        <FaGithub
          className="absolute top-2 right-2 text-black text-xl group-hover:text-yellow-400 transition-colors cursor-pointer"
          title="View Repo"
        />
      </div>
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-sm mb-2">{description}</p>
      <p className="text-xs italic mb-2 text-yellow-400">Role: {role}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="text-yellow-400 font-semibold hover:underline">View Repo</div>
    </motion.a>
  );
};

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      imageSrc: "/getaway-logo.png",
      altText: "GetAway Logo",
      title: "GetAway",
      description:
        "Frontend design of a travel app focused on seamless navigation and real-time visuals.",
      role: "Frontend Developer",
      techStack: ["React", "TailwindCSS", "Firebase"],
      repoLink: "https://github.com/ArnavTheExploit/GetAway",
    },
    {
      imageSrc: "/mbp.png",
      altText: "MyBudgetPal Logo",
      title: "MyBudgetPal",
      description:
        "Personal Kotlin-based budget app built to explore backend logic and learn Android development.",
      role: "Full Stack Developer (Personal Project)",
      techStack: ["Kotlin", "Android", "Firebase"],
      repoLink: "https://github.com/ArnavTheExploit/MyBudgetPal",
    },
    {
      imageSrc: "/AP.png",
      altText: "Resume Website",
      title: "Resume Website",
      description:
        "This website — fully built by me using Vite + React + Tailwind. Showcases my work and contact info.",
      role: "Full Stack Developer",
      techStack: ["React", "Vite", "TailwindCSS"],
      repoLink: "https://github.com/ArnavTheExploit/Resume",
    },
  ];

  return (
    <motion.div
      id="projects" // <- ID added here
      className="relative min-h-screen bg-black text-white"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <header className="relative z-20 flex items-center px-8 py-4">
        {/* Left: Name */}
        <div className="text-3xl font-bold flex-1">
          <span className="text-yellow-400">A</span>rnav{" "}
          <span className="text-yellow-400">P</span>aniya
        </div>

        {/* Center: Email & Insta */}
        <div className="flex gap-4 justify-center flex-1">
          <a href="mailto:arnavpaniya@gmail.com" className="hover:text-yellow-400">
            arnavpaniya@gmail.com
          </a>
          |
          <a
            href="https://instagram.com/arnavpania"
            className="hover:text-yellow-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            @arnavpania
          </a>
        </div>

        {/* Right: Empty */}
        <div className="flex-1" />
      </header>

      {/* Vertical PROJECTS label on left */}
      <div
        className="absolute left-5 top-1/2 -translate-y-1/2 text-white tracking-widest hidden md:block z-10"
        style={{ writingMode: "vertical-rl" }}
      >
        PROJECTS
      </div>

      {/* Projects Grid */}
      <motion.div
        className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-20 justify-center justify-items-center"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>

      {/* Footer with social icons */}
      <footer className="relative z-20 flex justify-between items-center px-8 py-4 text-white text-sm">
        <div>© 2025 Arnav Paniya. All rights reserved.</div>

        <div className="flex gap-6 text-xl">
          <a
            href="https://www.linkedin.com/in/arnav-paniya-628216308/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/ArnavTheExploit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/arnav_paniya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </footer>
    </motion.div>
  );
};

export default ProjectsPage;
