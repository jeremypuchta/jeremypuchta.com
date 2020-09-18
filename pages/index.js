import { getAllPosts } from "../lib/api"
import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";

export default function IndexPage({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Jeremy Puchta</title>
      </Head>
      <section className="mb-8">
        <h1 className="text-4xl font-bold">Hey, I'm Jerry! 🐊</h1>
        <br />
        <p className="text-xl">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold">Articles</h2>
        {posts.length > 0 ? posts.map(p => (
          <Link href="/posts/[id]" as={`/posts/${p.slug}`}>
            <a>
              <h2>{p.title}</h2>
            </a>
          </Link>
        )) : null}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: { posts },
  }
}