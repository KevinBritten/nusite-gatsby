import React from "react";

function Contact() {
  return (
    <section id="contact" className="background-blue">
      <div>
        <h2>Let’s Start With Your Name</h2>
        <p>Tell us how to contact you, and we’ll be in touch shortly</p>
        <form>
          <div>
            <label htmlFor="name">*Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <label htmlFor="email">*Email:</label>
          <input type="text" id="email" name="email" />
          <br />
          <label htmlFor="message">Leave us a short message:</label>
          <textarea id="message" rows="4"></textarea>
          <button className="button--white">CONTINUE</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
