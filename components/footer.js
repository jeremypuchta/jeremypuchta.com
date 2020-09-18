import { FaTwitter, FaGoodreadsG, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-solid border-t-2 border-gray-200 p-4 text-center">
      <div className="text-xl text-gray-700 pb-4">
        <ul className="flex flex-row justify-center">
          <a href="https://twitter.com/jeremypuchta" target="_blank">
            <li className="px-3 hover:text-black">
              <FaTwitter />
            </li>
          </a>
          <a href="https://github.com/jeremypuchta" target="_blank">
            <li className="px-3 hover:text-black">
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/jeremypuchta/" target="_blank">
            <li className="px-3 hover:text-black">
              <FaLinkedin />
            </li>
          </a>
          <a href="https://www.goodreads.com/user/show/104584432-jeremy-puchta" target="_blank">
            <li className="px-3 hover:text-black">
              <FaGoodreadsG />
            </li>
          </a>
        </ul>
      </div>
      <p className="text-sm">Jeremy Puchta © 2020</p>
    </footer>
  )
}