import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  let header = useRef(null);
  useEffect(() => {
    gsap.from(header, {
      opacity: 0,
      translateY: -20,
      duration: 0.5,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div ref={(el) => (header = el)} className="header">
      <div className="logo"> grapeslab</div>
      <ul className="middle">
        <li>Courses</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Scholarship</li>
      </ul>
      <div className="right">
        <a href="">Log In</a>
        <button>Sign Up</button>
      </div>
      <span className="toggle"></span>
    </div>
  );
};

export default Header;
