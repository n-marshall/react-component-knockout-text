import React from "react";
import Radium from "radium";

import Button from "./Button";
import KnockoutText from "./KnockoutText";

const styles = {
  container: {
    position: "relative",
    borderRadius: 200,
    overflow: "hidden"
  },
  buttonContainer: {
    position: "absolute",
    height: "100%",
    width: "100%"
  },
  button: {
    backgroundColor: "transparent",
    cursor: "pointer",
    height: "100%",
    width: "100%",
    ":hover": {
      backgroundColor: "hsla(0,0%,0%,0.2)"
    }
  }
};

const KnockoutButton = ({ text, style = {}, ...props }) => (
  <div style={styles.container}>
    <div style={styles.buttonContainer}>
      <Button
        style={styles.button}
        onPress={() => {
          console.log("CLICKED");
        }}
      />
    </div>
    <KnockoutText text={text} />
  </div>
);

//   return (
//     <Button style={knockoutButtonStyles.button} {...props}>
//       <div style={knockoutButtonStyles.bg}>
//         <KnockoutText style={knockoutButtonStyles.text} text={text} />
//       </div>
//     </Button>
//   );

const knockoutButtonStyles = {
  button: {
    padding: 0,
    display: "grid",
    gridTemplateAreas: "cell",
    backgroundColor: "transparent"
  },
  text: {
    gridArea: "cell",
    width: "100%",
    height: "100%"
  },
  bg: {
    position: "relative",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    backgroundColor: "red"
  }
};

const buttonStyles = {
  bg: {
    position: "relative",
    gridArea: "cell",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%"
  }
};

export default Radium(KnockoutButton);
