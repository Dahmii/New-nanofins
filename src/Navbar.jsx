function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src=".\src\assets\nanofins-logo-icon.png"
          alt="Logo"
          className="logo"
        />
      </div>

      <ul className="navbar-list">
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
