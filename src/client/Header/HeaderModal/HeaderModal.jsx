import styles from "./HeaderModal.module.scss";
import svg from "../../../shared/images/sprite.svg";
const HeaderModal = () => {
  return (
    <div className={styles.Modal}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.jobSeeker} href="/">
            Соискателю
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.employer} href="/find">
            Работодатель
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.hr} href="/">
            HR
          </a>
        </li>
        <li className={styles.item}>
          <p>Войти</p>
        </li>
        <li>
          <svg className={styles.svgNetwork}>
            <use className={styles.network} href={`${svg}#network`}></use>
          </svg>
        </li>
      </ul>
    </div>
  );
};
export default HeaderModal;
