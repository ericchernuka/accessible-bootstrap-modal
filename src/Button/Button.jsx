import PropTypes from "prop-types";
import React from "react";

const Button = React.forwardRef((props, ref) => {
  const { children, variant, outline, ...additionalProps } = props;
  let classes = "btn";

  if (outline) {
    classes += ` btn-outline-${variant}`;
  } else {
    classes += ` btn-${variant}`;
  }

  return (
    <button ref={ref} {...additionalProps} className={classes}>
      {children}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  outline: PropTypes.bool,
  variant: PropTypes.oneOf([
    "danger",
    "dark",
    "default",
    "info",
    "light",
    "link",
    "primary",
    "secondary",
    "success",
    "warning"
  ])
};

Button.defaultProps = {
  type: "button",
  outline: false,
  variant: "default"
};

export default Button;
