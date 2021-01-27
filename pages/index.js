import Head from "next/head";

import Layout from "../components/layout";
import Post from "../components/post";

import { getSortedPostsData } from '../lib/posts'

export default function IndexPage({ postData }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Jeremy Puchta</title>
      </Head>
      <section>
        <h1 className="text-3xl font-bold mt-0 mb-2 sm:text-4xl">Hey, I'm Jerry!</h1>
        <p className="text-gray-900 text-lg">
          I'm a software engineer in love with learning new things.
          On this website I share my latest work and thoughts about various subjects.
          Reach out to me on <a href="https://twitter.com/jeremypuchta" target="_blank">Twitter</a> or meet me in person in <a href="https://www.google.com/maps/place/Leipzig/" target="_blank">Leipzig</a> for a coffee or beer.
        </p>
      </section>
      <section className="my-4">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Articles</h2>
        {postData.map((post) => (
          <Post
            key={post.title}
            title={post.title}
            date={post.publishedAt}
            slug={post.slug}
            summary={post.summary}
          />
        ))}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const postData = getSortedPostsData()
  return {
    props: {
      postData
    }
  }
}