/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * Update your personal info here
 */
const siteProps = {
  name: "Bandapu Bhuvaneswara Rao",
  title: "Aspiring Backend Engineer | MERN Stack Developer",
  email: "bhuvaneswarab@example.com",
  gitHub: "Bandapu-Bhuvaneswara-Rao",
  instagram: "",
  linkedIn: "bandapu-bhuvaneswara-rao",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#1E1E2F"; // dark blue background shade
const secondaryColor = "#E6F4F1"; // soft teal section shade

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
