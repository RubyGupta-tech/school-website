function News() {
  const newsItems = [
    { title: "Annual Science Fair 2026", date: "April 15, 2026", image: "https://images.unsplash.com/photo-1564910443496-5fd2d068dd41?auto=format&fit=crop&q=80&w=400" },
    { title: "New Sports Complex Opening", date: "May 10, 2026", image: "https://images.unsplash.com/photo-1541534741688-6078c64b52d3?auto=format&fit=crop&q=80&w=400" },
    { title: "Scholarship Applications Open", date: "June 05, 2026", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section className="news-events container section">
      <div className="section-header">
        <h2>Latest News & Events</h2>
        <p>Stay updated with the latest happenings at Elite Academy.</p>
      </div>
      <div className="grid">
        {newsItems.map((item, index) => (
          <div key={index} className="news-card card">
            <div className="news-image" style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="news-content">
              <span className="date">{item.date}</span>
              <h4>{item.title}</h4>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;
