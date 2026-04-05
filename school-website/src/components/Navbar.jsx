import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <span>📞 +91 90656 11819</span>
          <span className="separator">|</span>
          <Link to="/portal-login" className="top-link staff-link-mobile">Staff Login</Link>
        </div>

        <div className="top-bar-right">
          <Link to="/fee-portal" className="top-link">Parent Portal</Link>
          <Link to="/admissions" className="top-link highlight">Apply Now</Link>
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee-text">
          📢 Admissions Open | 🌟 Kid's Campus Zone School — नए कदम, ऊँची उड़ान | 📍 Dhengura, Hazaribag, Jharkhand | ☎ 9065611819, 9693347953
        </div>

      </div>
      <header className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo-link">
            <div className="navbar-logo-container">
              <img src="/school-logo.png" alt="Kid's Campus Zone School Logo" className="navbar-logo" />
            </div>
            <span className="navbar-brand">

              <span className="brand-red">Kid's</span>{" "}
              <span className="brand-gold">Campus</span>{" "}
              <span className="brand-red">Zone</span>{" "}
            </span>
          </Link>
        </div>

        <button
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-right ${isMenuOpen ? 'mobile-active' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>

          {/* Restored Dropdown */}
          <div className="nav-dropdown">
            <span className="dropdown-trigger">Our School ▾</span>
            <div className="dropdown-content">
              <Link to="/history" onClick={() => setIsMenuOpen(false)}>Our History</Link>
              <Link to="/vision" onClick={() => setIsMenuOpen(false)}>Vision & Mission</Link>
              <Link to="/founder" onClick={() => setIsMenuOpen(false)}>Our Director</Link>
              <Link to="/principal" onClick={() => setIsMenuOpen(false)}>Principal's Desk</Link>
              <Link to="/faculty" onClick={() => setIsMenuOpen(false)}>Faculty & Staff</Link>
              <Link to="/anthem" onClick={() => setIsMenuOpen(false)}>School Anthem</Link>
            </div>
          </div>

          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          <Link to="/admissions" onClick={() => setIsMenuOpen(false)}>Admissions</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/fee-portal" className="btn-pay" onClick={() => setIsMenuOpen(false)}>Student Portal</Link>
        </nav>

      </header>
    </>
  );
}

export default Navbar;
