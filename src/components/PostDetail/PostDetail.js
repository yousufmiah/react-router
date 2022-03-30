import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  return (
    <div>
      <h3>this is post detail:{postId} </h3>
      <h4>Title: {post.title}</h4>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default PostDetail;
