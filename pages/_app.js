import "../styles/globals.css";
import { Inter } from "@next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Head>
        <title>Lucas Ezequiel Zavala</title>
        <meta
          name="description"
          content="Composer, Music Producer and Songwriter"
        />

        <meta property="og:title" content="Lucas Ezequiel Zavala" />
        <meta
          property="og:description"
          content="Composer, Music Producer and Songwriter"
        />
        <meta property="og:url" content="https://lucasezavala.com/" />
        <meta property="og:image" content="/assets/images/about.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Lucas Ezequiel Zavala" />
        <meta
          name="twitter:description"
          content="Composer, Music Producer and Songwriter"
        />
        <meta name="twitter:image" content="/assets/images/about.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
