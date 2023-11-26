import React from "react";
import styles from "./ArrowButton.module.css";
import Link from "next/link";

const ArrowButton = ({ color }) => {
  console.log(color);
  return (
    <div>
      <Link className={styles.button} style={{ color }} href="/aboutMe">
        <div className={styles.faIcon}>
          <i class="fa-solid fa-arrow-right"></i> 
        </div>
        <div className={styles.text}>About Me!</div>
      </Link>
    </div>
  );
};

export default ArrowButton;
