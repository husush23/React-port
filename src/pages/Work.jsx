import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

function Work() {
  return (
    <div className="container">
      <Navbar />
      <div className="mx-6 my-6 mb-4 text-4xl md:mx-8 md:my-28 md:text-8xl">
        <h2 className="font-beVietnamPro font-semibold">Creating valuable</h2>
        <h2 className="font-plairFairDisplay italic md:text-7xl">
          software solutions
        </h2>
      </div>
      <div className="mx-auto mt-7 px-6 md:mb-28">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default Work;
