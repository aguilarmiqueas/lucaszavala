import styles from "./header.module.scss";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/router";
const items = [
  { name: "Home", uri: "/" },
  { name: "Work", uri: "/work" },
  { name: "About", uri: "/about" },
];

export default function Header({ dark, darkMobile, refe }) {
  const router = useRouter();

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
              <li
                className={router.pathname === item.uri ? styles.active : ""}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  gsap.to(refe.current, {
                    opacity: 0,
                    duration: 0.5,
                    ease: "pow3.inOut",
                    onComplete: () => router.push(items[index].uri),
                  });
                }}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
