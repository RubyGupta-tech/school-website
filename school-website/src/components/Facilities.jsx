import "./Facilities.css";

function Facilities() {
  const facilityList = [
    { title: "Digital Library", img: "/facility-library.png", desc: "Access to thousands of books and digital journals." },
    { title: "Science Labs", img: "/facility-lab.png", desc: "State-of-the-art labs for Physics, Chemistry, and Biology." },
    { title: "Smart Classrooms", img: "/facility-smart-class.png", desc: "Interactive whiteboards and high-tech leaning tools." },
    { title: "Sports Complex", img: "/facility-sports.png", desc: "Advanced training facilities for indoor and outdoor sports." }
  ];

  return (
    <section className="facilities-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Our Infrastructure</span>
          <h2>World-Class Facilities</h2>
          <div className="divider" style={{ margin: '0 auto' }}></div>
        </div>

        <div className="facilities-grid">
          {facilityList.map((f, i) => (
            <div key={i} className="facility-card">
              <div className="facility-image">
                <img src={f.img} alt={f.title} />
              </div>
              <div className="facility-info">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
