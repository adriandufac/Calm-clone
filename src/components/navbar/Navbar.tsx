import styles from "./Navbar.module.css";
import logo from "../../assets/calm-logo.png";

const navbar = () => {
  return (
    <div className={styles.mainContainer}>
      <nav className={styles.nav}>
        <img src={logo} className={styles.logo} alt="Calm logo" />

        <div className={styles.ulBox}>
          <ul className={styles.ul}>
            <li className={styles.li}>Calm Business</li>
            <li className={styles.li}>Connect</li>
            <li className={styles.li} id={styles.tryIt}>
              Try Calm for free
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
