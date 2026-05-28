import { FaInstagram } from "react-icons/fa"

function GalleryCard({ item }) {

  return (

    <div className="gallery-card">

      <img
        src={item.image}
        alt="PDG Gallery"
      />

      <div className="gallery-overlay">

        <FaInstagram />

      </div>

    </div>

  )
}

export default GalleryCard