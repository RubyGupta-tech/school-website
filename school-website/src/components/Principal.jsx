import "./Principal.css";

function Principal() {
  return (
    <section className="principal-section">
      <div className="container">
        <div className="principal-content">
          <div className="principal-image">
            <img src="https://images.unsplash.com/photo-1544717297-fa154da09f5b?auto=format&fit=crop&q=80&w=400" alt="Principal" />
            <div className="image-overlay"></div>
          </div>
          <div className="principal-text">
            <span className="subtitle">Leader's Perspective</span>
            <h2>Message from the Principal</h2>
            <div className="divider"></div>
            <p>
              "At Elite Academy, we believe that education is not just about acquiring knowledge but about building 
              character and fostering a spirit of inquiry. Our mission is to provide an environment where every 
              child feels valued and inspired to reach their full potential."
            </p>
            <p className="principal-name">Dr. Sarah Johnson</p>
            <p className="principal-title">Principal, Elite Academy</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Principal;
