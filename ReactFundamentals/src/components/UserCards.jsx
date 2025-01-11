import React from "react";
import { useState } from "react";
import UserData from "./UserData";

const UserCards = () => {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #0000001a",
    padding: "10px",
    width: "200px",
    boxShadow: "0 0 10px #0000001a",
    margin: "5px",
  });
  const [theme, setTheme] = useState({
    backgroundColor: "while",
    padding: "10px",
  });

  const [grid, setGrid] = useState(true);
  const [toggleBtnText, setToggleBtnText] = useState("Grid View");

  const UpdateTheme = (bgColor, textColor, themeColor) => {
    console.log(themeColor);

    setCardStyle({
      ...cardStyle,
      backgroundColor: bgColor,
      color: textColor,
    });
    setTheme({ ...theme, backgroundColor: themeColor, color: textColor });
  };

  const handleGrid = () => {
    setGrid(!grid);
    setToggleBtnText(grid ? "List View" : "Grid View");
  };

  return (
    <>
      <button
        style={{ margin: "5px" }}
        onClick={() => UpdateTheme("grey", "white", "black")}
      >
        Dark Theme
      </button>
      <button
        style={{ margin: "5px" }}
        onClick={() => UpdateTheme("white", "black", "white")}
      >
        Light Theme
      </button>
      <button onClick={() => handleGrid()}>{toggleBtnText}</button>
      <div style={theme}>
        <div style={{ display: grid ? "flex" : "block", flexWrap: "wrap" }}>
          <UserData cardStyle={cardStyle} />
        </div>
      </div>
    </>
  );
};

export default UserCards;
