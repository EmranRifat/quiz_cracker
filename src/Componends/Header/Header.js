import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Contexts/UserContext";
import "./Header.css";

const Header = () => {
  const navigate=useNavigate()
  const { user, logOut } = useContext(authContext);
  // console.log(user)

  const handleLogOut = () => {
    logOut()
      .then(() => {
             navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="header">
      <nav>
        <Link className="left-nav" to="/">
          Quiz Cracker
        </Link>
        <div className="nav-items">
          <Link to={"/"}>Home</Link>
          <Link to={"/page"}>Page</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/Login"}>Login</Link>
          <Link to={"/signup"}>Sign-Up</Link>
          {
            user?.email?<button onClick={handleLogOut}><small>Logo Out</small></button>
            :<button><Link  className="login-btn" to="/login">Log In</Link></button>
          }
          {user?.email && <span>Welcome {user.email}</span>}
        </div>
      </nav>
    </div>
  );
};

export default Header;
