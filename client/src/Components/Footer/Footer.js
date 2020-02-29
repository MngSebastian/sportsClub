import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import LogoGithub from "react-ionicons/lib/LogoGithub";

const Footer = props => {
  return (
    <div className="footer">
      <ion-icon name="heart"></ion-icon>
      <Link className="navbarItems">Sebastian</Link>
      <Link className="navbarItems">footer: to be redisigned</Link>
      <Link className="navbarItems">Stjepan</Link>
      <ion-icon name="heart"></ion-icon>
    </div>
  );
};

export default Footer;
