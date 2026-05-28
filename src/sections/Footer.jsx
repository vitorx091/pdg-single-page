import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp
} from "react-icons/fa"

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* TOP */}
        <div className="footer-top">

          <h2 className="footer-logo">
            PDG
          </h2>

          <p className="footer-description">
            O sunset mais insano de João Pessoa.
          </p>

        </div>

        {/* SOCIALS */}
        <div className="footer-socials">

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

          <a
            href="#"
            target="_blank"
          >
            <FaWhatsapp />
          </a>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <span>
            © 2026 Pagode do Gil.
          </span>

          <span>
            Todos os direitos reservados.
          </span>

        </div>

      </div>

    </footer>

  )
}

export default Footer