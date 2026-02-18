import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="py-10 px-5 md:px-20 border-t border-white/10 mt-20">

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Prashant Chauhan. All rights reserved.
        </p>

        <div className="flex gap-6 text-xl">
          <a href="https://github.com/Pccode27" className="hover:text-orange-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/prashant-chauhan-29b163292/" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/prashant.chauhan.37" className="hover:text-zinc-400 transition">
            <FaFacebook />
          </a>
        </div>

      </div>

    </footer>
  )
}
