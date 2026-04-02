import { useState, useEffect, useRef } from "react";
import "./Stats.css";

function Counter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return <span ref={ref}>{count}</span>;
}

function Stats() {
  return (
    <section className="stats-section section">
      <div className="container stats-grid">
        <div className="stat-item card">
          <div className="stat-number"><Counter target={170} />+</div>
          <p className="stat-label">मेधावी छात्र (Students)</p>
        </div>
        <div className="stat-item card">
          <div className="stat-number"><Counter target={6} />+</div>
          <p className="stat-label">अनुभवी शिक्षक (Expert Teachers)</p>
        </div>
        <div className="stat-item card">
          <div className="stat-number"><Counter target={2019} duration={2500} /></div>
          <p className="stat-label">स्थापना वर्ष (Established Year)</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
