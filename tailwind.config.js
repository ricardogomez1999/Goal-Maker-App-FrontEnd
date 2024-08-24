/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        welcome: "url('/WelcomeCardImg.webp')",
        activities: "url('/activitiesImageDB.webp')",
        mealsBg: "url('/todaysMeals.webp')",
        financesBg: "url('/todaysFinances.webp')",
      },
      colors: {
        "primary-color": "#FF3131",
        "nice-pink": "#ED3E79",
        "nice-orange": "#F3806B",
        "nice-black": "#2e2c3c",
        "nice-blue": "#4BACAE",
        "nice-darkerBlue": "#209092",
        "nice-red": "#FF3131",
        "nice-green": "#13CA72",
        lightGray: "#F8F8F8",
        textGray: "#767676",
        transparent: "transparent",
      },
      backgroundPosition: {
        "right-4": "center right -5rem",
        "right-5": "bottom right -4rem",
      },
    },
  },
  plugins: [],
};
