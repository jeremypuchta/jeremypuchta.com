import { getAllPostIds, getPostData } from "../../lib/api";
import Layout from "../../components/layout";

export default function Post({ post }) {
  return (
    <Layout>
      <article>
        <h2 className="text-xl">{post.title}</h2>
        <p>{post.date}</p>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostIds()
  return {
    paths: paths?.map(({ slug }) => `/blog/${slug}`) ?? [],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const data = await getPostData(params.id)
  return {
    props: {
      post: data.post
    }
  }
}
