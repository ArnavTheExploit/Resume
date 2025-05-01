module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 5px #00f0ff, 0 0 10px #00f0ff" },
          "50%": { textShadow: "0 0 15px #00f0ff, 0 0 25px #00f0ff" },
        },
      },
    },
  },
  plugins: [],
};
