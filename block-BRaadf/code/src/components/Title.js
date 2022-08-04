import { useContext } from "react";
import UserContext from "../UserContext";

function Title({ text }) {
  let mode = useContext(UserContext);
  let isDarkMode = mode.data.isDarkMode;
  return (
    <h2
      className={`heading ${
        isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;
