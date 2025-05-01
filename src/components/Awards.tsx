import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Awards() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const linkedinUrl = "https://linkedin.com/in/arnav-paniya-628216308";
  const githubUrl = "https://github.com/ArnavTheExploit";
  const twitterUrl = "https://x.com/arnav_paniya";

  const certificates = [
    "/cert1.png",
    "/cert2.png",
    "/cert3.png",
    "/cert4.png",
    "/cert5.png",
    "/cert6.png",
    "/cert7.png",
    "/cert8.png",
  ];

  return (
    <section
      id="awards"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: 'url(/awards-bg.jpg)',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.6)'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Top Section */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
        {/* Name */}
        <div className="text-left text-3xl font-bold">
          <span className="text-yellow-400">A</span>rnav <span className="text-yellow-400">P</span>aniya
        </div>

        {/* Header */}
        <div className="absolute top-4 w-full flex justify-center items-center z-20">
          <div className="relative text-lg flex gap-4 flex-wrap justify-center items-center">
            <a href="mailto:arnavpaniya@gmail.com" className="hover:text-yellow-400">
              arnavpaniya@gmail.com
            </a>
            |
            <a href="https://www.instagram.com/arnavpania/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              @arnavpania
            </a>
          </div>
        </div>
      </div>

      {/* Awards Title (Vertical, positioned higher) */}
      <div
        className="absolute left-5 z-10 hidden md:block"
        style={{
          top: '15%',
          writingMode: 'vertical-rl',
          letterSpacing: '0.2em'
        }}
      >
        AWARDS AND ACKNOWLEDGEMENT
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl w-full px-6 py-8 flex flex-col items-center"
      >
        {/* Main Grid */}
        <div className="flex flex-col md:flex-row gap-8 items-start w-full">

          {/* Left - Certificates */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
            {certificates.map((cert, index) => (
              <motion.img
                key={index}
                src={cert}
                alt={`Certificate ${index + 1}`}
                className="w-40 h-28 object-cover rounded-xl shadow-lg cursor-pointer"
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCert(cert)}
              />
            ))}
          </div>

          {/* Right - Achievements */}
          <div className="space-y-6 w-full md:w-1/2 text-gray-300 text-xs md:text-sm">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">🏆 Hackathon Participation</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><b>CODE RED '25</b> | BMSIT&M<br />Prototyped AI-driven solutions in a 25-hour national hackathon.</li>
                <li><b>Hack the Halls</b> | IEEE CS & ITS<br />Collaborated on debugging and algorithm design challenges.</li>
                <li><b>EPOCH-24</b> | IEEE CIS<br />Built innovative tech solutions under time constraints.</li>
                <li><b>STARTUP SPRINT</b> | IEEE CS<br />Pitched startup ideas in a competitive environment.</li>
                <li><b>Mission Spectrum</b> | IEEE Week<br />Solved signal processing challenges.</li>
                <li><b>mARtian AESsence</b> | IEEE AESS<br />Explored AR/VR applications in aerospace.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3">🎓 Certifications</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><b>Cyber Security</b> | Infosys Springboard<br />Introduction to cybersecurity fundamentals.</li>
                <li><b>Introduction to C Programming</b> | Infosys Springboard<br />Learned programming basics using C.</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer - Social Icons (Bottom Right) */}
      <div className="absolute bottom-6 right-6 flex gap-6 z-10 bg-black bg-opacity-50 px-4 py-2 rounded-full">
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <FaTwitter size={20} />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <FaLinkedin size={20} />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <FaGithub size={20} />
        </a>
      </div>

      {/* Footer - Copyright (Bottom Left) */}
      <div className="absolute bottom-6 left-6 text-white text-xs z-10 bg-black bg-opacity-50 px-4 py-2 rounded-full">
        © Arnav Paniya 2025.
      </div>

      {/* Full Screen Certificate Viewer */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <motion.img
            src={selectedCert}
            alt="Full Certificate"
            className="max-w-3xl max-h-[90vh] rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}
    </section>
  );
}
