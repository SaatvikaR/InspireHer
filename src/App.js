import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SubmitStory from "./pages/SubmitStory";
import Stories from "./pages/Stories";

function App() {
  return (
    <Router>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Submit Story Page */}
        <Route path="/submit" element={<SubmitStory />} />

        {/* Stories Page */}
        <Route path="/stories" element={<Stories />} />

      </Routes>
    </Router>
  );
}

export default App;