import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = props => {
  return (
    <div className="footer">
      {/* <Link className="footerItems">Stjepan</Link> */}
      <Link className="footerItems">Powered by: Stjepan & Sebastian</Link>
      {/* <Link className="footerItems">Sebastian</Link> */}
    </div>
  );
};

export default Footer;
