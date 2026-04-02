import React from 'react';

const SchoolHours = () => {
  return (
    <div className="container section" style={{ marginTop: 'var(--header-height)' }}>
      <div className="page-header">
        <h1>School Hours</h1>
        <p className="subtitle">Standard Timings for Academic Sessions</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        <div className="card" style={{ padding: '40px', borderLeft: '10px solid #FEF3C7' }}>
          <h3 style={{ color: '#D97706' }}>☀️ Summer Timings</h3>
          <p style={{ opacity: '0.6' }}>(April to September)</p>
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
              <span>LKG - UKG</span>
              <b>07:30 AM - 11:30 AM</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
              <span>Class 1 - 5</span>
              <b>07:30 AM - 01:00 PM</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
              <span>Class 6 - 12</span>
              <b>07:30 AM - 01:30 PM</b>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '40px', borderLeft: '10px solid #DBEAFE' }}>
          <h3 style={{ color: '#2563EB' }}>❄️ Winter Timings</h3>
          <p style={{ opacity: '0.6' }}>(October to March)</p>
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
              <span>LKG - UKG</span>
              <b>08:30 AM - 12:30 PM</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
              <span>Class 1 - 5</span>
              <b>08:30 AM - 02:00 PM</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
              <span>Class 6 - 12</span>
              <b>08:30 AM - 02:30 PM</b>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: '30px', padding: '30px', background: '#FFFBEB' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', textAlign: 'left' }}>
          <div style={{ fontSize: '2rem' }}>🕒</div>
          <div>
            <h4>Office Working Hours</h4>
            <p>Monday - Friday: 08:00 AM to 03:00 PM | Saturday: 08:00 AM to 12:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolHours;
