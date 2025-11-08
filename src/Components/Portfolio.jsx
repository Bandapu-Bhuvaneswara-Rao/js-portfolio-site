import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "FullStack Chat App 🚀",
      description:
        "A real-time chat application built using React.js, Node.js (Express), DaisyUI, and Tailwind CSS with secure communication and modern UI.",
      link: "https://fullstack-chat-app-1zg0.onrender.com",
    },
    {
      title: "Full-Stack Blog Website ✨",
      description:
        "A complete CRUD Blog Platform that allows users to create, edit, and manage blog posts with React, Node.js, and MongoDB integration.",
      link: "https://saba-blog.vercel.app/",
    },
    {
      title: "Music Recommendation System 🎶",
      description:
        "A machine learning-based system that suggests songs based on user preferences using content-based and collaborative filtering approaches.",
      link: "#",
    },
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
