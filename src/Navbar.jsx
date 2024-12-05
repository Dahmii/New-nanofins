import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/nanofins-logo-icon.png" alt="Logo" className="logo" />
      </div>

      {/* Toggle button for mobile view */}
      <div className="mobile-menu-icon" onClick={handleMobileMenuToggle}>
        <i className={isMobileMenuOpen ? "fa fa-times" : "fa fa-bars"}></i>
      </div>

      {/* Navbar list */}
      <ul className={isMobileMenuOpen ? "navbar-list mobile" : "navbar-list"}>
        <li className="navbar-item">
          <a className="navbar-link" href="#home">
            WHAT WE DO
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#about">
            WHO WE ARE
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#contact">
            FOR YOU
          </a>
        </li>
        <li className="navbar-item">
          <a className="navbar-link" href="#contact">
            OPPORTUNITIES
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
