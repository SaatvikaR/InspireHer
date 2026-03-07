import React, { useState,useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import SubmitStory from "./pages/SubmitStory";

function App() {
  const [page, setPage] = useState("home");
  const [stories, setStories] = useState(() => {
  const savedStories = localStorage.getItem("stories");
  return savedStories ? JSON.parse(savedStories) : [];
});
useEffect(() => {
  localStorage.setItem("stories", JSON.stringify(stories));
}, [stories]);
  if (page === "home") {
    return (
      <div className="container">
        <Home setPage={setPage} />
      </div>
    );
  }

  if (page === "stories") {
    return (
      <div className="container">
        <Stories stories={stories} setPage={setPage} />
      </div>
    );
  }

  if (page === "submit") {
    return (
      <div className="container">
        <SubmitStory
          stories={stories}
          setStories={setStories}
          setPage={setPage}
        />
      </div>
    );
  }
}

export default App;
