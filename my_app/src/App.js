import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";
i 


function App() {
  return (
    <Router>
      <div className="container text-center mt-4">
        <h1 className="mb-4">📊 Social Media Analytics</h1>
        <nav className="mb-4">
          <Link to="/top-users" className="btn btn-primary m-2">Top Users</Link>
          <Link to="/trending-posts" className="btn btn-success m-2">Trending Posts</Link>
          <Link to="/feed" className="btn btn-danger m-2">Live Feed</Link>
        </nav>
        <Routes>
          <Route path="/top-users" element={<TopUsers />} />
          <Route path="/trending-posts" element={<TrendingPosts />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
