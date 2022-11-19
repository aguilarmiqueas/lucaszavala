import styles from "./title.module.scss";

export default function Title({ title, subtitle, url }) {
  return (
    <a href={url} target="_blank">
      <div className={styles.title}>
        <img src="/assets/images/play.svg" alt="" />
        <h2>
          {title} <span>- {subtitle}</span>
        </h2>
      </div>
    </a>
  );
}
