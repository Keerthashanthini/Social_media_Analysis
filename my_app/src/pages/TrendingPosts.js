import React, { useEffect, useState } from "react";
import { fetchTrendingPosts } from "../api";

function TrendingPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchTrendingPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div className="container">
      <h2 className="mb-4">🔥 Trending Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <small className="text-muted">💬 {post.commentCount} comments</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrendingPosts;
