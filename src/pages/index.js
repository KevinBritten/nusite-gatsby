import * as React from "react";

import Hero from "./Hero.js";

import "../styles/index.css";

const IndexPage = () => {
  return (
    <div>
      <nav>
        <a href="#home">
          <h2>nuSite</h2>
        </a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#toolkit">Toolkit</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
        <button>Contact</button>
      </nav>
      <main>
        <Hero />
        <section id="projects">
          <div>
            <h2>Projects</h2>
            <p>We help all sorts of people bring their vision to life</p>
          </div>
          <div class="background-blue">
            <div>
              <img src={`/images/icon.svg`} alt="" />
              <h3>Handford Creative &#38; Imaging</h3>
              <p>HTML / CSS / JavaScript / WebFlow / CMS</p>
              <a href="https://www.handford.com">View Live Site</a>
            </div>
            <div>
              <img src={`/images/icon.svg`} alt="" />
              <h3>Handford Creative &#38; Imaging</h3>
              <p>HTML / CSS / JavaScript / WebFlow / CMS</p>
              <a href="https://www.handford.com">View Live Site</a>
            </div>
            <div>
              <img src={`/images/icon.svg`} alt="" />
              <h3>Handford Creative &#38; Imaging</h3>
              <p>HTML / CSS / JavaScript / WebFlow / CMS</p>
              <a href="https://www.handford.com">View Live Site</a>
            </div>
          </div>
        </section>
        <section id="services">
          <div>
            <h2>Services</h2>
            <p>
              We have experience providing the following services to a variety
              of professionals - from individual artists to small businesses,
              and international companies
            </p>
          </div>
          <div class="background-blue">
            <ul>
              <li>E-Commerce</li>
              <li>Web Apps</li>
              <li>CMS Integration</li>
              <li>Migration</li>
              <li>Database Services</li>
              <li>Static Sites</li>
              <li>Maintenance</li>
              <li>Data Analytics</li>
              <li>Visualizations</li>
              <li>Per Hour Freelance</li>
              <li>Consulting</li>
              <li>Web Content</li>
            </ul>
          </div>
        </section>
        <section id="toolkit">
          <div>
            <h2>Toolkit</h2>
            <p>
              As developers, we never stop learning and adapting to new
              technology. These are some of the tools we use:
            </p>
          </div>
          <div class="background-blue">
            <div>
              <img src="./src/images/icon.svg" alt="" />
              <h3>Web Development</h3>
              <p>
                HTML / CSS / JavaScript / Vue.js / Sanity / Webflow / D3.js /
                Python / Django / SQL
              </p>
            </div>
            <div>
              <img src="./src/images/icon.svg" alt="" />
              <h3>Data Analytics</h3>
              <p>Python / R / SQL / AWS</p>
            </div>
            <div>
              <img src="./src/images/icon.svg" alt="" />
              <h3>Design UI / UX</h3>
              <p>Figma / Webflow</p>
            </div>
          </div>
        </section>
        <section id="blog">
          <div class="section-header">
            <h2>Blog</h2>
            <p>
              One of our passions is journalism and we like to combine
              programming and design principles into how we tell stories
            </p>
          </div>
          <div>
            <h3>
              We produce explanatory code-alongs, visual essays, and interviews
              with inspiring people
            </h3>
            <div>
              <h3>SQL Simplified</h3>
              <p>
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam no suscipit quaerendum.
              </p>
            </div>
            <div>
              <h3>Bagel Analytics</h3>
              <p>
                At nam minimum ponderum. Est audiam animal molestiae te. Ex duo
                eripuit mentitum.
              </p>
            </div>
            <button>See More Content</button>
          </div>
          <img src="./src/images/image-placeholder.svg" alt="" />
        </section>
        <section id="contact" class="background-blue">
          <div>
            <h2>Let’s Start With Your Name</h2>
            <p>Tell us how to contact you, and we’ll be in touch shortly</p>
            <form>
              <label for="name">*Name:</label>
              <input type="text" id="name" name="name" />
              <br />
              <label for="email">*Email:</label>
              <input type="text" id="email" name="email" />
              <br />
              <label for="message">Leave us a short message:</label>
              <br />
              <textarea id="message" rows="4"></textarea>
              <br />
              <button>CONTINUE</button>
              <footer>
                <h3>nuSite</h3>
                <div>
                  <p>info@nusite.com</p>
                  <p>Montreal, Qc</p>
                </div>
              </footer>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default IndexPage;
