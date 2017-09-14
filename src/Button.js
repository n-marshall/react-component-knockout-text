import React from "react";
import Radium from "radium";

const buttonStyle = {
  border: "none",
  borderRadius: 200,
  padding: "0.4rem 1rem"
};

const Button = props => (
  <button
    onClick={props.onPress}
    style={{ ...buttonStyle, ...(props.style || {}) }}
  >
    {props.text || props.children}
  </button>
);

export default Radium(Button);
