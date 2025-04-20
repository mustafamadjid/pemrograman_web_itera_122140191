import PropTypes from "prop-types";

const Button = ({ variant, type = "button", children, onClick }) => {
  return (
    <button
      type={type}
      className={`text-white font-semibold cursor-pointer ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};
export default Button;
