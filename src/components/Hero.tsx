// src/components/Hero.tsx
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/profile.jpg')",
      }}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center px-8 py-6">
        {/* Name Left */}
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-white">
            <span className="text-yellow-400">A</span>rnav <span className="text-yellow-400">P</span>aniya
          </h1>
        </div>

        {/* Header */}
       <div className="absolute top-4 w-full flex justify-center items-center z-20"> {/* Change z-10 → z-20 */}
       <div className="relative text-lg flex gap-4 flex-wrap justify-center items-center">
          <a href="mailto:arnavpaniya@gmail.com" className="text-white hover:text-yellow-400">
             arnavpaniya@gmail.com
          </a>
            |
           <a href="https://www.instagram.com/arnavpania/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
           @arnavpania
          </a>
       </div>
       </div>

         {/* NAMASTE Title (Vertical) */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white tracking-widest hidden md:block z-10"
        style={{ writingMode: 'vertical-rl', letterSpacing: '0.2em' }}>
        NAMASTE
      </div>

        {/* Empty space on right to balance layout */}
        <div className="w-8 h-8"></div>
      </div>

      {/* Left Centered Content */}
      <div className="absolute left-24 top-1/2 -translate-y-1/2 text-left text-white max-w-md">
        <h2 className="text-5xl md:text-6xl font-bold">
          <span className="text-yellow-400">
            <Typewriter
              words={[
                'Hello', 'Hola', 'नमस्ते', 'Bonjour', 'Ciao', 'こんにちは',
                'Hallo', 'Salam', 'Hej', 'Olá', 'Zdravo', 'Ahoj',
                'Merhaba', 'Sveiki', 'नमस्कार',
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
          {', I am '}
        </h2>

        <h3 className="text-3xl md:text-4xl font-light mt-6">
          <Typewriter
            words={[
              'a developer',
              'an explorer',
              'a learner',
              'a listener',
              'a good friend',
              'an innovator',
              'a problem solver',
              'a thinker',
              'a team player',
              'a coding enthusiast',
              'an optimist',
              'a curious mind',
              'a fast learner',
              'an ECE undergrad',
              'a dreamer',
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </h3>
      </div>

      {/* Bottom Left - Copyright */}
      <div className="absolute bottom-4 left-6 text-white text-xs">
        © Arnav Paniya 2025.
      </div>

      {/* Bottom Right - Social Icons */}
      <div className="absolute bottom-4 right-6 flex gap-4 text-white">
        <a
          href="https://x.com/arnav_paniya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://linkedin.com/in/arnav-paniya-628216308"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/ArnavTheExploit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  );
}
