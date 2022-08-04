import { useContext } from "react";
import UserContext from "../UserContext";

function Header() {
  let mode = useContext(UserContext);
  let isDarkMode = mode.data.isDarkMode;
  console.log(mode, isDarkMode);
  return (
    <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
