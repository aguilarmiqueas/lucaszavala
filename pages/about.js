import Head from "next/head";
import styles from "../styles/About.module.scss";
import Header from "../modules/header/header.module";
import Footer from "../modules/footer/footer.module";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";

export default function About() {
  const main = useRef();
  const image = useRef();
  const text = useRef();
  const socials = useRef();
  const email = useRef();
  const divs = [image.current, text.current, socials.current, email.current];

  return (
    <div className={styles.about}>
      <Header darkMobile refe={main} />
      <main className={styles.inner} ref={main}>
        <div className={styles.wrapper}>
          <div className={styles.image} ref={image}>
            <img src="/assets/images/about.jpg" alt="" className={styles.img} />
            <img
              src="/assets/images/about-mobile.jpg"
              alt=""
              className={styles.imgMobile}
            />
          </div>
          <div className={styles.content}>
            <p ref={text}>
              Born in Resistencia, Argentina, Lucas studied Guitar and Sound
              Design at the Academy of Contemporary Music in Guilford, UK and is
              now based between Los Angeles and London.
            </p>
            <div className={styles.social} ref={socials}>
              <ul>
                <li>
                  <a
                    href="https://soundcloud.com/lucaszavala"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src="/assets/images/soundcloud-d.svg"
                      alt="Soundcloud link"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/lucas.zavala.pelli?igshid=MWI4MTIyMDE="
                    target="_blank"
                  >
                    <img src="/assets/images/ig-d.svg" alt="Instagram link" />
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="mailto:lucas.e.zavala@gmail.com"
              className={styles.email}
              ref={email}
            >
              lucas.e.zavala@gmail.com
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
