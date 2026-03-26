import "./AutoGallery.css";

function AutoGallery() {
  const media = [
    { url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=400", title: "Annual Day" },
    { url: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=400", title: "Science Fair" },
    { url: "https://images.unsplash.com/photo-1523050335456-c6bb74b67b8a?auto=format&fit=crop&q=80&w=400", title: "Classroom Life" },
    { url: "https://images.unsplash.com/photo-1509062522246-3755907927d7?auto=format&fit=crop&q=80&w=400", title: "Sports Meet" },
    { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400", title: "Music Concert" },
    { url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=400", title: "Graduation" },
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
