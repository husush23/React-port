import PropTypes from "prop-types";

function Recent({ img, left, title, category }) {
  return (
    <div
      className={`space-y-4 py-12 md:py-0 ${left ? "md:mt-14" : ""} mx-auto`}
    >
      <img src={img} alt={title} className="project-shadow" />
      <h2 className="mx-auto text-2xl font-medium">{title}</h2>
      <span className="text-slate-400">{category}</span>
    </div>
  );
}

export default Recent;

Recent.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  category: PropTypes.string,
  left: PropTypes.bool,
};
