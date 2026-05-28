function ExperienceSection() {

    return (

        <section className="experience-section">

            {/* HEADER */}
            <div className="experience-header">

                <span>
                    SUNSET EXPERIENCE
                </span>

                <h2>
                    Viva o Pagode do Gil
                </h2>

                <p>
                    Música, energia, sunset e uma experiência
                    premium inesquecível.
                </p>

            </div>

            {/* VIDEOS */}
            <div className="experience-grid">

                {/* VIDEO 1 */}
                <div className="experience-video-card">
                    <iframe
                        src="https://www.youtube.com/watch?v=nREyWRAzw1w"
                        title="PDG Experience"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>

                    <div className="experience-overlay">

                        <span>
                            Beijo Lento
                        </span>

                    </div>

                </div>

                {/* VIDEO 2 */}
                <div className="experience-video-card">

                    <iframe
                        src="https://www.youtube.com/watch?v=W-m_NdPdkbY&list=RDEMIUBgxe7OM7IRQY-wts2o2g&index=2"
                        title="PDG Experience"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    ></iframe>

                    <div className="experience-overlay">

                        <span>
                            Premium Experience
                        </span>

                    </div>

                </div>

            </div>

        </section>

    )
}

export default ExperienceSection