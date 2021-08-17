import * as React from "react";
import loadable from "@loadable/component";

import "../styles/index.css";
import "../styles/global.css";
import "../styles/variables.css";
import "../styles/nav.css";
import "../styles/hero.css";
import "../styles/projects.css";
import "../styles/blog.css";

import Nav from "../components/index/Nav.js";
import Hero from "../components/index/Hero.js";
const Projects = loadable(() => import("../components/index/Projects.js"));
const Services = loadable(() => import("../components/index/Services.js"));
const Blog = loadable(() => import("../components/index/Blog.js"));
const Contact = loadable(() => import("../components/index/Contact.js"));
const Toolkit = loadable(() => import("../components/index/Toolkit.js"));

const IndexPage = () => {
  return (
    <div>
      <main>
        <Nav />
        <Hero />
        <Projects />
        <Services />
        <Toolkit />
        <Blog />
        <Contact />
      </main>
    </div>
  );
};

export default IndexPage;
