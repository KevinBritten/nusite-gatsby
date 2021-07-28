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
        <section id="toolkit"></section>

        <section id="stories"></section>
      </main>
    </div>
  );
};

export default IndexPage;
