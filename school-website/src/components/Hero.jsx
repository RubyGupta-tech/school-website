import { useState, useEffect } from "react";
import "./Hero.css";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Join Our Prestigious Faculty",
      subtitle: "Employee Required: We are hiring expert teachers for Science & Arts.",
      btnText: "View Vacancies",
      btnLink: "/contact",
      bg: "/hero-recruitment.png"
    },
    {
      id: 2,
      title: "Admissions Open 2025-26",
      subtitle: "Secure your child's future with Elite Academy's holistic education.",
      btnText: "Apply Now",
      btnLink: "/admissions",
      bg: "/hero-admissions.png"
    },
    {
      id: 3,
      title: "Excellence in Every Field",
      subtitle: "Discover our state-of-the-art campus and world-class facilities.",
      btnText: "Learn More",
      btnLink: "/about",
      bg: "/hero-about.png"
    },
    {
      id: 4,
      title: "Life at Elite Academy",
      subtitle: "A vibrant community where students learn, play, and grow together.",
      btnText: "View Gallery",
      btnLink: "/",
      bg: "/hero-gallery.png"
    }
  ];

  useEffect(() => {
    console.log("Hero Slider initialized. Current Slide:", currentSlide);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    console.log("Slide Changed to:", currentSlide);
  }, [currentSlide]);

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${slide.bg})` }}
        >
          <div className="hero-content">
            <span className="slide-label">Elite Academy Announcement</span>
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
