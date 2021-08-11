import React from "react";

function Services() {
  return (
    <section id="services">
      <div>
        <h2>Services</h2>
        <p>
          We have experience providing the following services to a variety of
          professionals - from individuals and artists to small businesses, and
          international companies
        </p>
      </div>
      <div className="background-blue">
        <h3>Design &#38; Development</h3>
        <ul>
          <li>UX &#38; UI Design</li>
          <li>Web &#38; CMS Development</li>
          <li>Integration &#38; Automation</li>
        </ul>
        <button className="button--blue">Learn more</button>
        <h3>Maintenance</h3>
        <ul>
          <li>Support</li>
          <li>Ongoing Improvements</li>
          <li>Training</li>
        </ul>
        <button className="button--blue">Learn more</button>

        <h3>Web Analytics</h3>
        <ul>
          <li>Content Analytics</li>
          <li>A / B Testing</li>
          <li>SEO Analytics</li>
        </ul>
        <button className="button--blue">Learn more</button>
      </div>
    </section>
  );
}

export default Services;
