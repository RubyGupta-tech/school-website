import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="marquee-container">
        <div className="marquee-text">
          📢 Admissions Open for 2025-26 | 🏆 Elite Academy ranks #1 in Regional Sports Meet | 📅 Annual Function on April 15th
        </div>
      </div>
      <header className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo-link">
            <img src="/logo.png" alt="Elite Academy Logo" className="navbar-logo" />
            <span className="navbar-brand">Elite Academy</span>
          </Link>
        </div>
        <nav className="navbar-right">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
