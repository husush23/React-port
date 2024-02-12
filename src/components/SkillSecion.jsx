import PropTypes from "prop-types";

function SkillSection({ children }) {
  return (
    <div className="manual-shadow  mr-2space-y-2 my-8 border border-black px-8 py-12 md:mx-8">
      {children}
    </div>
  );
}

SkillSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SkillSection;
