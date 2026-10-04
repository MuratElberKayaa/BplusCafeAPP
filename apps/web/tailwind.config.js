/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bplus: {
          deepOlive: '#34422D',
          olive: '#68734B',
          sage: '#AEB997',
          cream: '#F4F0E6',
          warmWhite: '#FFFDF8',
          latte: '#D8B98C',
          espresso: '#2B231E',
          mutedText: '#6B675F',
          border: '#E3DEC3',
          success: '#4B7354',
          warning: '#B8863B',
          error: '#9E3E37',
          info: '#4A6D7C',
        },
      },
      fontFamily: {
        sans: [
          'Manrope',
          'Plus Jakarta Sans',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0px 2px 8px rgba(43, 35, 30, 0.05)',
        card: '0px 4px 16px rgba(43, 35, 30, 0.08)',
        elevated: '0px 8px 24px rgba(43, 35, 30, 0.12)',
        modal: '0px 16px 48px rgba(43, 35, 30, 0.18)',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        full: '9999px',
      },
    },
  },
  plugins: [],
};

