import PropTypes from "prop-types";

function Recent({ img, first, left, title, category }) {
  return (
    <div
      className={`space-y-4 py-12 ${
        first ? "md:col-span-2 md:mx-8" : left ? "md:mt-14" : "md:mb-14"
      }`}
    >
      <img src={img} alt={title} className="mx-auto w-full" />
      <h2 className="text-2xl font-medium">{title}</h2>
      <span className="text-slate-400">{category}</span>
    </div>
  );
}

export default Recent;

Recent.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  category: PropTypes.string,
  first: PropTypes.bool,
  left: PropTypes.bool,
};
