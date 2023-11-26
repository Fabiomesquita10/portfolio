import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Styles from "./DarkModeToggle.module.css";

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`${Styles.darkModeToggle} ${isDarkMode ? Styles.darkMode : ''}`} onClick={toggleDarkMode}>
      <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
    </div>
  );
};

export default DarkModeToggle;
