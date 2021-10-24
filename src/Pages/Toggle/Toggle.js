import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const Toggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  
// value={{dark:[darkMode, setDarkMode ],shopingCart:[cart,setCart]}
  const styles = {
    toggleContainer: {
      height: "50px",
      width: "100px",
      backgroundColor: darkMode === true ? "#15cdfc" : "#15cdfc",
      marginRight: "20px",
      borderRadius: "25px",
    },

    toggleInner: {
      transition: "margin-left .2s ease-in-out",
      cursor: "pointer",
      height: "50px",
      width: "50px",
      backgroundColor: "grey",
      borderRadius: "100%",
      marginLeft: darkMode === true ? "50px" : "0px",
    },
  };

  return (
    <div style={styles.toggleContainer}>
      <div
        onClick={() => setDarkMode(!darkMode)}
        style={styles.toggleInner}
      ></div>
    </div>
  );
};

export default Toggle;
