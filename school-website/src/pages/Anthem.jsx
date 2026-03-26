import React from 'react';

const Anthem = () => {
  return (
    <div className="container section" style={{ marginTop: '120px' }}>
      <div className="page-header">
        <h1>School Anthem</h1>
        <p className="subtitle">The Song of Unity and Pride</p>
      </div>

      <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px', background: '#fffdf5', border: '2px solid #eee' }}>
        <div style={{ fontSize: '3rem', marginBottom: '30px' }}>🎶</div>
        
        <div className="anthem-lyrics" style={{ fontSize: '1.3rem', lineHeight: '2', color: '#333', fontStyle: 'italic' }}>
          <p>
            (Verse 1)<br/>
            On the horizon of knowledge we stand,<br/>
            Elite Academy, the pride of our land.<br/>
            With hearts full of courage and minds bright as gold,<br/>
            Stories of wisdom are yet to be told.
          </p>
          
          <p style={{ fontWeight: '700', color: 'var(--primary-color)', background: '#f0f4f8', padding: '20px', borderRadius: '15px', margin: '30px 0' }}>
            (Chorus)<br/>
            Elite Academy, shining so bright,<br/>
            Guiding our path with truth and with light.<br/>
            Together we rise, together we grow,<br/>
            The seeds of the future, today we sow.
          </p>

          <p>
            (Verse 2)<br/>
            From Hazaribagh heights to the world far and wide,<br/>
            With honor we walk, with grace as our guide.<br/>
            To serve and to lead, to heal and to bless,<br/>
            We strive for the peak of true happiness.
          </p>

          <p>
            (Outro)<br/>
            Hail to our school, our mentor, our friend,<br/>
            Elite Academy, till time finds its end!
          </p>
        </div>
        
        <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #ddd' }}>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>Composed with Love & Dedication.</p>
        </div>
      </div>
    </div>
  );
};

export default Anthem;
