module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.svelte"],
  theme: {
    extend: {
      colors: {
        'slate': "#8892b0",
        'light-slate': "#a8b2d1",
        'lightest-slate': "#ccd6f6",
        'blue': '#53B5D1',
        // 'blue-2': 'rgba(50, 150, 230, 0.8)',
        // 'blue-3': 'rgba(5, 120, 240, 0.8)',
        'white': "#e6f1ff",
      },
    },
  },
  variants: {},
  plugins: [],
};
