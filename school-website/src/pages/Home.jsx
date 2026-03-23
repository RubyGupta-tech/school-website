import Hero from "../components/Hero";
import Features from "../components/Features";
import News from "../components/News";

function Home() {
  return (
    <div className="page-home">
      <Hero />
      <Features />
      <News />
    </div>
  );
}

export default Home;
