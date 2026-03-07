import React, { useState } from "react";

function SubmitStory({ stories, setStories, setPage }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    const newStory = {
      id: Date.now(),
      name,
      title,
      category,
      content
    };

    setStories([...stories, newStory]);

    setPage("stories");
  };

  return (
    <div>
      <h2>Add Your Story</h2>

      <input
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Story title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Write your story..."
        onChange={(e) => setContent(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Submit Story
      </button>

      <br /><br />

      <button onClick={() => setPage("home")}>
        Back to Home
      </button>
    </div>
  );
}

export default SubmitStory;