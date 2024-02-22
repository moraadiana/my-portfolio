import React from "react";
export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hello, I'm Diana Moraa</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
            Passionate about crafting impactful web applications that improve lives.
            <br /> 
            Currently thriving as a full stack developer, transforming ideas into reality.

            </p>
          </div>
          <a href="https://www.linkedin.com/in/dianamoraan/" target="_blank">
          <button className="btn btn-primary">Let's Connect</button>
          </a>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img.jpg" alt="Hero Section" />
        </div>
      </section>
    );
  }