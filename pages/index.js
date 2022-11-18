import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Header from "../modules/header/header.module";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lucas Zavala</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.home}>
        <div className={styles.content}>
          <div className={styles.logoMobile}>
            <img src="/assets/images/logo-mobile.svg" alt="" />
          </div>
          <div className={styles.logo}>
            <img src="/assets/images/logo.svg" alt="" />
          </div>
          <p className="text-small">
            Composer, music producer and song writer.
          </p>
          <Link href="/work">
            <div className={styles.work}>View work</div>
          </Link>
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
