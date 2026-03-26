import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-premium">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: School Identity */}
          <div className="footer-col about-col">
            <div className="footer-logo">
              <img src="/logo.png" alt="Logo" />
              <h3>Elite Academy</h3>
            </div>
            <p>Empowering young minds through excellence in education, character building, and innovation since 1995. A place where every child shines.</p>
            <div className="social-links">
              <a href="#" className="social-icon facebook" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7h-2.54v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/></svg>
              </a>
              <a href="#" className="social-icon twitter" aria-label="Twitter">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231l5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/></svg>
              </a>
              <a href="#" className="social-icon instagram" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home Page</Link></li>
              <li><Link to="/about">About Our School</Link></li>
              <li><Link to="/admissions">Admissions 2025-26</Link></li>
              <li><Link to="/contact">Contact Support</Link></li>
              <li><a href="#">School News</a></li>
            </ul>
          </div>

          {/* Column 3: Parent & Student Portals */}
          <div className="footer-col">
            <h4>Portals & Resources</h4>
            <ul className="footer-links">
              <li><Link to="/instructions">Registration Instructions</Link></li>
              <li><Link to="/login">New Admission Login</Link></li>
              <li><Link to="/fee-portal" className="highlight-link">Online Fee Payment</Link></li>
              <li><a href="#">Student ERP Portal</a></li>
              <li><a href="#">Academic Calendar</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="footer-col">
            <h4>Find Us</h4>
            <div className="contact-info">
              <p>📍 <b>Address:</b><br/>Elite Academy Campus, Hazaribagh,<br/>Jharkhand - 825301</p>
              <p>📞 <b>Phone:</b> +91 91234 56789</p>
              <p>📧 <b>Email:</b> info@eliteacademy.edu.in</p>
            </div>
            <div className="footer-badge">
              Affiliated to CBSE, New Delhi
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Elite Academy. All Rights Reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a></p>
          <p className="credit">Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
