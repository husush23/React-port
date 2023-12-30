import Recent from "./Recent";
function Projects() {
  return (
    <>
      {/* DRY needed here, do it later */}
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
    </>
  );
}

export default Projects;
