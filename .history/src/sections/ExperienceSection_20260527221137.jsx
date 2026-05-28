import { useState } from "react"

import VideoModal from "../components/ui/VideoModal"

function ExperienceSection() {

    const [selectedVideo, setSelectedVideo] = useState(null)

    return (

        <>

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
                            src="https://www.youtube.com/embed/nREyWRAzw1w?autoplay=1&mute=1"
                            title="PDG Experience"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>

                        <div className="experience-overlay">

                            <span>
                                Beijo Lento - Gil Junior (Clipe Oficial)
                            </span>

                        </div>

                    </div>

                    {/* VIDEO 2 */}
                    <div className="experience-video-card">

                        <iframe
                            src="https://www.youtube.com/embed/MvvIt8PprBo?autoplay=1&mute=1"
                            title="PDG Experience"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>

                        <div className="experience-overlay">

                            <span>
                                Pagode DGil- Lapada Dela / Leite Condensado
                            </span>

                        </div>

                    </div>

                </div>

            </section>

            <VideoModal
                video={selectedVideo}
                onClose={() => setSelectedVideo(null)}
            />

        </>

    )
}

export default ExperienceSection