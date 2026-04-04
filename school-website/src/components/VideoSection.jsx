import "./VideoSection.css";

function VideoSection() {
  const videos = [
    { id: 1, title: "Annual Sports Achievement", url: "https://images.unsplash.com/photo-1509062522246-3755907927d7?auto=format&fit=crop&q=80&w=600" },
    { id: 2, title: "Cultural Festival Highlights", url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=300" },
    { id: 3, title: "Modern Science Lab Tour", url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=300" },
    { id: 4, title: "Graduation Ceremony 2024", url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=300" }
  ];

  return (
    <section className="video-highlights-section">
      <div className="container">
        <div className="section-header dark">
          <span className="subtitle">Relive the Magic</span>
          <h2>Video Highlights</h2>
          <div className="divider" style={{ margin: '0 auto' }}></div>
        </div>

        <div className="video-layout">
          <div className="featured-video card">
            <video 
              src="/schoolvideo1.mp4" 
              controls 
              className="featured-video-player"
              style={{ width: '100%', borderRadius: '20px', display: 'block' }}
            />
            <div className="video-meta" style={{ padding: '20px', background: 'white' }}>
              <h3 style={{ color: 'var(--primary)', margin: '0 0 5px 0' }}>Kid's Campus School Tour</h3>
              <p style={{ margin: 0, color: '#666' }}>Academy Highlights • 2025</p>
            </div>
          </div>
        </div>


        <div className="video-scroll-container">
          <div className="video-scroll-track">
            {[...videos, ...videos].map((v, i) => (
              <div key={i} className="small-video-card card">
                <img src={v.url} alt={v.title} />
                <div className="video-overlay">
                  <div className="play-btn small">▶</div>
                  <div className="video-meta-small">
                    <h4>{v.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
