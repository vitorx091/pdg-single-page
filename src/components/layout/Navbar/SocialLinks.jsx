import { FaInstagram, FaTiktok } from "react-icons/fa"

function SocialLinks() {
  return (
    <div className="navbar-socials">

      <a
        href="https://instagram.com/pagodedogil"
        target="_blank"
      >
        <FaInstagram />
      </a>

      <a
        href="#"
        target="_blank"
      >
        <FaTiktok />
      </a>

    </div>
  )
}

export default SocialLinks