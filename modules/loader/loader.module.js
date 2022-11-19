import styles from "./loader.module.scss";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Loader({ callback }) {
  const [loading, setLoading] = useState(true);

  const loader = useRef();
  const logo = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(logo.current, {
      opacity: 1,
      ease: "pow3.out",
      duration: 0.6,
      delay: 1,
    });
    tl.to(loader.current, {
      opacity: 0,
      ease: "pow3.out",
      duration: 0.6,
      delay: 0.3,
      onComplete: () => {
        setLoading(false);
        callback();
      },
    });
  }, []);
  return (
    loading && (
      <div className={styles.loader} ref={loader}>
        <div className={styles.inner}>
          <div className={styles.logoWrap} ref={logo}>
            <img
              src="/assets/images/logo-d.svg"
              alt=""
              className={styles.logo}
            />
            <img
              src="/assets/images/logo-mobile-d.svg"
              alt=""
              className={styles.logoMobile}
            />
          </div>
        </div>
      </div>
    )
  );
}
