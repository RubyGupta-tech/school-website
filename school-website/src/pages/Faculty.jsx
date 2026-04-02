import React from 'react';

const Faculty = () => {
  const staff = [
    { name: "Mrs. Meera Sharma", role: "Head of Science Dept.", exp: "15 Years", img: "https://i.pravatar.cc/150?u=1" },
    { name: "Mr. Rajeev Kumar", role: "Sr. Mathematics Faculty", exp: "12 Years", img: "https://i.pravatar.cc/150?u=2" },
    { name: "Ms. Anita Desai", role: "English Literature", exp: "10 Years", img: "https://i.pravatar.cc/150?u=3" },
    { name: "Mr. Sanjay Singh", role: "History & Civics", exp: "18 Years", img: "https://i.pravatar.cc/150?u=4" },
    { name: "Mrs. Priya Varma", role: "Primary Coordinator", exp: "14 Years", img: "https://i.pravatar.cc/150?u=5" },
    { name: "Mr. Amit Thapa", role: "Physical Education", exp: "8 Years", img: "https://i.pravatar.cc/150?u=6" }
  ];

  return (
    <div className="container section" style={{ marginTop: 'var(--header-height)' }}>
      <div className="page-header">
        <h1>Faculty & Staff</h1>
        <p className="subtitle">The Pillars of Our Institution</p>
      </div>

      <div className="card" style={{ padding: '40px', marginBottom: '40px' }}>
        <h3>Academic Leadership</h3>
        <p>Our faculty consists of highly qualified and passionate educators dedicated to nurturing the next generation.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {staff.map((member, index) => (
          <div key={index} className="card" style={{ padding: '30px', textAlign: 'center' }}>
            <img 
              src={member.img} 
              alt={member.name} 
              style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '5px solid #f0f4f8', marginBottom: '20px' }} 
            />
            <h4 style={{ color: 'var(--primary-color)', margin: '10px 0 5px' }}>{member.name}</h4>
            <p style={{ color: 'var(--accent-color)', fontWeight: '700', fontSize: '0.9rem' }}>{member.role}</p>
            <p style={{ color: '#888', fontSize: '0.85rem' }}>Experience: {member.exp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
