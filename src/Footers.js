import React from "react";
import "./Footers.css";
function Footers() {
  return (
    <div className="footers">
      <div className="footer_container">
        <h3>Support</h3>
        <p>Help Center</p>
        <p>Safety information</p>
        <p>Cancellation options</p>
        <p>Our COVID-19 Response</p>
        <p>Supporting people with disabilities</p>
        <p>Report a neighborhood concern</p>
      </div>
      <div className="footer_container">
        <h3>Community</h3>
        <p>Airbnb.org: disaster relief housing</p>
        <p>Support Afghan refugees</p>
        <p>Celebrating diversity & belonging</p>
        <p>Combating discrimination</p>
      </div>
      <div className="footer_container">
        <h3>Hosting</h3>
        <p>Try hosting</p>
        <p>AirCover: protection for Hosts</p>
        <p>Explore hosting resources</p>
        <p> Visit our community forum How to host responsibly</p>
      </div>
      <div className="footer_container">
        <h3>About</h3>
        <p>Newsroom</p>
        <p>Learn about new features</p>
        <p>Letter from our founders</p>
        <p>Careers</p>
        <p>Investors</p>
        <p>Airbnb Luxe</p>
      </div>
    </div>
  );
}

export default Footers;
