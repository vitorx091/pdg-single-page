import { FaInstagram, FaTiktok } from "react-icons/fa"

function SocialLinks() {
  return (
    <div className="flex items-center gap-5 text-xl">

      <a
        href="https://instagram.com/pagodedogil"
        target="_blank"
        className="
        hover:text-[#D4AF37]
        hover:scale-110
        transition-all
        duration-300
        "
      >
        <FaInstagram />
      </a>

      <a
        href="#"
        target="_blank"
        className="
        hover:text-[#D4AF37]
        hover:scale-110
        transition-all
        duration-300
        "
      >
        <FaTiktok />
      </a>

    </div>
  )
}

export default SocialLinks