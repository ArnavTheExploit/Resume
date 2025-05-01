//import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const gold = "#bfa76a";

const teamMembers = [
  {
    name: "Arnav Paniya",
    title: "CEO",
    role: "Frontend Developer | App Developer | Team Lead",
    image: "/arnav.png",
    socials: [
      { icon: <FaInstagram />, url: "https://www.instagram.com/arnavpania/" },
      { icon: <FaLinkedin />, url: "https://linkedin.com/in/arnav-paniya-628216308" },
      { icon: <FaGithub />, url: "https://github.com/ArnavTheExploit" },
      { icon: <FaTwitter />, url: "https://x.com/arnav_paniya" },
      { icon: <FaEnvelope />, url: "mailto:arnavpaniya@gmail.com" },
    ],
  },
  {
    name: "Harshit N M",
    title: "CFO, Editor",
    role: "Frontend Developer | UI/UX Designer | Public Speaker",
    image: "/harshit.png",
    socials: [
      { icon: <FaInstagram />, url: "https://www.instagram.com/harshit_nm31/" },
    ],
  },
  {
    name: "N. Suhas",
    title: "CTO",
    role: "Frontend & Backend Developer | AI Enthusiast | Motorider",
    image: "/suhas.png",
    socials: [
      { icon: <FaInstagram />, url: "https://www.instagram.com/suhas14_/" },
      { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/suhas-n-1b193a296/" },
      { icon: <FaGithub />, url: "https://github.com/TheSuhasDev" },
      { icon: <FaEnvelope />, url: "mailto:suhas6654@gmail.com" },
    ],
  },
  {
    name: "Adithya S P",
    title: "CMO",
    role: "Backend Developer | Marketing & Research | Idea Generator",
    image: "/adithya.png",
    socials: [
      { icon: <FaInstagram />, url: "https://www.instagram.com/adithya._.10/" },
      { icon: <FaEnvelope />, url: "mailto:adithyasp1668@gmail.com" },
    ],
  },
];

const Team = () => {
  return (
    <div
      className="min-h-screen bg-center bg-no-repeat bg-cover relative flex flex-col justify-between"
      style={{ backgroundImage: "url('/Teams.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <img
          src="/codenest.png"
          alt="CodeNest Logo"
          className="mx-auto mb-6 w-32 md:w-40 rounded-full shadow-lg"
        />
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 mb-2">
          Building the Future, One Line at a Time.
        </h2>
        <p className="text-center italic text-sm md:text-base" style={{ color: gold }}>
          "A Nest where Ideas Hatch, Code Grows, and Innovation Takes Flight." — Team CodeNest
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map(({ name, title, role, image, socials }, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 relative border border-gray-200 hover:border-[6px] hover:border-[#bfa76a] flex flex-col"
            >
              <img src={image} alt={name} className="w-full h-64 object-cover" />

              {/* Info section with social icons */}
              <div className="text-center px-6 py-8 flex flex-col justify-between min-h-[280px]">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{name}</h3>
                  <p className="text-sm font-semibold" style={{ color: gold }}>{title}</p>
                  <p className="text-sm text-gray-600 mt-1">{role}</p>
                </div>

                {/* Social Icons */}
                <div className="mt-5 flex justify-center gap-3">
                  {socials.map(({ icon, url }, i) => (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#bfa76a] hover:text-black transition"
                    >
                      <div className="p-2 rounded-full hover:bg-gray-200 text-xl">
                        {icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="relative z-10 px-6 pb-4">
        <p className="text-sm text-gray-700">© 2025 CodeNest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Team;
