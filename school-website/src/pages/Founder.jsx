import React from 'react';

const Founder = () => {
  return (
    <div className="container section" style={{ marginTop: '120px' }}>
      <div className="page-header">
        <h1>Our Founder</h1>
        <p className="subtitle">The Visionary Behind Elite Academy</p>
      </div>

      <div className="card" style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '50px', padding: '50px', textAlign: 'left' }}>
        <div className="founder-image-container">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80" 
            alt="Founder" 
            style={{ width: '100%', borderRadius: '20px', border: '10px solid #f8f9fa' }} 
          />
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--primary-color)' }}>Late Shri Ram Prasad Gupta</h2>
            <p style={{ fontStyle: 'italic', color: '#666' }}>Founding Father (1940 - 2012)</p>
          </div>
        </div>

        <div className="founder-message" style={{ lineHeight: '1.8' }}>
          <h3 style={{ color: 'var(--accent-color)', marginBottom: '20px' }}>A Dream Rooted in Excellence</h3>
          <p>Elite Academy was founded in 1995 by Shri Ram Prasad Gupta, a man of profound wisdom and unwavering dedication to the cause of education. He believed that education is not merely the filling of a bucket, but the lighting of a fire.</p>
          
          <p>Shri Gupta's vision was to create an institution that combined traditional Indian values with modern scientific temperament. He wanted a school where children from all backgrounds could aspire to the highest levels of success without losing their grounding in ethics and compassion.</p>

          <blockquote style={{ borderLeft: '5px solid var(--accent-color)', padding: '20px', background: '#fef3c7', margin: '30px 0', fontSize: '1.1rem' }}>
            "The greatest legacy we can leave for the next generation is not wealth, but a mind that is free to think, a heart that is wide to love, and a spirit that is strong to serve."
          </blockquote>

          <p>Today, Elite Academy stands as a testament to his enduring spirit. Every graduate of our school carries a piece of his dream—to build a better, more enlightened world through knowledge and character.</p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
