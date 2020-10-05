import Head from "next/head";

import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Jeremy Puchta</title>
      </Head>
      <section className="mb-8">
        <h1 className="text-4xl font-bold">Hey, I'm Jerry!</h1>
        <br />
        <p className="text-xl text-justify">
          I'm a software engineer in love with learning new things.
          On this website I share my latest work and thoughts about various subjects.
          Reach out to me on <a href="https://twitter.com/jeremypuchta">Twitter</a> or meet me in person in <a href="https://www.google.com/maps/place/Leipzig/">Leipzig</a> for a coffee or beer.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Articles</h2>
      </section>
    </Layout>
  )
}