import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Education() {
  const linkedinUrl = "https://linkedin.com/in/arnav-paniya-628216308";
  const githubUrl = "https://github.com/ArnavTheExploit";
  const twitterUrl = "https://x.com/arnav_paniya";

  return (
    <section
      id="education"
      className="relative w-full h-screen bg-fixed bg-center bg-cover text-white overflow-hidden"
      style={{ backgroundImage: 'url(/subtle-background.jpg)', backgroundBlendMode: 'overlay' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

     {/* Header */}
       <div className="absolute top-4 w-full flex justify-center items-center z-20"> {/* Change z-10 → z-20 */}
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



      {/* Name */}
      <div className="absolute top-6 left-8 text-3xl font-bold z-10">
        <span className="text-yellow-400">A</span>rnav <span className="text-yellow-400">P</span>aniya
      </div>

      {/* Education Title (Vertical) */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white tracking-widest hidden md:block z-10"
        style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>
        EDUCATION
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 pt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">

        {/* School 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <img src="/school1.png" alt="Delhi Public School" className="w-52 h-36 object-cover rounded-md shadow-2xl" />
          <h3 className="text-2xl font-bold text-yellow-400 mt-4">Delhi Public School, Jodhpur</h3>
          <p className="text-gray-300">Primary & Middle School (till 8th)</p>
          <p className="text-gray-400">Till 2020</p>
        </motion.div>

        {/* School 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <img src="/school2.png" alt="Ryan International School" className="w-52 h-36 object-cover rounded-md shadow-2xl" />
          <h3 className="text-2xl font-bold text-yellow-400 mt-4">Ryan International School, Jaipur</h3>
          <p className="text-gray-300">Secondary (9th-10th)</p>
          <p className="text-gray-400">2020 - 2022</p>
        </motion.div>

        {/* School 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <img src="/school3.png" alt="Vardhman International School" className="w-52 h-36 object-cover rounded-md shadow-2xl" />
          <h3 className="text-2xl font-bold text-yellow-400 mt-4">Vardhman International School, Jaipur</h3>
          <p className="text-gray-300">Senior Secondary (11th-12th)</p>
          <p className="text-gray-400">2022 - 2024</p>
        </motion.div>

        {/* College */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <img src="/1pu.jpg" alt="BMSIT&M" className="w-52 h-36 object-cover rounded-md shadow-2xl" />
          <h3 className="text-2xl font-bold text-yellow-400 mt-4">BMS Institute of Technology and Management, Bangalore</h3>
          <p className="text-gray-300">B.Tech in Electronics & Communication Engineering</p>
          <p className="text-gray-400">2024 – Present</p>
        </motion.div>

      </div>

      {/* Bottom Right - Social Icons */}
      <div className="absolute bottom-4 right-6 flex gap-4 text-white z-10">
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <FaTwitter size={24} />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <FaLinkedin size={24} />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
          <FaGithub size={24} />
        </a>
      </div>

      {/* Bottom Left - Copyright */}
      <div className="absolute bottom-4 left-6 text-white text-xs z-10">
        © Arnav Paniya 2025.
      </div>
    </section>
  );
}