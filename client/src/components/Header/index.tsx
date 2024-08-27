import React from "react";
import "./index.css";
import { useAuth } from "@context/AuthContext";
import Logo from "@assets/logo.svg";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const auth = useAuth();
  return (
    <header className="header">
      <Link to={"/"}>
        <img src={Logo} alt="logo" className="header-logo" />
      </Link>
      <div className="header-account-container">
        <Link to={auth.user ? "me" : "login"} className="header-account">
          <p>{auth.user ? auth.user.login : "Login"}</p>
        </Link>
        {auth.user && <button onClick={() => auth.logout()}>Exit</button>}
      </div>
    </header>
  );
};

export default Header;
