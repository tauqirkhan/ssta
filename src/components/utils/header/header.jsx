import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">SSTA</Link>
        </div>
        <nav>
          <ul className={styles.ul}>
            <li>
              <Link to="/#home">Home</Link>
            </li>
            <li>
              <Link to="/#about">About us</Link>
            </li>
            <li>
              <Link to="/#mission">Our Mission</Link>
            </li>
            <li>
              <Link to="/#why-ssta">Why SSTA?</Link>
            </li>
            <li>
              <Link to="/#contact-us">Contact Us</Link>
            </li>
            <li className={styles.dropdown}>
              <span className={styles.dropBtn}>
                <span className={styles.arrow}></span> More
              </span>
              <ul className={styles.dropdownContent}>
                <li>
                  <Link to="/courses">Our Courses</Link>
                </li>
                <li>
                  <Link to="/team">Our Team</Link>
                </li>
                <li>
                  <Link to="/partners">Partner With Us</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
