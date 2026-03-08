import React, { useState } from "react";

function Stories({ stories, setStories, setPage }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [comments, setComments] = useState({});
  const [commentInput, setCommentInput] = useState({});
  const [mentorRequests, setMentorRequests] = useState({});

  const categories = ["All", "Education", "Career", "Life", "Leadership", "Sports"];

  const filteredStories =
    selectedCategory === "All"
      ? stories
      : stories.filter((story) => story.category === selectedCategory);

  // Like Feature
  const handleLike = (id) => {

    const updatedStories = stories.map((story) =>
      story.id === id
        ? { ...story, likes: (story.likes || 0) + 1 }
        : story
    );

    setStories(updatedStories);
  };

  // Comment Feature
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

  // Mentorship Feature
  const requestMentorship = (id) => {

    setMentorRequests({
      ...mentorRequests,
      [id]: true
    });
  };

  return (

    <div>

      <h2>Stories</h2>

      {/* Category Filters */}
      <div className="filters">

        {categories.map((cat) => (
          <button key={cat} onClick={() => setSelectedCategory(cat)}>
            {cat}
          </button>
        ))}

      </div>

      {/* Stories */}
      {filteredStories.length === 0 ? (

        <p>No stories in this category yet.</p>

      ) : (

        filteredStories.map((story) => (

          <div key={story.id} className="story">

            <h3>{story.title}</h3>

            {/* Anonymous Logic */}
            <p>
              <strong>
                {story.anonymous ? "Anonymous" : story.name}
              </strong>
            </p>

            <p><em>{story.category}</em></p>

            <p>{story.content}</p>

            {/* Like Button */}
            <button onClick={() => handleLike(story.id)}>
              ❤️ Like ({story.likes || 0})
            </button>

            {/* Mentorship Button */}
            <button onClick={() => requestMentorship(story.id)}>
              🤝 Request Mentorship
            </button>

            {/* Mentorship Confirmation */}
            {mentorRequests[story.id] && (
              <p style={{ color: "green" }}>
                Mentorship request sent! A mentor will contact you soon.
              </p>
            )}

            {/* Comments */}
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