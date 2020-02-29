import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = props => {
  return (
    <div className="footer">
      <div>
        <Link className="navbarItems">Stjepan</Link>
      </div>
      <Link className="navbarItems">Powered by</Link>
      <Link className="navbarItems">Sebastian</Link>
    </div>
  );
};

export default Footer;
