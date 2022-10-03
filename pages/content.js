import Head from "next/head";
import Layout from "components/layout";
import Entry from "components/entry";
import Plans from "components/plans";

export default function Content() {
  return (
    <Layout>
      <Head>
        <title>サービス案内</title>
      </Head>
      <Entry />
      <Plans />
    </Layout>
  );
}
