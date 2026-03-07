import React from "react";

function Home({ setPage }) {
  return (
    <div className="hero">

      <div className="hero-content">

        <h1 className="logo">InspireHer</h1>

        <h2>Stories That Empower Women</h2>

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