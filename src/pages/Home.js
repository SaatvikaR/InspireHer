import React from "react";

function Home({ setPage }) {

  // Inspirational Quotes Array
  const quotes = [
    "Empowered women empower women.",
    "The future is female.",
    "Your story can inspire someone today.",
    "Believe in yourself and all that you are.",
    "Strong women lift each other up.",
    "Your voice matters.",
    "Courage is like a muscle — the more you use it, the stronger it gets.",
    "Every small step counts toward big dreams."
  ];

  // Pick random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="hero">

      <div className="hero-content">

        <h1 className="logo">InspireHer</h1>

        <h2>Stories That Empower Women</h2>

        {/* Quote of the Day */}
        <h3 style={{ color: "#6a1b9a", margin: "20px 0" }}>
          Quote of the Day: "{randomQuote}"
        </h3>

        <p className="tagline">
          Share your journey. Inspire others.
          Celebrate the strength and success of women everywhere.
        </p>

        <div className="buttons">
          <button onClick={() => setPage("stories")}>
            View Stories
          </button>

          <button onClick={() => setPage("submit")}>
            Add Your Story
          </button>
        </div>

      </div>

    </div>
  );
}

export default Home;
