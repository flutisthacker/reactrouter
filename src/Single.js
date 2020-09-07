import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { posts } from "./Data";

const Single = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [single_post, setSinglePost] = useState({});
  useEffect(() => {
    const singlePostData = posts.find((post) => {
      return id === post.id.toString();
    });
    setSinglePost(singlePostData);
    setLoading(false);
  }, [id]);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <Link to="/">Go Back</Link>
          <h1>{single_post.title}</h1>
          <p>{single_post.content}</p>
        </div>
      )}
    </div>
  );
};
export default Single;
