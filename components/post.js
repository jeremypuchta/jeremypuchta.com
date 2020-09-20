import Link from "next/link";
import moment from "moment";

export default function Post({ date, slug, title }) {
  return (
    <div className="border-b sm:border-none border-gray-300">
      <Link href="/blog/[id]" as={`/blog/${slug}`}>
        <a>
          <div className="p-3 my-2 rounded -mx-3 sm:hover:bg-gray-100">
            <time className="text-xs font-normal text-gray-600">{moment(date).format('MMMM DD, YYYY')}</time>
            <h3 className="text-xl font-semibold text-black">{title}</h3>
          </div>
        </a>
      </Link>
    </div>
  )
}