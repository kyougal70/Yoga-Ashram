/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-10": "#E9E9E9",
        "gray-20": "#CCCCCC",
        "gray-30": "#B3B3B3",
        "gray-40": "#999999",
        "gray-50": "#808080",
        "gray-60": "#666666",
        "gray-70": "#4D4D4D",
        "gray-100": "#333333",
        "gray-500": "#191919",
        "primary-25": "#F8F8FF", // lavender
        "primary-50": "#F0F0FF", // lavender
        "primary-100": "#E6E6FA", // lavender
        "primary-300": "#C6C6E6",
        "primary-500": "#A6A6D2",
        "primary-700": "#8686BE",
        "primary-900": "#6666AA",
        "secondary-100": "#B0E0E6", // powder blue
        "secondary-300": "#90CCCC", // powder blue
        "secondary-500": "#70B8B8",
        "secondary-700": "#509494",
        "secondary-900": "#307E7E",
        "tertiary-25": "#FFE6E6", // pale pink
        "tertiary-50": "#FFD9D9", // pale pink
        "tertiary-100": "#FFB6C1", // pale pink
        "tertiary-300": "#FFA0B3",
        "tertiary-500": "#FF8CA5",
        "tertiary-700": "#FF3765",
        "tertiary-900": "#FF0B39",
      },
      backgroundImage: (theme) => ({
        "gradient-lavenderBlue":
          "linear-gradient(90deg, #E6E6FA 0%, #B0E0E6 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.jpeg')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolveText: "url('./assets/EvolveText.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};

/**
 * Sure, here are corresponding gray colors from light to dark in 5 increments in hexadecimal format that you can use in the pastel color palette for a yoga website, along with primary, secondary, and accent color suggestions in 3 increments:

    Primary color: Lavender: #E6E6FA
    Secondary color: Powder blue: #B0E0E6
    Accent color: Pale pink: #FFB6C1
    Light gray: #D3D3D3 (secondary color)
    Gray-10: #E9E9E9 (secondary color)
    Gray-20: #CCCCCC (secondary color)
    Gray-30: #B3B3B3 (secondary color)
    Gray-40: #999999 (secondary color)
    Gray-50: #808080 (secondary color)
    Gray-60: #666666 (accent color)
    Gray-70: #4D4D4D (accent color)
    Gray-80: #333333 (accent color)
    Dark gray: #191919 (accent color)

In this color palette, the primary color (lavender) can be used as the dominant color on your website, while the secondary colors (powder blue, light gray, and the various shades of gray) can be used as accents or as the background colors for your website. The accent colors (pale pink, gray-60, gray-70, gray-80, and dark gray) can be used sparingly to add pops of color and contrast to your website. You can mix and match these colors to create a cohesive look and add a touch of sophistication to your website.
 */
