import Link from "next/link";

export default function Header() {
  return (
    <header className="pb-8">
      <Link href="/">
        <a>
          <h1 className="text-3xl font-extrabold">Jeremy Puchta</h1>
        </a>
      </Link>
    </header>
  )
}