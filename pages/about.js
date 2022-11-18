import Head from "next/head";
import styles from "../styles/About.module.scss";
import Header from "../modules/header/header.module";
import Footer from "../modules/footer/footer.module";
export default function About() {
  return (
    <div className={styles.about}>
      <Head>
        <title>About - Lucas Zavala</title>
        <meta name="description" content="About me" />
      </Head>
      <main className={styles.inner}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <img src="/assets/images/about.jpg" alt="" className={styles.img} />
            <img
              src="/assets/images/about-mobile.jpg"
              alt=""
              className={styles.imgMobile}
            />
          </div>
          <div className={styles.content}>
            <p>
              Born in Resistencia, Argentina, Lucas studied Guitar and Sound
              Design at the Academy of Contemporary Music in Guilford, UK and is
              now based between Los Angeles and London.
            </p>
            <div className={styles.social}>
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
                  <a href="">
                    <img src="/assets/images/ig-d.svg" alt="Instagram link" />
                  </a>
                </li>
              </ul>
            </div>
            <a href="mailto:lucas.e.zavala@gmail.com" className={styles.email}>
              lucas.e.zavala@gmail.com
            </a>
          </div>
        </div>
      </main>
      <Footer />

      <Header darkMobile />
    </div>
  );
}
