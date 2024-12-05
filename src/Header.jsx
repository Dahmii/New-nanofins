import React from "react";

function Header() {
  return (
    <div className="container">
      <div className="heading">
        <div className="cssanimation hu__hu__">
          <h1>Unlock Your Business Potential</h1>
        </div>

        <p>
          At NANO FIN SCHEME, we empower visionary entrepreneurs, innovative
          firms, and forward-thinking governments to navigate the complexities
          of business and achieve sustainable success. Our cutting-edge research
          and development expertise helps you discover the bedrock of your
          ideas, transforming them into thriving enterprises.
        </p>
      </div>

      <div className="btn">
        <button>
          Get Started &nbsp;
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </button>
        <button className="learn">
          Learn More &nbsp;
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </button>
      </div>

      <div className="video-container">
        <video controls>
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="banner1">
        <p>
          From Concept to Movement: Our proprietary methodology guides you from
          ideation to scaling, unlocking your Value Proposition (VP) and fueling
          growth. Collaborative teams work closely with you to refine your
          vision, cultivate a competitive edge, and propel your business
          forward.
        </p>
      </div>
    </div>
  );
}

export default Header;
