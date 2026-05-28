import { gallery } from "../data/gallery"

import GalleryCard from "../components/ui/GalleryCard"

function InstagramSection() {

  return (

    <section className="instagram-section">

      <div className="instagram-header">

        <span>
          SOCIAL EXPERIENCE
        </span>

        <h2>
          Siga o PDG
        </h2>

        <p>
          O sunset mais insano de João Pessoa.
        </p>

      </div>

      <div className="instagram-grid">

        {gallery.map((item) => (

          <GalleryCard
            key={item.id}
            item={item}
          />

        ))}

      </div>

      <a
        href="https://instagram.com/pagodedogil"
        target="_blank"
        className="instagram-button"
      >
        @pagodedogil
      </a>

    </section>

  )
}

export default InstagramSection