import { Head } from "$fresh/runtime.ts";
import Card from '../components/Card.tsx';
import Layout from '../components/Layout.tsx';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Fresh App</title>
      </Head>

      <Card />

      <Card />

      <Card />


    </Layout>
  );
}
