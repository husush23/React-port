import Footer from "../components/Footer";
import Gmail from "../components/Gmail";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import Qualification from "../components/Qualification";
import Recents from "../components/Recents";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Info id="info" />
      <Recents />
      <Qualification />
      <div className="pt-10">
        <h3 className="mx-24 my-12 text-xl font-semibold md:text-3xl md:font-medium">
          Want to work together?
        </h3>
        <Gmail />
      </div>
      <Footer />
    </main>
  );
}
