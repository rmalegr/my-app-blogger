import styles from "./Navigation.module.css";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Post  ",
    route: "/posts",
  }
];

import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}> {label}</Link>{" "}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
