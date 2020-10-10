import Link from "next/link";
import moment from "moment";

export default function Post({ title, date, slug, summary }) {
  return (
    <div className="mb-8">
      <Link href="/[id]" as={`/${slug}`}>
        <a>
          <div className="mb-2">
            <h3 className="text-lg font-semibold leading-slight">{title}</h3>
            <time className="text-sm text-gray-700">{moment(date).format('MMMM DD, YYYY')}</time>
          </div>
          <p className="">{summary}</p>
        </a>
      </Link>
    </div>
  )
}