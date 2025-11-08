import React from "react";

const About = () => {
  return (
    <section className="about-section" id="about" style={{ padding: "3rem", textAlign: "center" }}>
      <h2>About Me</h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8rem" }}>
        Hi 👋 I'm <strong>Bandapu Bhuvaneswara Rao</strong>, a passionate
        <strong> Full Stack Developer </strong> currently pursuing my B.Tech in{" "}
        <strong>Computer Science and Engineering</strong> at Prasad V Potluri Siddhartha Institute
        of Technology.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8rem" }}>
        I’m deeply interested in <strong>Web Development</strong>, <strong>Machine Learning</strong>
        , and <strong>Blockchain Technology</strong>. I enjoy building full-stack applications and
        solving real-world problems using modern frameworks like React, Node.js, and Express.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8rem" }}>
        Apart from coding, I love exploring new technologies, contributing to open-source projects,
        and constantly improving my skills in backend architecture and database management.
      </p>
    </section>
  );
};

export default About;
