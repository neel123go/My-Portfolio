module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ffffff",
          "secondary": "#FCD271",
          "accent": "#fcccae",
          "neutral": "#44403c",
          "base-100": "#E8E5EB",
          "info": "#1982EB",
          "success": "#178C75",
          "warning": "#E69E19",
          "error": "#F4527E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}