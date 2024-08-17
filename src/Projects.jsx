function Projects() {
  return (
    <div className="projects-section">
      <div className="banner1">
        <h1>Explore a few of our most impactful projects</h1>
        <div className="btn">
          <button>
            Learn More &nbsp;
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div className="projects">
        <div className="project-item">
          <div className="project-img">
            <img src="/illustration1.jpg" alt="Description" />
          </div>
          <div className="project-text">
            <h1>Levi's</h1>
            <p>
              We partnered with Levi's, an icon of American industry and
              culture, to reimagine levi.com for a new generation of shoppers
              and the digital future of retail.
            </p>
          </div>
        </div>

        <div className="project-item">
          <div className="project-img">
            <img src="/business.jpg" alt="Description" />
          </div>
          <div className="project-text">
            <h1>Drop box Campaign</h1>
            <p>
              Dropbox is on a path to becoming a multi-product company. To bring
              their customers new and old along on that journey, we helped
              reimagine how Dropbos engages with their audiences.
            </p>
          </div>
        </div>
      </div>

      <div className="partners">
        <div className="partners-logo">
          <img src="/ashford.png" alt="" />
          <img src="/themayorrLogo-01.png" alt="" />
          <img src="/easyhnf.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
