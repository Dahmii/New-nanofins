import React from "react";

function Details() {
  return (
    <div className="details-section">
      <div className="row">
        <div className="image-section">
          <img src="/illustration1.jpg" alt="Research Work" />
        </div>
        <div className="text-section">
          <h1>Research Work</h1>
          <h3>
            Expert Guidance in Entrepreneurship Development Our research work
            services provide comprehensive support for entrepreneurs, offering
            insights, strategies, and innovative approaches to business growth.
          </h3>
          <div className="btn">
            <button>
              Learn More &nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="image-section">
          <img src="/business.jpg" alt="Personalized Coaching" />
        </div>
        <div className="text-section">
          <h1>Personalized Coaching and Mentorship</h1>
          <h3>
            Immersive and engaging video lessons leveraging storytelling
            techniques. Our personalized coaching and mentorship programs are
            designed to provide tailored guidance and business financing
            solutions.
          </h3>
          <div className="btn">
            <button>
              Read More &nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="image-section">
          <img src="/business2.jpg" alt="Idea Development" />
        </div>
        <div className="text-section">
          <h1>Shaping SME Ecosystems</h1>
          <h3>
            Our ultimate goal is to influence policy directions, fostering a
            supportive environment for Small and Medium-sized Enterprises (SMEs)
            to flourish. We cultivate innovation, drive sustainable success, and
            shape the future of business.
          </h3>
          <div className="btn">
            <button>
              What we Do &nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
