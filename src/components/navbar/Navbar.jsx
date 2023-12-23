import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/linkedin.svg" alt="linkedin" width={24} height={24} />
        <Image src="/instagram.svg" alt="instagram" width={24} height={24} />
        <Image src="/github.svg" alt="github" width={24} height={24} />
        <Image src="/portfolio.svg" alt="portfolio" width={24} height={24} />
      </div>
      <div className={styles.logo}>AyushBlog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
