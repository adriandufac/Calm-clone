import styles from "./Navbar.module.css";
import logo from "../../assets/calm-logo.png";

const navbar = () => {
  return (
    <div className={styles.mainContainer}>
      <nav className={styles.nav}>
        <img src={logo} className={styles.logo} alt="Calm logo" />

        <div className={styles.ulBox}>
          <ul className={styles.ul}>
            <li className={[styles.li, styles.li1].join(" ")}>
              <p>Calm Business</p>
            </li>
            <li className={[styles.li, styles.li2].join(" ")}>
              <p>Connect</p>
            </li>
            <li className={[styles.li, styles.tryIt, styles.li3].join(" ")}>
              <p>Try Calm for free</p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
