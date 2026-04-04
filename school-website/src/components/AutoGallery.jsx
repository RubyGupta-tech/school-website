import "./AutoGallery.css";

function AutoGallery() {
  const media = [
    { url: "/schoolpic1.jpeg", title: "Classroom Activities" },
    { url: "/schoolpic2.jpeg", title: "School Campus" },
    { url: "/schoolpic3.jpeg", title: "Learning Together" },
    { url: "/schoolpic4.jpeg", title: "Creative Time" },
    { url: "/schoolpic5.jpeg", title: "Playground Fun" },
    { url: "/schoolpic6.jpeg", title: "School Events" },
  ];


  const scrollMedia = [...media, ...media];

  return (
    <section className="auto-gallery-section">
      <div className="section-header">
        <span className="subtitle">Visual Journey</span>
        <h2>Photo Gallery</h2>
        <div className="divider" style={{ margin: '0 auto' }}></div>
      </div>

      <div className="scroll-container">
        <div className="scroll-track">
          {scrollMedia.map((item, index) => (
            <div key={index} className="gallery-card">
              <img src={item.url} alt={item.title} />
              <div className="card-info">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AutoGallery;
