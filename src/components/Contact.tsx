import {
  Linkedin,
  Instagram,
  Github,
  Twitter,
  Mail,
} from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/contact-bg.jpg')", // replace with your actual image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Centered white card */}
      <div className="relative max-w-lg mx-auto h-full flex flex-col justify-center items-center px-6">
        <div className="bg-white rounded-3xl shadow-xl p-12 w-full text-center">

          {/* Name with initials in yellow */}
          <h1 className="text-black text-5xl font-bold mb-6 drop-shadow">
            <span className="text-yellow-500">A</span>rnav{" "}
            <span className="text-yellow-500">P</span>aniya
          </h1>

          {/* Location */}
          <p className="text-black text-2xl mb-10">
            Bangalore, Karnataka, India
          </p>

          {/* Email */}
          <div className="flex items-center justify-center space-x-3 mb-10">
            <Mail className="text-black w-8 h-8" />
            <a
              href="mailto:arnavpaniya@gmail.com"
              className="text-black text-2xl underline hover:text-yellow-500 transition"
            >
              arnavpaniya@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 text-black text-3xl">
            <a
              href="https://www.linkedin.com/in/arnav-paniya-628216308/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.instagram.com/arnavpania/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="https://github.com/ArnavTheExploit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a
              href="https://x.com/arnav_paniya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-transform hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
