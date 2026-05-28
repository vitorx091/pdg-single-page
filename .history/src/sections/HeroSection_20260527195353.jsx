function HeroSection() {
  return (
    <section className="hero">

      {/* VIDEO */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videos/PDG-CORTE1.mp"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="hero-content">

        <span className="hero-badge">
          SUNSET EXPERIENCE
        </span>

        <h1 className="hero-title">
          O PAGODE MAIS INSANO DE JP
        </h1>

        <p className="hero-subtitle">
          Luxo, música e pôr do sol.
        </p>

        <button className="hero-button">
          Garantir Ingresso
        </button>

      </div>

      {/* SCROLL */}
      <div className="hero-scroll">
        scroll
      </div>

    </section>
  )
}

export default HeroSection