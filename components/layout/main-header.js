import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./main-header.module.css";

function MainHeader() {
  const router = useRouter();
  const [activePath, setActivePath] = useState(router.pathname);

  useEffect(() => {
    setActivePath(router.pathname);
  }, [router.pathname]);

  console.log(activePath);

  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <div className={classes.navLinks}>
          <CustomLink href="/" label="Homepage" isActive={activePath === "/"} />
          <CustomLink
            href="/aboutMe"
            label="About me"
            isActive={router.pathname === "/aboutMe"}
          />
          <CustomLink
            href="/portfolio"
            label="Portfolio"
            isActive={router.pathname === "/portfolio"}
          />
          <CustomLink
            href="/experience"
            label="Experience"
            isActive={router.pathname === "/experience"}
          />
          <CustomLink
            href="/contacts"
            label="Contacts"
            isActive={router.pathname === "/contacts"}
          />
        </div>
      </nav>
    </header>
  );
}

function CustomLink({ href, label, isActive }) {
  return (
    <Link className={isActive ? classes.active : ""} href={href} passHref>
      {label}
    </Link>
  );
}

export default MainHeader;
