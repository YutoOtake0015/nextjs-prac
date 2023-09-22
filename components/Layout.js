import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

const name = "Yuto Otake";
export const siteTitle = "My Blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              alt="画像"
              src="/images/profile.jpg"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Image
              alt="画像"
              src="/images/profile.jpg"
              className={`${utilStyles.borderCircle} ${styles.headerImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <>
          <Link href="/">HOME</Link>
        </>
      )}
    </div>
  );
}

export default Layout;
