import React from "react";

function Toolkit() {
  return (
    <section id="toolkit">
      <div>
        <h2>Toolkit</h2>
        <p>
          As developers, we never stop learning and adapting to new technology.
          These are some of the tools we use:
        </p>
      </div>
      <div className="background-blue">
        <div>
          <img src="./src/images/icon.svg" alt="" />
          <h3>Web Development</h3>
          <p>
            HTML / CSS / JavaScript / Vue.js / Sanity / Webflow / D3.js / Python
            / Django / SQL
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
  );
}

export default Toolkit;
