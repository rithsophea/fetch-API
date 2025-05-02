import React, { useEffect, useState } from "react";

function SinglePost({ id = 1 }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then(setPost);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>Single Product (Post)</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>
        <strong>Price:</strong> $19.99 (mock)
      </p>
      <p>
        <strong>Rating:</strong> 4.5 ★ (mock)
      </p>
    </div>
  );
}

export default SinglePost;
