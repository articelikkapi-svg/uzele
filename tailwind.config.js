module.exports = {
  // Keep the globs tight to avoid scanning unrelated packages / node_modules
  // that cause Tailwind to generate huge output. Add paths here if you have
  // components outside apps/*/src.
  content: [
    './src/**/*.{js,ts,jsx,tsx,html,mdx}',
    '../../apps/*/src/**/*.{js,ts,jsx,tsx,html,mdx}',
  ],
  theme: {
    fontFamily: {
      // only the families used by the site  Inter for sans
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
};
