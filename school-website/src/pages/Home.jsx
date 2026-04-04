import Hero from "../components/Hero";
import Features from "../components/Features";
import News from "../components/News";
import Principal from "../components/Principal";
import AutoGallery from "../components/AutoGallery";
import VideoSection from "../components/VideoSection";
import Facilities from "../components/Facilities";
import SchoolDivider from "../components/SchoolDivider";
// Stats removed as per user request


function Home() {
  return (
    <div className="page-home">
      <Hero />
      
      <div className="kids-illustration-banner">

        <img src="/illustration-study.png" alt="Happy Kids Studying" className="kids-art" />
      </div>

      <Principal />
      <SchoolDivider icon="🚌" subtitle="Our Journey Together" />
      <Features />
      <SchoolDivider icon="🎈" subtitle="Fun & Learning" />
      <Facilities />
      <SchoolDivider icon="🌈" subtitle="A World of Color" />
      <AutoGallery />
      <SchoolDivider icon="🎬" subtitle="Video Highlights" />
      <VideoSection />
      <SchoolDivider icon="📰" subtitle="News & Updates" />
      <News />
      
      <div className="kids-illustration-footer">
        <img src="/illustration-play.png" alt="Happy Kids Playing" className="kids-art" />
      </div>
    </div>
  );
}

export default Home;
