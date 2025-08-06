import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
const Hero = () => {
  return (
    <div className="hero">
      <img className="hero-img" src={profile_img} alt="" />
      <h1><span>I'm Kashifa Shah,</span> Aspiring Software Engineer.</h1>
      <p>
        Passionate Computer Science student focused on web development, creating scalable, user-friendly applications that solve real-world problems with innovation.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
            Connect with me
        </div>
        <div className="hero-resume">
            My Resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
