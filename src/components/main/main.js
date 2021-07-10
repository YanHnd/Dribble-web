import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Header from "./../header/header";
import background from "./background.png";

/**
 * @author
 * @function Main
 **/

const Main = (props) => {
  let main = useRef(null);
  let header = useRef(null);
  let secondary = useRef(null);
  let buttons = useRef(null);
  let image = useRef(null);

  useEffect(() => {
    gsap.to(main, 0.1, { visibility: "visible" });

    const t1 = gsap.timeline({ repeatDelay: 1 });

    const fadeinText = gsap.from(header, {
      opacity: 0,
      translateY: -30,
      duration: 1.5,
      ease: "power3.inOut",
    });
    const fadeinsecondary = gsap.from([secondary, buttons], {
      opacity: 0,
      translateY: -20,
      duration: 0.5,
      ease: "power1.inOut",
    });
    const fadeinsImage = gsap.from(image, {
      opacity: 0,
      translateY: -20,
      duration: 0.5,
      ease: "power1.inOut",
    });
    t1.add(fadeinText);
    t1.add(fadeinsecondary);
    t1.add(fadeinsImage);
  }, []);
  return (
    <div ref={(el) => (main = el)} className="main">
      <Header></Header>
      <div className="grid">
        <div className="left">
          <div ref={(el) => (header = el)} className="text-header">
            <h1>Grapeslab </h1>
            <h3>Online School</h3>
          </div>

          <div ref={(el) => (secondary = el)} className="description">
            <p>
              "the more that you learn ,the more things you will know, the more
              places yoou will go and we will help you"
            </p>
          </div>
          <div ref={(el) => (buttons = el)} className="buttons">
            <button className="start">Get started now</button>
            <div className="watch">
              <button>
                <img src="" alt="" />
              </button>
              <h4>watch videos</h4>
            </div>
          </div>
        </div>
        <div ref={(el) => (image = el)} className="right">
          <img src={background} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
