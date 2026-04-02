import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <span>📞 +91 90656 11819</span>
          <span className="separator">|</span>
          <span>📧 kidscampuszoneschool2019hzb@gmail.com</span>
        </div>
        <div className="top-bar-right">
          <Link to="/fee-portal" className="top-link">Online Payment Portal</Link>
          <a href="/admissions" className="top-link highlight">Click here to apply for Admission</a>
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee-text">
          📢 Admissions Open 2025-26 | 🌟 Kid's Campus Zone School — नए कदम, ऊँची उड़ान | 📍 Dhengura, Hazaribag, Jharkhand | ☎ 9065611819, 9693347953
        </div>
      </div>
      <header className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo-link">
            <img src="/school-logo.png" alt="Kid's Campus Zone School Logo" className="navbar-logo" />
            <span className="navbar-brand">Kid's Campus Zone School</span>
          </Link>
        </div>
        <nav className="navbar-right">
          <Link to="/">Home</Link>
          <div className="nav-dropdown">
            <span className="dropdown-trigger">Our School ▾</span>
            <div className="dropdown-content">
              <Link to="/history">Our History</Link>
              <Link to="/vision">Vision & Mission</Link>
              <Link to="/founder">Our Director</Link>
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
