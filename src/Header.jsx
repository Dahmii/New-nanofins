function Header() {
  return (
    <div className="container">
      <div className="heading">
        <h1>Build. Grow. Innovate.</h1>
        <p>
          We are investing $3 million over the next three years in our <br />
          Build|Grow|Serve Program, created to support and empower Black and
          <br />
          underrepresented communities.
        </p>
      </div>

      <div className="btn">
        <button>
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
        <h1>
          We enrich human lives through the thoughtful application of design and
          technology
        </h1>
      </div>
    </div>
  );
}

export default Header;
