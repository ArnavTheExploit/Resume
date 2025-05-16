import React from 'react';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About Me', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Awards & Acknowledgment', href: '#awards' },
  { name: 'Team', href: '#team' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
  { name: 'Note', href: '#note' },
];

const socialLinks = [
  { href: 'https://github.com/ArnavTheExploit', src: '/github.svg', alt: 'GitHub' },
  { href: 'https://linkedin.com/in/arnav-paniya-628216308', src: '/linkedin.svg', alt: 'LinkedIn' },
  { href: 'https://x.com/arnav_paniya', src: '/x.svg', alt: 'X' },
  { href: 'https://instagram.com/arnavpania', src: '/instagram.svg', alt: 'Instagram' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex space-x-4 mb-6">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <img src={link.src} alt={link.alt} className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* Horizontal Navigation Links */}
        <nav className="flex space-x-8 mb-6">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="px-3 py-1 rounded hover:bg-gray-700 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-gray-700 w-full" />

        {/* Copyright */}
        <div className="mt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} Arnav Paniya.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
