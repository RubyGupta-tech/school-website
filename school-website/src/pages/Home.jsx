import Hero from "../components/Hero";
import Features from "../components/Features";
import News from "../components/News";
import Principal from "../components/Principal";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <div className="page-home">
      <Hero />
      <Principal />
      <Features />
      <Gallery />
      <News />
    </div>
  );
}

export default Home;
