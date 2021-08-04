import React from "react";

function Contact() {
  return (
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
  );
}

export default Contact;
