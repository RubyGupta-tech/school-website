import "./Facilities.css";

function Facilities() {
  const facilityList = [
    { title: "Play & Activity Zone", img: "/facility-sports.png", desc: "A safe and fun play area where children learn through games, creativity, and outdoor activities." },
    { title: "Smart Learning Classes", img: "/facility-smart-class.png", desc: "Modern classrooms with interactive tools making learning engaging and effective for young minds." },
    { title: "Science & Activity Lab", img: "/facility-lab.png", desc: "Hands-on activity lab for curiosity-driven experiments and creative exploration for primary students." }
  ];


  return (
    <section className="facilities-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Our Infrastructure</span>
          <h2>Campus Facilities</h2>
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
