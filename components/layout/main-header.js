// MainHeader.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState, useEffect } from "react";
import classes from "./main-header.module.css";

function MainHeader() {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [calculatedZoom, setCalculatedZoom] = useState(null);
  const [isPhoneMode, setPhoneMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const calculateZoom = () => {
    if (typeof window !== "undefined") {
      const zoom = ((window.outerWidth - 10) / window.innerWidth) * 100;
      setCalculatedZoom(zoom);

      if (zoom < 250 && calculatedZoom != null) setMenuOpen(true);
      if (zoom >= 250 || isPhoneMode) setMenuOpen(false);
    }
  };

  const checkIfIsPhoneMode = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setPhoneMode(true);
      setMenuOpen(false); // Close the menu if in phone mode
    }
  };

  useEffect(() => {
    // Calculate initial zoom
    calculateZoom();

    // Check if in phone mode
    checkIfIsPhoneMode();

    // Add resize event listener
    window.addEventListener("resize", calculateZoom);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", calculateZoom);
    };
  }, []);

  return (
    <header
      className={classes.header}
      style={
        ((calculatedZoom > 250) & isMenuOpen) | (isPhoneMode & isMenuOpen)
          ? {
              height: "15rem",
            }
          : null
      }
    >
      <nav
        className={`${classes.navigation} ${isMenuOpen ? classes.open : ""}`}
      >
        {(calculatedZoom > 250) | isPhoneMode ? (
          <div className={classes.menuIcon} onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
        ) : null}
        <div
          className={classes.navLinks}
          style={
            (calculatedZoom > 250) | isPhoneMode
              ? {
                  display: isMenuOpen ? "flex" : "none",
                  flexDirection: "column", // Add this line
                }
              : {
                  display: "flex"
                }
          }
        >
          <Link href="/">Homepage</Link>
          <Link href="/aboutMe">About me</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/contacts">Contacts</Link>
        </div>
      </nav>
    </header>
  );
}

export default MainHeader;
