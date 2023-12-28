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
      <Info />
      <Recents />
      <Qualification />
    </main>
  );
}
