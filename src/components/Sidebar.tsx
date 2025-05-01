// src/components/Sidebar.tsx
//import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Sidebar = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 p-6 flex flex-col justify-between"
      onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the sidebar
    >
      <div>
        <button onClick={onClose} className="text-right text-xl mb-6 hover:text-yellow-400">
          ✕
        </button>

        <nav className="flex flex-col space-y-4 text-lg">
          <Link to="/" onClick={onClose}>Home</Link>
          <Link to="/about" onClick={onClose}>About Me</Link>
          <Link to="/education" onClick={onClose}>Education</Link>
          <Link to="/awards" onClick={onClose}>Awards</Link>
          <Link to="/team" onClick={onClose}>Team</Link>
          <Link to="/projects" onClick={onClose}>Projects</Link>
          <Link to="/contact" onClick={onClose}>Contact</Link>
        </nav>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-4 text-white">
          <a href="https://instagram.com/arnavpania" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="https://x.com/arnav_paniya" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} />
          </a>
          <a href="https://linkedin.com/in/arnav-paniya-628216308" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/ArnavTheExploit" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
        </div>
        <p className="text-xs text-gray-400">© 2025 Arnav Paniya</p>
      </div>
    </div>
  );
};

export default Sidebar;
