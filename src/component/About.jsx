import "./About.css";
import Navbar from "./Navbar";
import {
  FaGlobeAsia,
  FaMapMarkedAlt,
  FaUsers,
  FaAward,
  FaPlaneDeparture,
  FaArrowRight,
} from "react-icons/fa";

function About() {
  return (
    <>
    <Navbar/>
    <section className="ta-about">
      <div className="ta-about-container">

      
        <div className="ta-about-left">
          <span className="ta-about-tag">ABOUT TRAVELISTA</span>

          <h1>
            Discover the World with
            <span> Confidence & Comfort</span>
          </h1>

          <p>
            At <strong>Travelista</strong>, we believe every journey should be
            unforgettable. Our expert team creates personalized travel
            experiences, helping you explore breathtaking destinations with
            complete peace of mind.
          </p>

          <p>
            Whether it's a family vacation, honeymoon, adventure trip,
            business tour, or weekend getaway, we provide carefully planned
            itineraries, affordable packages, and 24/7 customer support.
          </p>

          <div className="ta-about-list">
            <div>
              <FaPlaneDeparture className="ta-icon" />
              <span>120+ Amazing Destinations</span>
            </div>

            <div>
              <FaUsers className="ta-icon" />
              <span>20,000+ Happy Travelers</span>
            </div>

            <div>
              <FaAward className="ta-icon" />
              <span>Best Travel Service</span>
            </div>

            <div>
              <FaGlobeAsia className="ta-icon" />
              <span>Worldwide Tour Packages</span>
            </div>
          </div>

          <button className="ta-about-btn">
            Explore More <FaArrowRight />
          </button>
        </div>

        
        <div className="ta-about-right">

          <img
            className="ta-main-img"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Travel"
          />

          
          

        </div>
      </div>

      <div className="ta-about-cards">

        <div className="ta-card">
          <FaGlobeAsia className="ta-card-icon" />
          <h3>Global Destinations</h3>
          <p>
            Explore breathtaking destinations across the world with carefully
            designed travel experiences.
          </p>
        </div>

        <div className="ta-card">
          <FaPlaneDeparture className="ta-card-icon" />
          <h3>Custom Tours</h3>
          <p>
            Personalized travel plans designed according to your preferences
            and budget.
          </p>
        </div>

        <div className="ta-card">
          <FaUsers className="ta-card-icon" />
          <h3>Trusted by Travelers</h3>
          <p>
            Thousands of happy customers trust Travelista for safe and memorable
            journeys.
          </p>
        </div>

      </div>
    </section>
    </>
  );
}

export default About;