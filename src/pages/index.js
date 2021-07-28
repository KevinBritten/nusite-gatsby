import * as React from "react";

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
        <a href="#stories">Stories</a>
        <a href="#contact">Contact</a>
        <button>Contact</button>
      </nav>
      <main>
        <section id="home">
          <h1>Simplify Your Web Experience</h1>
          <p>Working with us means focusing on your vision</p>

          <div>
            <button>Request Quote</button>
            <button>Learn More</button>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <p>We help all sorts of people bring their vision to life</p>
          <div>
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
          <h2>Services</h2>
          <p>
            We have experience providing the following services to a variety of
            professionals - from individual artists to small businesses, and
            international companies
          </p>
          <div>
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
          <h2>Toolkit</h2>
          <p>
            As developers, we never stop learning and adapting to new
            technology. These are some of the tools we use:
          </p>
          <div>
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
        <section id="stories">
          <h2>Blog</h2>
          <p>
            One of our passions is journalism and we like to combine programming
            and design principles into how we tell stories
          </p>
          <div>
            <h2>
              We produce explanatory code-alongs, visual essays, and interviews
              with inspiring people
            </h2>
            <div>
              <h2>SQL Simplified</h2>
              <p>
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam no suscipit quaerendum.
              </p>
            </div>
            <div>
              <h2>Bagel Analytics</h2>
              <p>
                At nam minimum ponderum. Est audiam animal molestiae te. Ex duo
                eripuit mentitum.
              </p>
            </div>
            <button>See More Content</button>
          </div>
          <img src="./src/images/image-placeholder.svg" alt="" />
        </section>
        <section id="contact">
          <h1>Let’s Start With Your Name</h1>
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
            <textarea id="message" rows="4" cols="50"></textarea>
            <br />
            <button>CONTINUE</button>
            <footer>
              <h3>nuSite</h3>
              <p>info@nusite.com</p>
              <p>Montreal, Qc</p>
            </footer>
          </form>
        </section>
      </main>
    </div>
  );
};

export default IndexPage;
