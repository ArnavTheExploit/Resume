import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() {
  const linkedinUrl = "https://linkedin.com/in/arnav-paniya-628216308";
  const githubUrl = "https://github.com/ArnavTheExploit";
  const twitterUrl = "https://x.com/arnav_paniya";

  return (
    <section
      id="about"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: 'url(/about-me.jpg)', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0,0,0,0.6)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl w-full px-8"
      >
        <h1 className="text-5xl font-extrabold mb-6 text-yellow-400">Arnav Paniya</h1>
        <p className="text-lg text-gray-300 mb-8">
          Building technology that bridges imagination and reality.
        </p>

        {/* About Card */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
           <p className="text-xs text-gray-300 mb-4">
           I'm Arnav Paniya, currently pursuing my B.Tech in Electronics and Communication Engineering at BMS Institute of Technology and Management, Bangalore. As a second-semester student, I'm at the early stage of my technical journey, exploring different fields with curiosity and excitement. My interests lie in mobile app development, backend programming, and understanding the basics of cybersecurity and AI. Although I am still learning, I enjoy experimenting with different technologies like React Native and Node.js through small personal projects. Every project, no matter how simple, is a step toward building a stronger foundation. I am also giving my 100% in Hardware as it is my core .
          </p>
           <p className="text-xs text-gray-300 mb-4">
            Apart from academics, I actively take part in hackathons and tech events to expose myself to real-world challenges and learn from others. I believe that consistent learning, problem-solving, and being open to new ideas are key to growing as a developer.
           </p>

                 
                 
    {/* Education Title (Vertical) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-white tracking-widest hidden md:block z-10"
      style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>
      WHO AM I
      </div>

            

          {/* Timeline */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Journey:</h3>
            <ul className="text-sm list-disc list-inside space-y-1">
              <li>2020: Shifted to Jaipur</li>
              <li>2022-2024: Senior Secondary (Vardhman International School)</li>
              <li>2024: Joined BMSIT&M, Bangalore</li>
              <li>2025: Working on GETAWAY App</li>
            </ul>
          </div>

          {/* Achievements */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold mb-2">🏆 Hackathons</h3>
              <ul className="text-sm space-y-1">
                <li>CODE RED '25</li>
                <li>Hack the Halls '24</li>
                <li>EPOCH-24</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📜 Certifications</h3>
              <ul className="text-sm space-y-1">
                <li>Cyber Security (Infosys)</li>
                <li>Intro to C Programming</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">⚡ Skills</h3>
              <ul className="text-sm space-y-1">
                <li>React Native, Expo, Node.js</li>
                <li>Python, JavaScript</li>
                <li>AI/ML Prototyping</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-8">
          <div className="text-xs text-gray-400">© Arnav Paniya 2025.</div>
          <div className="flex gap-4">
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
        </div>
      </motion.div>
    </section>
  );
}