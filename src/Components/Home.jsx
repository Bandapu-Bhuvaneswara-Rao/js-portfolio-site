import React from "react";
import PropTypes from "prop-types";

const Home = ({ name, title }) => {
  return (
    <section
      id="home"
      className="min-height home-section"
      style={{
        backgroundColor: "#f5f7fa",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1>{name}</h1>
      <h2>{title}</h2>
    </section>
  );
};

Home.defaultProps = {
  name: "Bandapu Bhuvaneswara Rao",
  title: "Aspiring Backend Engineer | MERN Stack Developer",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
