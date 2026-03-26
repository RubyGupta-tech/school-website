import React from 'react';

const AdminStaff = () => {
  const staff = [
    { name: "Mr. Ramesh Tiwari", role: "Office Superintendent", img: "https://i.pravatar.cc/150?u=11" },
    { name: "Mrs. Shobha Roy", role: "Head Accountant", img: "https://i.pravatar.cc/150?u=12" },
    { name: "Mr. Kishore Gupta", role: "IT Administrator", img: "https://i.pravatar.cc/150?u=13" },
    { name: "Ms. Rekha Singh", role: "Receptionist", img: "https://i.pravatar.cc/150?u=14" }
  ];

  return (
    <div className="container section" style={{ marginTop: '120px' }}>
      <div className="page-header">
        <h1>Administrative Staff 2024-2025</h1>
        <p className="subtitle">Ensuring Smooth Operations Every Day</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {staff.map((member, index) => (
          <div key={index} className="card" style={{ padding: '30px', display: 'flex', alignItems: 'center', gap: '20px', textAlign: 'left' }}>
            <img 
              src={member.img} 
              alt={member.name} 
              style={{ width: '80px', height: '80px', borderRadius: '15px', objectFit: 'cover' }} 
            />
            <div>
              <h4 style={{ margin: '0 0 5px', color: 'var(--primary-color)' }}>{member.name}</h4>
              <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: '50px', padding: '40px', background: '#f8f9fa' }}>
        <h4>Contact Administration</h4>
        <p>For any administrative queries, documentation, or transcript requests, please visit the main office during working hours or email us at <b>admin@eliteacademy.edu.in</b></p>
      </div>
    </div>
  );
};

export default AdminStaff;
