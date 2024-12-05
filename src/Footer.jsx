import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="banner1">
        <h1>Partner with Us</h1>
        <p>
          Discover the transformative power of NANOFINS. Let's embark on a
          journey to unlock your business potential and create a lasting impact.
        </p>
        <div className="btn">
          <button>
            Get in touch &nbsp;
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Our Recent Product</h3>
          <p>
            Exposition to help boost profits with searchlight beamed on the
            'Positives of the National 2024 Budget'
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
