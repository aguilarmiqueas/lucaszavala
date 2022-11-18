import styles from "./footer.module.scss";
export default function Footer({ dark }) {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <img src={`/assets/images/logo-d.svg`} alt="" className={styles.img} />
        <img
          src={`/assets/images/logo-mobile-d.svg`}
          alt=""
          className={styles.imgMobile}
        />
      </div>
    </div>
  );
}
