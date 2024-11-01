import React from 'react';
 // You will define your styles in this file

const WhatWeOffer = () => {
  return (
    <section className="what-we-offer">
      <h2>What We Offer</h2>
      <div className="offer-container">
        <div className="offer-card">
          <i className="fas fa-users offer-icon"></i> {/* Replace with the icon you need */}
          <h3>Best Output</h3>
          <p>
          At Connecting Dot Advertising Agency, we are committed to delivering the best output, combining creativity, precision, and strategy to ensure impactful results that elevate our clients' brands and drive success
          </p>
        </div>
        <div className="offer-card">
          <i className="fas fa-clock offer-icon"></i>
          <h3>On Time Service</h3>
          <p>
          Connecting Dot Advertising Agency delivers top-quality results, always on time—meeting client deadlines with reliability and precision
          </p>
        </div>
        <div className="offer-card">
          <i className="fas fa-coins offer-icon"></i>
          <h3>Negotiable Rates</h3>
          <p>
            We have the most competitive rates in the industry, with negotiable hourly or monthly rates.
          </p>
        </div>
        <div className="offer-card">
          <i className="fas fa-arrows-alt-h offer-icon"></i> {/* Replace with appropriate icon */}
          <h3>Flexible Contracts</h3>
          <p>
          Flexible contract options at Connecting Dot Advertising Agency ensure solutions tailored to meet your unique business needs.          </p>
        </div>
        <div className="offer-card">
          <i className="fas fa-industry offer-icon"></i> {/* Replace with appropriate icon */}
          <h3>Experienced Staffs</h3>
          <p>
          Connecting Dot Advertising Agency is powered by experienced staff committed to delivering excellence on every project          </p>
        </div>
        <div className="offer-card">
          <i className="fas fa-shield-alt offer-icon"></i> {/* Replace with appropriate icon */}
          <h3>Tailored Solutions</h3>
          <p>
          We provide customized advertising strategies to meet the unique needs of each client.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
