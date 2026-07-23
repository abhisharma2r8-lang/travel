import React from "react";
import "./Contact.css";
import Navbar from "./Navbar";

export default function Contact() {
  return (
    <>
    <Navbar/>
    <section className="contact">
      

      <div className="contact-container">
        <div className="contact-left">
          <p className="subtitle">CONTACT US</p>
          <h1>Let's Plan Your Next Adventure</h1>

          <p>
            Whether you're dreaming of snow-covered mountains,
            tropical beaches, or hidden cultural gems,
            we're here to help you create unforgettable journeys.
          </p>

          <div className="info">
            <div>📍 SCO 69, Shopping Plaza, Sector 17-D, Chandigarh - 160017.</div>
            <div>📞 +91 75898 16063</div>
            <div>✉️ travelista@gmail.com</div>
          </div>
        </div>

        <div className="contact-right">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Destination" />
            <textarea
              rows="6"
              placeholder="Tell us about your dream vacation..."
            ></textarea>

            <button>Send Message ✈</button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}