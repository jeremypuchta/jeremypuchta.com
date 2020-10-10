import Link from "next/link";
import moment from "moment";

export default function Post({ title, date, slug, summary }) {
  return (
    <div className="mb-8">
      <Link href="/[id]" as={`/${slug}`}>
        <a className="hover:no-underline">
          <div className="mb-2">
            <h3 className="text-lg font-semibold leading-slight text-black">{title}</h3>
            <time className="text-sm text-gray-700">{moment(date).format('MMMM DD, YYYY')}</time>
          </div>
          <p className="text-black">{summary}</p>
        </a>
      </Link>
    </div>
  )
}