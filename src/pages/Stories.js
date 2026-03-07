import React, { useState } from "react";

function Stories({ stories, setStories,setPage }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [comments, setComments] = useState({});
  const [commentInput, setCommentInput] = useState({});

  const categories = ["All", "Education","Sports", "Career", "Life", "Leadership"];

  const filteredStories =
    selectedCategory === "All"
      ? stories
      : stories.filter((story) => story.category === selectedCategory);

  const handleLike = (id) => {
    const updatedStories = stories.map((story) =>
      story.id === id ? { ...story, likes: (story.likes || 0) + 1 } : story
    );
    setStories(updatedStories);

  };

  const addComment = (id) => {
    const newComment = commentInput[id];

    if (!newComment) return;

    setComments({
      ...comments,
      [id]: [...(comments[id] || []), newComment]
    });

    setCommentInput({
      ...commentInput,
      [id]: ""
    });
  };

  return (
    <div>

      <h2>Stories</h2>

      {/* CATEGORY FILTER */}

      <div className="filters">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setSelectedCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* STORIES */}

      {filteredStories.length === 0 ? (
        <p>No stories in this category yet.</p>
      ) : (
        filteredStories.map((story) => (
          <div key={story.id} className="story">

            <h3>{story.title}</h3>

            <p><strong>{story.name}</strong></p>

            <p><em>{story.category}</em></p>

            <p>{story.content}</p>

            {/* LIKE BUTTON */}

            <button onClick={() => handleLike(story.id)}>
              ❤️ Like ({story.likes || 0})
            </button>

            {/* COMMENTS */}

            <div className="comments">

              <h4>Comments</h4>

              {(comments[story.id] || []).map((c, index) => (
                <p key={index}>💬 {c}</p>
              ))}

              <input
                placeholder="Write a comment..."
                value={commentInput[story.id] || ""}
                onChange={(e) =>
                  setCommentInput({
                    ...commentInput,
                    [story.id]: e.target.value
                  })
                }
              />

              <button onClick={() => addComment(story.id)}>
                Add Comment
              </button>

            </div>

          </div>
        ))
      )}

      <br />

      <button onClick={() => setPage("home")}>
        Back to Home
      </button>

    </div>
  );
}

export default Stories;