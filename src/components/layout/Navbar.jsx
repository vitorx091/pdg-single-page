import { useEffect, useState } from "react"

import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"

import Container from "./Container"

import NavLinks from "./Navbar/NavLinks"
import SocialLinks from "./Navbar/SocialLinks"
import MobileMenu from "./Navbar/MobileMenu"

function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {

    function handleScroll() {
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

          {/* LOGO */}
          <h1 className="navbar-logo">
            PDG
          </h1>

          {/* DESKTOP */}
          <div className="hidden lg:flex items-center gap-14">

            <NavLinks />

            <div className="navbar-right">

              <SocialLinks />

              <button className="navbar-button">
                Ingressos
              </button>

            </div>

          </div>

          {/* MOBILE BUTTON */}
          <button
            className="menu-button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            {menuOpen
              ? <HiX />
              : <HiOutlineMenuAlt3 />
            }

          </button>

        </div>

      </Container>

      <MobileMenu isOpen={menuOpen} />

    </header>
  )
}

export default Navbar