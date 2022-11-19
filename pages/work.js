import styles from "../styles/Work.module.scss";
import Header from "../modules/header/header.module";
import Footer from "../modules/footer/footer.module";
import { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import Title from "../modules/title/title.module";
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
            {" "}
            <Title
              title={"Tatort: Katz und Maus"}
              subtitle={"MadeFor Film Production"}
              url={"https://www.imdb.com/title/tt18569724/"}
            />
            <a href={"https://televisionale.de/preise/rolf-hans-muellerpreis"}>
              <h3>
                Nominated for the 2022 Rolf-Hanz Müller Prize for Film Music.
              </h3>
            </a>
          </div>
          <div className={styles.itemWrap}>
            <Title
              title={"Baumbacher Syndrome"}
              subtitle={"A film by Gregory Kirchhoff"}
              url={"https://www.imdb.com/title/tt9409448/"}
            />
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1529164339&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
          <div className={styles.itemWrap}>
            <Title
              title={"Dusky Paradise"}
              subtitle={"A film by Gregory Kirchhoff"}
              url={"https://www.imdb.com/title/tt4119044/"}
            />
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/429463346&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </div>
          <div className={`${styles.videos} ${styles.itemWrap}`}>
            <Title
              title={"It's Your Country"}
              subtitle={"Short documentary series by Tim Sessler."}
              url={"https://vimeo.com/channels/itsyourcountry/videos"}
            />
            <div className={`${styles.iframeWrap}`}>
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
            <div className={`${styles.iframeWrap}`}>
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
