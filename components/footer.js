import { FaTwitter, FaGoodreadsG, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-solid border-t-2 border-gray-200 p-4 items-center text-center sm:text-left sm:flex sm:flex-row-reverse sm:justify-between">
      <div className="text-2xl pb-4 sm:pb-0 social">
        <ul className="flex flex-row justify-center">
          <a href="https://twitter.com/jeremypuchta" target="_blank">
            <li className="px-3 text-gray-700 hover:text-black">
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
            <li className="px-3 text-gray-700 hover:text-black">
              <FaGoodreadsG />
            </li>
          </a>
        </ul>
      </div>
      <p className="hidden sm:flex text-2xl">🐊</p>
      <p className="text-sm text-gray-700 items-center">© 2020 Jeremy Puchta.</p>
    </footer>
  )
}