import { Link } from "react-router-dom";
import Projects from "./Projects";

function Recents() {
  return (
    <div className="mx-auto px-6 md:mb-28 md:px-20">
      <h3 className="text-left font-beVietnamPro text-2xl font-medium">02.</h3>
      <h2 className="py-4 font-beVietnamPro text-3xl font-semibold">
        Recent projects{" "}
      </h2>
      <Link className="border-b-2 border-cyan-400 hover:border-black">
        View all works{" "}
      </Link>
      <Projects />
    </div>
  );
}

export default Recents;
