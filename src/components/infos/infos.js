import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ReactComponent as Survey } from "../../assets/analytics.svg";
import { ReactComponent as Network } from "../../assets/network.svg";
import { ReactComponent as Hosting } from "../../assets/hosting.svg";
import { ReactComponent as Interface } from "../../assets/interface.svg";
import { Timeline } from "gsap/gsap-core";
gsap.registerPlugin(ScrollTrigger);
/**
 * @author
 * @function Infos
 **/

const Infos = (props) => {
  let card1 = useRef(null);
  let card2 = useRef(null);
  let card3 = useRef(null);
  let card4 = useRef(null);
  let textheader = useRef(null);
  useEffect(() => {
    const t1 = new Timeline({
      scrollTrigger: {
        trigger: card1,
        start: "top center",
      },
    });
    const fadein = gsap.from([card1, card2, card3, card4], {
      opacity: 0,
      stagger: 0.3,
      translateY: -20,
      duration: 0.5,
      ease: "power1.inOut",
    });
    const fadeintext = gsap.from(textheader, {
      opacity: 0,
      translateY: -20,
      duration: 0.5,
      ease: "power1.inOut",
    });
    t1.add(fadein);
    t1.add(fadeintext);
  }, []);
  return (
    <div className="infos">
      <div className="features">
        <div ref={(el) => (card1 = el)} className="card">
          <Survey></Survey>
          <div className="card-text">
            <h3>Easy-To-Use user interface</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div ref={(el) => (card2 = el)} className="card">
          <Network></Network>
          <div className="card-text">
            <h3>Easy-To-Use user interface</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div ref={(el) => (card3 = el)} className="card">
          <Hosting></Hosting>
          <div className="card-text">
            <h3>Easy-To-Use user interface</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. a</p>
          </div>
        </div>
        <div ref={(el) => (card4 = el)} className="card">
          <Interface></Interface>
          <div className="card-text">
            <h3>Easy-To-Use user interface</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div ref={(el) => (textheader = el)} className="description">
        <h2>A vibrant e-learning platform to boost you </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum
          molestias exercitationem aliquam autem assumenda nihil in neque! Non
          fugit officia consectetur eos, omnis id harum maxime. Eius, velit
          sint.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint laborum
          molestias exercitationem aliquam autem assumenda nihil in neque.
        </p>
        <button>Explore more</button>
      </div>
    </div>
  );
};

export default Infos;
