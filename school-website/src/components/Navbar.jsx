import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <span>📞 +91 91234 56789</span>
          <span className="separator">|</span>
          <span>📧 info@eliteacademy.edu.in</span>
        </div>
        <div className="top-bar-right">
          <Link to="/fee-portal" className="top-link">Online Payment Portal</Link>
          <a href="/admissions" className="top-link highlight">Click here to apply for Admission</a>
        </div>
      </div>
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
          <div className="nav-dropdown">
            <span className="dropdown-trigger">Elite Legacy ▾</span>
            <div className="dropdown-content">
              <Link to="/history">Our History</Link>
              <Link to="/vision">Vision & Mission</Link>
              <Link to="/founder">Our Founder</Link>
              <Link to="/principal">Principal's Desk</Link>
              <Link to="/faculty">Faculty & Staff</Link>
              <Link to="/admin-staff">Administrative Staff</Link>
              <Link to="/anthem">School Anthem</Link>
              <Link to="/school-hours">School Hours</Link>
            </div>
          </div>
          <Link to="/about">About Us</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/fee-portal" className="btn-pay">Pay Fees</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
