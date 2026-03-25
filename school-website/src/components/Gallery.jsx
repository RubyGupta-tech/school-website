function Gallery() {
  const images = [
    { url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=400", title: "Annual Day" },
    { url: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=400", title: "Science Fair" },
    { url: "https://images.unsplash.com/photo-1509062522246-3755907927d7?auto=format&fit=crop&q=80&w=400", title: "Sports Meet" },
    { url: "https://images.unsplash.com/photo-1523050335456-c6bb74b67b8a?auto=format&fit=crop&q=80&w=400", title: "Classroom Activities" },
    { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=400", title: "Music Concert" },
    { url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=400", title: "Graduation" }
  ];

  return (
    <section className="gallery-section section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Life at Academy</span>
          <h2>School Gallery</h2>
          <div className="divider" style={{ margin: '0 auto' }}></div>
        </div>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img.url} alt={img.title} />
              <div className="gallery-overlay">
                <span>{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
