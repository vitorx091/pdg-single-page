import { useEffect, useState } from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi"

import Container from "./Container"
import NavLinks from "./Navbar/NavLinks"
import SocialLinks from "./Navbar/SocialLinks"
import MobileMenu from "./Navbar/MobileMenu"

function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {

    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (
    <>
      <header
        className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500

        ${scrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
        }
        `}
      >

        <Container>

          <div className="flex items-center justify-between h-24">

            {/* LOGO */}
            <h1 className="
            text-4xl
            tracking-[0.3em]
            font-bold
            ">
              PDG
            </h1>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-14">

              <NavLinks />

              <div className="flex items-center gap-8">

                <SocialLinks />

                <button
                  className="
                  px-6
                  py-3
                  rounded-full
                  bg-[#D4AF37]
                  text-black
                  font-semibold
                  hover:scale-105
                  transition-all
                  duration-300
                  "
                >
                  Ingressos
                </button>

              </div>

            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-4xl lg:hidden"
            >
              <HiOutlineMenuAlt3 />
            </button>

          </div>

        </Container>

      </header>

      {/* MOBILE MENU */}
      <MobileMenu isOpen={menuOpen} />

    </>
  )
}

export default Navbar