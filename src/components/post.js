import React from "react";
import { marked } from "marked";

const Post = ({ entry }) => {
  const {
    author,
    entryContent,
    entrySummary,
    entryTags,
    featuredImage,
    title,
  } = entry.fields;
  const entryContentMarked = marked(entryContent);

  return (
    <div className="post">
      <h3 className="title">{title}</h3>
      <p className="author">{author}</p>
      {featuredImage && (
        <img
          className="featured-image"
          src={featuredImage.fields.file.url}
          title={featuredImage.fields.title}
        />
      )}
      <section dangerouslySetInnerHTML={{ __html: entryContentMarked }} />
    </div>
  );
};

export default Post;
