import fs from "fs";
import path from "path";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import moment from "moment";
import mdxPrism from "mdx-prism";

import Layout from "../components/layout";

const root = process.cwd()

export default function Post({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource)

  return (
    <Layout>
      <article>
        <header className="mb-8">
          <h1 className="text-4xl m-0 font-extrabold sm:text-5xl leading-slight">{frontMatter.title}</h1>
          <time className="text-gray-700 text-sm">{moment(frontMatter.publishedAt).format("Do MMMM YYYY")}</time>
        </header>
        <main className="markdown">
          {content}
        </main>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: fs
      .readdirSync(path.join(root, 'content'))
      .map((p) => ({ params: { id: p.replace(/\.mdx/, '') } })),
  }
}

export async function getStaticProps({ params }) {
  const source = fs.readFileSync(
    path.join(root, 'content', `${params.id}.mdx`),
    'utf8'
  )
  const { data, content } = matter(source)
  const mdxSource = await renderToString(content, {
    mdxOptions: {
      rehypePlugins: [mdxPrism]
    }
  })
  return { props: { mdxSource, frontMatter: data } }
}
