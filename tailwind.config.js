/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        type: 'type 2.7s ease-out .8s infinite alternate both',
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '5%, 10%': { transform: 'translateX(1ch)' },
          '15%, 20%': { transform: 'translateX(2ch)' },
          '25%, 30%': { transform: 'translateX(3ch)' },
          '35%, 40%': { transform: 'translateX(4ch)' },
          '45%, 50%': { transform: 'translateX(5ch)' },
          '55%, 60%': { transform: 'translateX(6ch)' },
          '65%, 70%': { transform: 'translateX(7ch)' },
          '75%, 80%': { transform: 'translateX(8ch)' },
          '85%, 90%': { transform: 'translateX(9ch)' },
          '95%, 100%': { transform: 'translateX(11ch)' },
        },
      },

      colors: {
        whitesmoke: {
          "100": "#f4f4f4",
          "200": "#f2f2f2",
        },
        gray: {
          "100": "#222",
          "200": "#1b2131",
          "300": "#151a27",
        },
        lavender: "#d3defb",
        white: "#fff",
        black: "#000",
        gainsboro: "#d9d9d9",
        lightgray: "#cbcbcb",
      },
      fontFamily: {
        poppins: "Poppins",
        quicksand: "Quicksand",
      },
      borderRadius: {
        "4xs": "9px",
        "8xs": "5px",
        "66xl-5": "85.5px",
        "3xs": "10px",
        lg: "18px",
        "31xl": "50px",
        "2xs": "11px",
        "7xl": "26px",
        "106xl": "125px",
      },
    },
    fontSize: {
      base: "16px",
      "29xl": "48px",
      lg: "18px",
      xl: "20px",
      sm: "14px",
      "13xl": "32px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
