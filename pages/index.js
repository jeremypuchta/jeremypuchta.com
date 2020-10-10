import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";

import Layout from "../components/layout";
import Post from "../components/post";

const root = process.cwd()

export default function IndexPage({ postData }) {
  return (
    <Layout>
      <Head>
        <title>Jeremy Puchta</title>
      </Head>
      <section>
        <h1 className="text-4xl font-bold mb-2 sm:text-5xl">Hey, I'm Jerry!</h1>
        <p className="leading-slight text-gray-800 sm:text-lg">
          I'm a software engineer in love with learning new things.
          On this website I share my latest work and thoughts about various subjects.
          Reach out to me on <a href="https://twitter.com/jeremypuchta">Twitter</a> or meet me in person in <a href="https://www.google.com/maps/place/Leipzig/">Leipzig</a> for a coffee or beer.
        </p>
      </section>
      <section className="my-4">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Articles</h2>
        {postData.map((post) => (
          <Post
            key={post.frontMatter.title}
            title={post.frontMatter.title}
            date={post.frontMatter.publishedAt}
            slug={post.slug}
            summary={post.frontMatter.summary}
          />
        ))}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const contentRoot = path.join(root, 'content')
  const postData = fs.readdirSync(contentRoot).map((p) => {
    const content = fs.readFileSync(path.join(contentRoot, p), 'utf8')
    return {
      slug: p.replace(/\.mdx/, ''),
      content,
      frontMatter: matter(content).data,
    }
  })
  return { props: { postData } }
}