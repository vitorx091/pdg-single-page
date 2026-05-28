import { useEffect, useState } from "react"

import Container from "./Navbar/Container"
import NavLinks from "./Navbar/NavLinks"
import SocialLinks from "./Navbar/SocialLinks"

function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    function handleScroll(){
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

      <Container>

        <div className="navbar-container">

          <h1 className="navbar-logo">
            PDG
          </h1>

          <div className="hidden lg:flex items-center gap-14">

            <NavLinks />

            <div className="navbar-right">

              <SocialLinks />

              <button className="navbar-button">
                Ingressos
              </button>

            </div>

          </div>

        </div>

      </Container>

    </header>
  )
}

export default Navbar