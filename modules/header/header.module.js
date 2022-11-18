import styles from "./header.module.scss";
import Link from "next/link";
const items = [
  { name: "Home", uri: "/" },
  { name: "Work", uri: "/work" },
  { name: "About", uri: "/about" },
];

export default function Header({ dark, darkMobile }) {
  return (
    <div
      className={`${styles.header} ${dark ? styles.dark : ""} ${
        darkMobile ? styles.darkMobile : ""
      }`}
    >
      <div className={styles.inner}>
        <ul className={styles.items}>
          {items.map((item, index) => {
            return (
              <Link href={item.uri} key={index}>
                <li>{item.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
