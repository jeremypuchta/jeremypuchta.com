import Link from "next/link";

export default function Header() {
  return (
    <header className="pb-8 flex justify-between">
      <Link href="/">
        <a className="hover:no-underline">
          <h1 className="text-3xl font-extrabold text-black m-0">Jeremy Puchta</h1>
        </a>
      </Link>
      <section className="flex items-center">
        <Link href="/">
          <a className="p-4 rounded text-black hover:bg-gray-200">
            <button className="font-semibold">Home</button>
          </a>
        </Link>
        <Link href="/">
          <a className="p-4 rounded text-black hover:bg-gray-200">
            <button className="font-semibold">About</button>
          </a>
        </Link>
      </section>
    </header>
  )
}