import { Link } from "react-router-dom";
import Recent from "./Recent";

function Recents() {
  return (
    <div className="px-6">
      <h3 className="text-left font-beVietnamPro text-2xl font-medium">02.</h3>
      <h2 className="py-4 font-beVietnamPro text-3xl font-semibold">
        Recent projects{" "}
      </h2>
      <Link className="border-b-2 border-cyan-400 hover:border-black">
        View all works{" "}
      </Link>
      <div className="grid-cols-2 md:grid md:gap-4 md:space-x-16">
        <Recent
          img="https://websitedemos.net/visual-artist-portfolio-02/wp-content/uploads/sites/1059/2022/03/visual-artist-recent-work-image-5-768x410.jpg"
          alt="Project image"
          first={true}
        />
        <Recent
          img="https://websitedemos.net/visual-artist-portfolio-02/wp-content/uploads/sites/1059/2022/03/visual-artist-recent-work-image-4-400x400.jpg"
          left={true}
        />
        <Recent img="https://websitedemos.net/visual-artist-portfolio-02/wp-content/uploads/sites/1059/2022/03/visual-artist-recent-work-image-2.jpg" />
        <Recent
          img="https://websitedemos.net/visual-artist-portfolio-02/wp-content/uploads/sites/1059/2022/03/visual-artist-recent-work-image-3.jpg"
          left={true}
        />
        <Recent img="https://websitedemos.net/visual-artist-portfolio-02/wp-content/uploads/sites/1059/2022/03/visual-artist-recent-work-image-1.jpg" />
      </div>
    </div>
  );
}

export default Recents;
