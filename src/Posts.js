import React from "react";
import { posts } from "./Data";
import { Link } from "react-router-dom";

const Posts = () => {
  return posts.map((post, index) => {
    return (
      <div className="post" key={index}>
        <h3>{post.title}</h3>
        <Link to={`/posts/${post.id}`}>read article</Link>
      </div>
    );
  });
};
export default Posts;
