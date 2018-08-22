import PropTypes from "prop-types";
import React from "react";

class Button extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
    innerRef: PropTypes.object,
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

  static defaultProps = {
    type: "button",
    outline: false,
    variant: "default"
  };

  render() {
    const { children, innerRef, variant, outline, ...props } = this.props;
    let classes = "btn";

    if (outline) {
      classes += ` btn-outline-${variant}`;
    } else {
      classes += ` btn-${variant}`;
    }

    return (
      <button ref={innerRef} {...props} className={classes}>
        {children}
      </button>
    );
  }
}

export default Button;
