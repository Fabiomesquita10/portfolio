import React from "react";
import styles from "./ArrowButton.module.css";
import Link from "next/link";

const ArrowButton = ({color}) => {
  console.log(color);
  return (
    <div>
      <Link className={styles.button} style={{color}} href="/aboutMe">
        <i class="fa-solid fa-arrow-right"></i> About Me!
      </Link>
    </div>
  );
};

export default ArrowButton;
