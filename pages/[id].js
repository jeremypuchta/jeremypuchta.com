import Layout from "../components/layout";
import ReactMarkdown from "react-markdown";
import moment from "moment";

export default function Post() {
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
