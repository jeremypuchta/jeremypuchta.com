import { getAllPostIds, getPostData } from "../lib/api";
import Layout from "../components/layout";
import ReactMarkdown from "react-markdown";
import moment from "moment";

export default function Post({ post }) {
  return (
    <Layout>
      <article>
        <div className="pb-4">
          <h2 className="text-4xl sm:text-6xl font-extrabold">{post.title}</h2>
          <p className="italic">Published on {moment(post.date).format('MMMM DD, YYYY')}</p>
        </div>
        <div className="markdown">
          <ReactMarkdown source={post.content} />
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostIds()
  return {
    paths: paths?.map(({ slug }) => `/${slug}`) ?? [],
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
