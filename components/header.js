import Link from "next/link";

export default function Header() {
  return (
    <header className="pb-8">
      <Link href="/">
        <a className="hover:no-underline">
          <h1 className="text-3xl font-extrabold text-black">Jeremy Puchta</h1>
        </a>
      </Link>
    </header>
  )
}