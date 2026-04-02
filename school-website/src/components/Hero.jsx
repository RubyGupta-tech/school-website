import "./Hero.css";
import { useState, useEffect } from "react";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Admissions Open 2025-26",
      subtitle: "नए कदम, ऊँची उड़ान — अपने बच्चे का भविष्य हमारे साथ सुरक्षित करें।",
      btnText: "Apply Now",
      btnLink: "/admissions",
      bg: "/hero-admissions.png"
    },
    {
      id: 2,
      title: "खेल-खेल में शिक्षा",
      subtitle: "जहाँ बचपन सँवरता है और भविष्य बनता है — Activity-Based Learning for Nursery & Primary.",
      btnText: "Learn More",
      btnLink: "/about",
      bg: "/hero-about.png"
    },
    {
      id: 3,
      title: "सुरक्षित और आनंदमय वातावरण",
      subtitle: "आपका विश्वास, हमारा प्रयास: बच्चों का सर्वांगीण विकास।",
      btnText: "About Us",
      btnLink: "/about",
      bg: "/hero-gallery.png"
    },
    {
      id: 4,
      title: "Join Our Dedicated Team",
      subtitle: "We are hiring experienced and passionate teachers. Be part of our growing family.",
      btnText: "Contact Us",
      btnLink: "/contact",
      bg: "/hero-recruitment.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${slide.bg})` }}
        >
          <div className="hero-content">
            <span className="slide-label">Kid's Campus Zone School</span>
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <div className="hero-btns">
              <a href={slide.btnLink} className="btn btn-primary">{slide.btnText}</a>
              <a href="/contact" className="btn btn-secondary">Inquire Now</a>
            </div>
          </div>
        </div>
      ))}

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Hero;
