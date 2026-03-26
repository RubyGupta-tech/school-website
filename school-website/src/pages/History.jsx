import React from 'react';

const History = () => {
  return (
    <div className="container section" style={{ marginTop: '120px' }}>
      <div className="page-header">
        <h1>Our History</h1>
        <p className="subtitle">A Legacy of Excellence Since 1995</p>
      </div>
      
      <div className="content-card card" style={{ textAlign: 'left', lineHeight: '1.8' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <h3>The Beginning</h3>
            <p>Founded in 1995, Elite Academy began as a visionary dream to provide world-class education in Hazaribagh. From a small campus with just 50 students, we have grown into a premier institution known for academic rigor and character development.</p>
            <p>Our journey has been marked by milestones of success, innovation in pedagogy, and a steadfast commitment to the holistic growth of every child who walks through our doors.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1524178232363-1fb28f74b671?auto=format&fit=crop&w=800&q=80" alt="Old Campus" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </div>

        <div style={{ marginTop: '60px' }}>
          <h3>Evolution and Growth</h3>
          <p>Over the decades, Elite Academy has expanded its infrastructure to include state-of-the-art laboratories, a digital library, and world-class sporting facilities. Our affiliation with the Central Board of Secondary Education (CBSE) in 2002 opened new horizons for our students, enabling them to compete at national and international levels.</p>
          <div className="timeline" style={{ marginTop: '30px', borderLeft: '4px solid var(--accent-color)', paddingLeft: '30px' }}>
            <div className="timeline-item" style={{ marginBottom: '30px' }}>
              <h4 style={{ color: 'var(--primary-color)' }}>1995</h4>
              <p>Foundation stone laid by Shri Ram Prasad Gupta.</p>
            </div>
            <div className="timeline-item" style={{ marginBottom: '30px' }}>
              <h4 style={{ color: 'var(--primary-color)' }}>2002</h4>
              <p>Achieved CBSE Affiliation up to Secondary Level.</p>
            </div>
            <div className="timeline-item" style={{ marginBottom: '30px' }}>
              <h4 style={{ color: 'var(--primary-color)' }}>2015</h4>
              <p>Inauguration of the New High-Tech Science Wing.</p>
            </div>
            <div className="timeline-item">
              <h4 style={{ color: 'var(--primary-color)' }}>2024</h4>
              <p>Recognized as the "Best Digital School" in the region.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
