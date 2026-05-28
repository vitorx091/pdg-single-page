import {
  FaInstagram,
  FaTiktok
} from "react-icons/fa"

function MobileMenu({ isOpen }) {

  return (

    <div
      className={`
      mobile-menu
      ${isOpen ? "active" : ""}
      `}
    >

      {/* LOGO */}
      <h2 className="mobile-logo">
        PDG
      </h2>

      {/* LINKS */}
      <nav className="mobile-links">

        <a href="#">
          Home
        </a>

        <a href="#">
          Eventos
        </a>

        <a href="#">
          Experiência
        </a>

        <a href="#">
          Instagram
        </a>

      </nav>

      {/* BUTTON */}
      <button className="mobile-button">
        Garantir Ingresso
      </button>

      {/* SOCIALS */}
      <div className="mobile-socials">

        <a
          href="https://instagram.com/pagodedogil"
          target="_blank"
        >
          <FaInstagram />
        </a>

        <a href="#">
          <FaTiktok />
        </a>

      </div>

    </div>

  )
}

export default MobileMenu