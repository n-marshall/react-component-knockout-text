import React from "react";
import Radium from "radium";

const styles = {
  container: {
    borderRadius: 200,
    overflow: "hidden"
  },
  svg: {
    display: "block"
  }
};

const KnockoutText = ({ text, style = {} }) => (
  <div style={styles.container}>
    <svg style={styles.svg} viewBox="0 0 200 25">
      <rect
        fill={style.backgroundColor || "rgba(0,0,0,0.6)"}
        x="0"
        y="0"
        width="100%"
        height="100%"
        mask="url(#knockout-text)"
      />
      <mask id="knockout-text">
        <rect fill="#fff" x="0" y="0" width="100%" height="100%" />
        <text y="70%" fill="#000" textAnchor="middle" x="50%">
          {text}
        </text>
      </mask>
    </svg>
  </div>
);

export default Radium(KnockoutText);
