import styles from "../styles/Work.module.scss";
import Header from "../modules/header/header.module";
import Footer from "../modules/footer/footer.module";
const links = [""];

export default function Work() {
  return (
    <div className={styles.work}>
      <Header dark />
      <div className={styles.wrapper}>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
