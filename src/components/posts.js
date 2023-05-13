import React from "react";
import Post from "./post";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((entry, index) => (
        <Post entry={entry} key={index} />
      ))}
    </div>
  );
};

export default Posts;
