import React from 'react';

const Vision = () => {
  return (
    <div className="container section" style={{ marginTop: '120px' }}>
      <div className="page-header">
        <h1>Vision & Mission</h1>
        <p className="subtitle">Defining Our Purpose and Future</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        <div className="card" style={{ padding: '50px', borderTop: '8px solid #1ABC9C' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👁️</div>
          <h2>Our Vision</h2>
          <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.6' }}>
            "To be an institution of excellence, dedicated to producing leaders of the future who are intellectually competent, spiritually mature, morally upright, and socially responsible."
          </p>
        </div>

        <div className="card" style={{ padding: '50px', borderTop: '8px solid var(--accent-color)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
          <h2>Our Mission</h2>
          <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6', textAlign: 'left' }}>
            Elite Academy aims to provide a child-centered environment where every student is encouraged to achieve their highest potential through:
          </p>
          <ul style={{ textAlign: 'left', marginTop: '20px', lineHeight: '2' }}>
            <li>Rigorous academic standards and modern pedagogy.</li>
            <li>Inculcation of universal values and ethical conduct.</li>
            <li>Fostering creativity and critical thinking.</li>
            <li>Promoting physical health and sportsmanship.</li>
          </ul>
        </div>
      </div>

      <div className="card" style={{ marginTop: '40px', background: 'var(--primary-color)', color: 'white', padding: '60px' }}>
        <h2 style={{ color: 'var(--secondary-color)' }}>Core Values</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '30px' }}>
          <div>
            <h3>Integrity</h3>
            <p style={{ opacity: '0.8' }}>Doing the right thing, even when no one is watching.</p>
          </div>
          <div>
            <h3>Empathy</h3>
            <p style={{ opacity: '0.8' }}>Understanding and sharing the feelings of others.</p>
          </div>
          <div>
            <h3>Excellence</h3>
            <p style={{ opacity: '0.8' }}>Striving for the best in every endeavor.</p>
          </div>
          <div>
            <h3>Resilience</h3>
            <p style={{ opacity: '0.8' }}>Bouncing back with strength from challenges.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
