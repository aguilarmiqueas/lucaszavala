import styles from "../styles/Work.module.scss";
import Header from "../modules/header/header.module";
import Footer from "../modules/footer/footer.module";
import { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
const links = [""];

export default function Work() {
  const main = useRef();
  return (
    <div className={styles.work}>
      <Header dark refe={main} />
      <div className={styles.wrapper} ref={main}>
        <h1>Selected Gallery</h1>
        <div className={styles.items}>
          <div className={styles.itemWrap}>
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/429463346&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
          <div className={styles.itemWrap}>
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/429463346&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
          <div className={styles.videos}>
            <div className={`${styles.itemWrap} ${styles.iframeWrap}`}>
              <div className={styles.video}>
                <div className={styles.vimeoWrap}>
                  <iframe
                    src="https://player.vimeo.com/video/32431511?h=32431511&amp;app_id=122963\"
                    frameborder="0"
                    allowfullscreen
                    title="IT&amp;#039;S YOUR COUNTRY - Episode 1: PRIDE"
                  />
                </div>
              </div>
              <div className={styles.video}>
                <div className={styles.vimeoWrap}>
                  <iframe
                    src="https://player.vimeo.com/video/45286136?h=c0669ab922&amp;app_id=122963\"
                    frameborder="0"
                    allowfullscreen
                    title="IT&amp;#039;S YOUR COUNTRY - Episode 2: SHIFT"
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.itemWrap} ${styles.iframeWrap}`}>
              <div className={styles.video}>
                <div className={styles.vimeoWrap}>
                  <iframe
                    src="https://player.vimeo.com/video/54150332?h=c0669ab922&amp;app_id=122963\"
                    frameborder="0"
                    allowfullscreen
                    title="IT&amp;#039;S YOUR COUNTRY - Episode 3: ROOTS\"
                  />
                </div>
              </div>
              <div className={styles.video}>
                <div className={styles.vimeoWrap}>
                  <iframe
                    src="https://player.vimeo.com/video/74421921?h=c0669ab922&amp;app_id=122963\"
                    frameborder="0"
                    allowfullscreen
                    title="IT&amp;#039;S YOUR COUNTRY - Episode 4: CHICANO\"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
