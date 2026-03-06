import { useState } from "react";

function SubmitStory(){

  const [name, setName] = useState("");
  const [story, setStory] = useState("");

  const submitStory = () => {
    alert("Story Submitted Successfully!");
  }

  return(
    <div>

      <h2>Share Your Achievement</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <textarea
        placeholder="Write your story"
        value={story}
        onChange={(e)=>setStory(e.target.value)}
      />

      <button onClick={submitStory}>Submit</button>

    </div>
  )
}

export default SubmitStory;