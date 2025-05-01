import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const linkedinUrl = "https://linkedin.com/in/arnav-paniya-628216308";
const githubUrl = "https://github.com/ArnavTheExploit";
const twitterUrl = "https://x.com/arnav_paniya";
const getawayRepo = "https://github.com/ArnavTheExploit/GetAway";

const features = [
  { icon: "🚀", text: "GetAway is a modern cross-platform travel app." },
  { icon: "🗸️", text: "Helps users discover new destinations, book trips, and plan getaways easily." },
  { icon: "⚛️", text: "Built with React Native for smooth iOS and Android performance." },
  { icon: "🔒", text: "Features secure authentication (email, social login)." },
  { icon: "🎯", text: "Focused on minimal UI, fast access, and a clean booking experience." },
  { icon: "🖼️", text: "Integrates visuals like destination images and splash screens for immersive feel." },
  { icon: "🌐", text: "Future-ready for features like personalized suggestions and live deals." },
];

const Projects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/plan1.jpg", "/plan2.jpg", "/splash.jpg"];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isModalOpen) {
      if (e.key === "ArrowLeft") {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    }
  };

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <section
      className="relative h-screen w-screen overflow-hidden"
      style={{
        backgroundImage: "url('/Project.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Keyframes */}
      <style>{`
        @keyframes moveLeftRight {
          0% { transform: translateX(0); }
          50% { transform: translateX(10px); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Top bar */}
      <header className="relative z-20 flex justify-between items-center px-8 py-4 text-white select-none">
        <div className="absolute top-6 left-8 text-3xl font-bold">
          <span className="text-yellow-400">A</span>rnav <span className="text-yellow-400">P</span>aniya
        </div>
        <div className="absolute top-4 w-full flex justify-center items-center z-20">
          <div className="text-lg flex gap-4 flex-wrap justify-center items-center">
            <a href="mailto:arnavpaniya@gmail.com" className="hover:text-yellow-400">
              arnavpaniya@gmail.com
            </a>
            |
            <a
              href="https://www.instagram.com/arnavpania/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              @arnavpania
            </a>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-20 flex items-center justify-start h-[calc(100vh-96px)] px-8">
        <div className="flex w-full justify-start items-start">
          {/* Image section */}
          <div className="flex flex-col items-center w-1/3 mr-8 mt-6">
            <div className="flex gap-6 mb-6 translate-x-4 -translate-y-8">
              {images.slice(0, 2).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`plan-${index}`}
                  className="w-48 h-64 rounded-2xl border-2 border-black shadow object-cover cursor-pointer hover:scale-105 transition-transform duration-200"
                  onClick={() => {
                    setCurrentImage(index);
                    setIsModalOpen(true);
                  }}
                />
              ))}
            </div>
            <img
              src={images[2]}
              alt="splash"
              className="w-48 h-64 rounded-2xl border-2 border-black shadow object-cover cursor-pointer hover:scale-105 transition-transform duration-200 translate-x-4 translate-y-8"
              onClick={() => {
                setCurrentImage(2);
                setIsModalOpen(true);
              }}
            />
          </div>

          {/* Text section */}
          <div className="flex-1 flex flex-col items-start pl-4 mt-6">
            <div className="flex items-center mb-2">
              <a
                href={getawayRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl font-bold text-yellow-400 hover:underline"
              >
                GetAway
              </a>
              <img
                src="/left-arrow.png"
                alt="arrow"
                className="w-6 h-6 ml-2"
                style={{ animation: "moveLeftRight 1.5s infinite ease-in-out", marginTop: "4px" }}
              />
            </div>
            <div className="text-gray-400 mb-4 text-sm font-semibold">
              ( My Role: App <span className="text-white">ARCHITECTURE</span> )
            </div>
            <ul className="space-y-2 text-sm text-white">
              {features.map((f, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2">{f.icon}</span>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-base font-semibold text-pink-400 animate-pulse">
              App coming soon........
            </div>
          </div>
        </div>
      </main>

      {/* Education Title (Vertical) */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white tracking-widest hidden md:block z-10"
        style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>
        PROJECTS
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full flex justify-between items-center px-8 py-4 text-gray-400 text-sm select-none z-20">
        <div>© {new Date().getFullYear()} Arnav Paniya. All rights reserved.</div>
        <div className="flex gap-6 text-2xl text-white">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaGithub />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaTwitter />
          </a>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <img
            src={images[currentImage]}
            alt={`maximized-${currentImage}`}
            className="max-w-full max-h-full object-contain cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Bottom center text */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-300 font-medium text-lg select-none z-30">
        New projects coming soon
      </div>
    </section>
  );
};

export default Projects;
