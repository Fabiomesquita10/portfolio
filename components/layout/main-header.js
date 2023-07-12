import Link from "next/link";
import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <div className={classes.navLinks}>
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
