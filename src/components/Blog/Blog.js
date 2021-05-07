import React from "react";
import styles from "../pages/Pages.module.scss";
import { Switch, Route, Link } from "react-router-dom";
import "./Blog.css";

const dummyPosts = [
  {
    title: "Example Title 1",
    author: "John Doe",
    slug: "blog1"
  },
  {
    title: "Example Title 2",
    author: "John Doe",
    slug: "blog2"
  }
];

const BlogSection = ({ title, author, slug }) => {
  return (
    <div className="blog">
      <h2>
        <Link to={`/blog/${slug}`}>{title}</Link>
      </h2>

      <h3>{author}</h3>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="container">
      {dummyPosts.map(post => (
        <BlogSection title={post.title} author={post.author} slug={post.slug} />
      ))}
    </div>
  );
};

export default Blog;
