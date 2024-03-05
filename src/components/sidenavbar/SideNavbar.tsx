import styles from "./SideNavBar.module.css";
const SideNavbar = () => {
  return (
    <div className={styles.sideContainer}>
      <h1>Trouvez votre Calm</h1>
      <p>
        Notre objectif est de vous aider à améliorer votre santé et votre
        bien-être.
      </p>
      <p>Comment pouvons-nous vous aider aujourd’hui ?</p>
      <nav>
        <ul>
          <li className={styles.li}>
            <img></img>
            <span>Améliorer la qualité du sommeil</span>
          </li>
          <li className={styles.li}>
            <img></img>
            <span>Réduire le stress ou l’anxiété</span>
          </li>
          <li className={styles.li}>
            <img></img>
            <span>Améliorer ma concentration</span>
          </li>
          <li className={styles.li}>
            <img></img>
            <span>Développement personnel</span>
          </li>
          <li className={styles.li}>
            <img></img>
            <span>Autre chose</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;
