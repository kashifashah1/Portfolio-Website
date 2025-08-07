import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
import "./About.css";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m Kashifa Shah, a Computer Science student passionate about
              building seamless, user-friendly web applications that address
              real-world challenges. With a solid foundation in data structures
              and algorithms (DSA), I focus on creating efficient, scalable, and
              impactful digital solutions. My approach blends creativity,
              technology, and a process-oriented mindset to deliver high-quality
              results. I’m eager to continue expanding my expertise in web
              development and contribute meaningfully to the future of the web.
            </p>
            <p>
              My passion lies in transforming ideas into interactive,
              functional, and aesthetically pleasing web experiences. I enjoy
              solving complex problems through clean code, intuitive design, and
              innovative solutions, constantly pushing myself to learn and adapt
              to the evolving web landscape.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>C, C++, java </p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>3+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>10+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    
  );
};

export default About;
