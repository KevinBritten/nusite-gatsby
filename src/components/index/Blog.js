import React from "react";

import { StaticImage } from "gatsby-plugin-image";

function Blog() {
  return (
    <section id="blog">
      <div>
        <h2>Blog</h2>
        <p>
          One of our passions is journalism and we like to combine programming
          and design principles into how we tell stories
        </p>
      </div>
      <div>
        <div className="card card--blue card--blog">
          <div class="blog__title-container">
            <StaticImage
              class="static-img"
              src="../../images/sql.jpeg"
              alt=""
            />
            <h3>SQL Simplified</h3>
          </div>
          <p>
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quaerendum.
          </p>
          <a>Read full story</a>
        </div>
        <div className="card card--blue card--blog">
          <div class="blog__title-container">
            <StaticImage
              class="static-img"
              src="../../images/bagel.jpeg"
              alt=""
            />

            <h3>Bagel Analytics</h3>
          </div>
          <p>
            At nam minimum ponderum. Est audiam animal molestiae te. Ex duo
            eripuit mentitum.
          </p>
          <a>Read full story</a>
        </div>
        <button className="button--blue">See More Content</button>
      </div>
      <img src="./src/images/image-placeholder.svg" alt="" />
    </section>
  );
}

export default Blog;
