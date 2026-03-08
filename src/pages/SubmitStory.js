import React, { useState } from "react";

function SubmitStory({ stories, setStories, setPage }) {

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const handleSubmit = () => {

    const newStory = {
      id: Date.now(),
      name,
      title,
      category,
      content,
      anonymous
    };

    setStories([...stories, newStory]);

    setPage("stories");
  };

  return (
    <div>

      <h2>Add Your Story</h2>

      <input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      {/* Anonymous Option */}
      <label>
        <input
          type="checkbox"
          checked={anonymous}
          onChange={(e) => setAnonymous(e.target.checked)}
        />
        Post anonymously
      </label>

      <br /><br />

      <input
        placeholder="Story title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Write your story..."
        value={content}
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