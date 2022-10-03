import Head from "next/head";
import styles from "styles/Home.module.css";
import Layout from "components/layout";
import Hero from "components/hero";
import Posts from "components/posts";
import ImgTexts from "components/imgtexts";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ホーム</title>
      </Head>
      <Hero />
      <ImgTexts />
      <Posts />
    </Layout>
  );
}
