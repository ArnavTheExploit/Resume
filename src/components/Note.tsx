//import React from "react";

export default function Note() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6 bg-black text-white"
      style={{ backgroundImage: "url('/note.jpg')" }}
    >
      <div className="relative bg-yellow-100 text-black max-w-2xl w-full rounded-2xl shadow-2xl p-8 transform rotate-[-2deg] animate-fadeIn">
        
        {/* Pushpin */}
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">📌</div>

        {/* Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/ArnavP.jpg"
            alt="Arnav Paniya"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="space-y-4 text-lg leading-relaxed font-medium">
          <p>💡 I thrive in collaborative environments where technology meets creativity.</p>
          <p>
            My goal is to bridge the gap between software and hardware by building solutions
            that simplify everyday life.
          </p>
          <p>
            I'm always eager to learn any kind of technology and the thought process behind it.
            I love joining new programs, connecting with creators, and gaining fresh insights.
          </p>
          <p>🤝 Let's connect, collaborate, and grow together as innovators!</p>
        </div>

        {/* Signature */}
        <div className="mt-8 text-right text-2xl font-[Pacifico] text-blue-600 animate-glow">
          Arnav Paniya
        </div>
      </div>
    </div>
  );
}
