import React from "react";

import { StaticImage } from "gatsby-plugin-image";

function Projects() {
  return (
    <section id="projects">
      <div>
        <h2>Projects</h2>
        <p>
          We help all sorts of people <br />
          bring their vision to life
        </p>
      </div>
      <div className="background-blue">
        <div class="project__item-outer">
          <div className="project__item">
            <div>
              <h3>Handford Creative &#38; Imaging</h3>
              <p>HTML / CSS / JavaScript / WebFlow / CMS</p>

              <a href="https://www.handford.com">View Live Site</a>
            </div>
            <StaticImage
              objectFit="contain"
              src="../../images/handford-project.svg"
              alt=""
            />
          </div>
        </div>
        <div class="project__item-outer">
          <div className="project__item">
            <div>
              <h3>Marie Khouri Sculpture</h3>
              <p>HTML / CSS / JavaScript / Vue.Js / CMS</p>
              <a href="https://www.handford.com">View Live Site</a>
            </div>
            <StaticImage
              objectFit="contain"
              src="../../images/marie-khouri-project.svg"
              alt=""
            />{" "}
          </div>
        </div>
        <div class="project__item-outer">
          <div className="project__item">
            <div>
              <h3>Bradbury Architecture</h3>
              <p>HTML / CSS / JavaScript / Vue.Js / CMS</p>
              <a href="https://www.handford.com">View Live Site</a>
            </div>
            <StaticImage
              objectFit="contain"
              src="../../images/bradbury-project.svg"
              alt=""
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
