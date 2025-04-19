import PropTypes from "prop-types";

const Button = ({ variant, type = "button", children }) => {
  return (
    <button className={`text-white font-semibold cursor-pointer ${variant}`}>
      {children}
    </button>
  );

  Button.propTypes = {
    variant: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node,
  };
};

export default Button;
