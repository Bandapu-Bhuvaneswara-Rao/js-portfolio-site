import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        📞 Contact: <strong>6304958943</strong>
      </p>
      <p>
        📧 Email:{" "}
        <a href="mailto:bhuvaneswararaobandapu@gmail.com">bhuvaneswararaobandapu@gmail.com</a>
      </p>
      <p>
        🔗{" "}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        |
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          {" "}
          GitHub
        </a>
      </p>
      <p>© {new Date().getFullYear()} Bandapu Bhuvaneswara Rao</p>
    </footer>
  );
};

export default Footer;
