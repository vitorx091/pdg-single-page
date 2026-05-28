import NavLinks from "./NavLinks"
import SocialLinks from "./SocialLinks"

function MobileMenu({ isOpen }) {

  return (
    <div
      className={`
      fixed
      top-0
      left-0
      w-full
      h-screen
      bg-black/95
      backdrop-blur-2xl
      z-40
      flex
      flex-col
      items-center
      justify-center
      gap-10
      transition-all
      duration-500

      ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >

      <div className="text-3xl">
        <NavLinks />
      </div>

      <SocialLinks />

    </div>
  )
}

export default MobileMenu