import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <h1>Welcome to our routing website with Header</h1>
      <nav>
        {/* //====== link to use kore reload hobe na */}
        <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
        {/* //=========================== */}
        {/* //======CustomLink for active===================== */}

        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/friends">Friends</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
