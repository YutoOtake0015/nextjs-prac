import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Layout, { siteTitle } from "../components/Layout";

import utilStyles from "../styles/utils.module.css";
import { getPostsData } from "../lib/posts";

// SSG
export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>JavaScriptを学習中です。</p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2>エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <Image
                    src={`${thumbnail}`}
                    className={styles.thumbnailImage}
                    alt="画像"
                    width={500}
                    height={500}
                  />
                </Link>
                <Link href="/" className={utilStyles.boldText}>
                  {title}
                </Link>
                <br />
                <small className={utilStyles.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
