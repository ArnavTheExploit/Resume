// src/components/Footer.tsx
//import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/ArnavTheExploit" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub" className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/arnav-paniya-628216308" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a href="https://x.com/arnav_paniya" target="_blank" rel="noopener noreferrer">
            <img src="/x.svg" alt="X" className="h-6 w-6" />
          </a>
          <a href="https://instagram.com/arnavpania" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.svg" alt="Instagram" className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-2 text-sm">
          © 2025 Arnav Paniya
        </p>
      </div>
    </footer>
  );
};

export default Footer;