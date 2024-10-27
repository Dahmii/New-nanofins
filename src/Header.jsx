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
          of business and achieve sustainable success.
        </p>
        {/* <p>
          We are investing $3 million over the next three years in our <br />
          Build|Grow|Serve Program, created to support and empower Black and
          <br />
          underrepresented communities.
        </p> */}
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
          We encourage businesses to discover the core of their ideas and build
          a strong foundation for a sustainable enterprise.
        </p>
      </div>
    </div>
  );
}

export default Header;
