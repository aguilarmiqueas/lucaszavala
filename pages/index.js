import styles from "../styles/Home.module.scss";
import Header from "../modules/header/header.module";
import Loader from "../modules/loader/loader.module";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { useRouter } from "next/router";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const callback = () => setLoading(true);
  const main = useRef();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Loader callback={callback} />
      <Header refe={main} />

      <main className={styles.home} ref={main}>
        <div className={styles.background}>
          <Image
            src={`/assets/images/background.jpg`}
            className={`${loading && styles.active} ${
              styles.backgroundDesktop
            }`}
            fill
            alt=""
          />
          <Image
            src={`/assets/images/background-mobile.jpg`}
            className={`${loading && styles.active} ${styles.backgroundMobile}`}
            fill
            alt=""
          />
        </div>
        <div className={styles.content}>
          <div className={styles.logoMobile}>
            <img src="/assets/images/logo-mobile.svg" alt="" />
          </div>
          <div className={styles.logo}>
            <img src="/assets/images/logo.svg" alt="" />
          </div>
          <p className="text-small">Composer, music producer and songwriter.</p>

          <div
            className={styles.work}
            onClick={(e) => {
              e.preventDefault();
              gsap.to(main.current, {
                opacity: 0,
                duration: 0.5,
                ease: "pow3.inOut",
                onComplete: () => router.push("/work"),
              });
            }}
          >
            View work
          </div>
          <div className={styles.footer}>
            <ul>
              <li>
                <a
                  href="https://soundcloud.com/lucaszavala"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src="/assets/images/soundcloud.svg"
                    alt="Soundcloud link"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/lucas.zavala.pelli?igshid=MWI4MTIyMDE="
                  target="_blank"
                >
                  <img src="/assets/images/ig.svg" alt="Instagram link" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
