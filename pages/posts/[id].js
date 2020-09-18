import { getAllPostIds, getPostData } from "../../lib/api";
import Layout from "../../components/layout";

export default function Post({ post }) {
  console.log(post)
  return (
    <Layout>
      <article>
        <h2>{post.title}</h2>
        <p>{post.date}</p>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostIds()
  return {
    paths: paths?.map(({ slug }) => `/posts/${slug}`) ?? [],
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
