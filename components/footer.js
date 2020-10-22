import Link from 'next/link';
import { FaTwitter, FaGoodreadsG, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="max-w-screen-md mx-auto border-solid border-t-2 border-gray-200 py-4 items-center text-center sm:text-left sm:flex sm:flex-row sm:justify-between">
      <p className="text-sm text-gray-700 items-center mb-4 sm:mb-0">© 2020 Jeremy Puchta.</p>
      <div className="text-xl mb-4 sm:mb-0 social">
        <ul className="flex flex-row justify-center">
          <a href="https://twitter.com/jeremypuchta" target="_blank">
            <li className="pr-3 text-gray-700 hover:text-black">
              <FaTwitter />
            </li>
          </a>
          <a href="https://github.com/jeremypuchta" target="_blank">
            <li className="px-3 text-gray-700 hover:text-black">
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/jeremypuchta/" target="_blank">
            <li className="px-3 text-gray-700 hover:text-black">
              <FaLinkedin />
            </li>
          </a>
          <a href="https://www.goodreads.com/user/show/104584432-jeremy-puchta" target="_blank">
            <li className="pl-3 text-gray-700 hover:text-black">
              <FaGoodreadsG />
            </li>
          </a>
        </ul>
      </div>
      <Link href="/legal">
        <a>
          <p className="text-sm mb-0">Privacy & Terms</p>
        </a>
      </Link>
    </footer>
  )
}