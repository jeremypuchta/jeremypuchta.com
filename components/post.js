import Link from "next/link";
import moment from "moment";

export default function Post({ title, date, slug, summary }) {
  return (
    <div className="p-4 -mx-4 mb-4 border-solid border border-gray-200 rounded shadow-none duration-75 transition-all ease-in hover:shadow-md hover:border-transparent">
      <Link href="/[id]" as={`/${slug}`}>
        <a className="hover:no-underline">
          <div className="mb-2">
            <h3 className="text-lg font-semibold leading-slight text-black my-0">{title}</h3>
            <time className="text-sm text-gray-700">{moment(date).format('MMMM DD, YYYY')}</time>
          </div>
          <p className="text-black mb-0">{summary}</p>
        </a>
      </Link>
    </div>
  )
}