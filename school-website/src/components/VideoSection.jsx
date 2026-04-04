import "./VideoSection.css";

function VideoSection() {
  const videos = [
    { id: 1, title: "School Campus Highlights", url: "/schoolpic1.jpeg" },
    { id: 2, title: "Classroom Learning", url: "/schoolpic2.jpeg" },
    { id: 3, title: "Playground Activities", url: "/schoolpic3.jpeg" },
    { id: 4, title: "Special School Events", url: "/schoolpic4.jpeg" }
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
