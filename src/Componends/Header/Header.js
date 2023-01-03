import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/page"}>Page</Link>
      <Link to={"/blog"}>Blog</Link>
      <Link to={"/about"}>About</Link>
      </nav>
    </div>
  );
};

export default Header;
