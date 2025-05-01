import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin,  FaTwitter } from 'react-icons/fa';

export default function Hero() {
  const linkedinUrl = "https://linkedin.com/in/arnav-paniya-628216308";
  const githubUrl = "https://github.com/ArnavTheExploit";
  const twitterUrl = "https://x.com/arnav_paniya";

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/profile.jpg')",
      }}
    >

      {/* Name Left */}
      <div className="absolute top-6 left-8 text-3xl font-bold text-white">
        <span className="text-yellow-400">A</span>rnav <span className="text-yellow-400">P</span>aniya
      </div>

      {/* Center Content */}
      <div className="absolute top-1/2 left-32 -translate-y-1/2 text-left text-white">
        <div className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-yellow-400">
            <Typewriter
              words={['Hello!', 'Hola!', 'नमस्ते!', 'Bonjour!', 'Ciao!', 'こんにちは!']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span> I am
        </div>
        <div className="text-2xl md:text-3xl font-light">
          a{' '}
          <Typewriter
            words={['Developer', 'Student', 'Good Friend', 'Good Learner', 'Explorer', 'Innovator', 'Team Player']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </div>
      </div>

      {/* Vertical NAMASTE */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white tracking-widest" style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>
        NAMASTE
      </div>


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


      {/* Bottom Right - Social Icons */}
      <div className="absolute bottom-4 right-6 flex gap-4 text-white">
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
          <FaTwitter size={20} />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
      </div>

      {/* Bottom Left - Copyright */}
      <div className="absolute bottom-4 left-6 text-white text-xs">
        © Arnav Paniya 2025.
      </div>
    </div>
  );
}