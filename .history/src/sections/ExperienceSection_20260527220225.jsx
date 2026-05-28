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
                    <div
                        className="experience-video-card"
                        onClick={() =>
                            setSelectedVideo(
                                "https://www.youtube.com/embed/nREyWRAzw1w?autoplay=1"
                            )
                        }
                    >

                        <img
                            src="/images/video-thumb1.jpg"
                            alt="Video Thumb"
                        />

                        <div className="experience-overlay">

                            <span>
                                Beijo Lento
                            </span>

                        </div>

                    </div>

                    {/* VIDEO 2 */}
                    <div
                        className="experience-video-card"
                        onClick={() =>
                            setSelectedVideo(
                                "https://www.youtube.com/embed/W-m_NdPdkbY?autoplay=1"
                            )
                        }
                    >

                        <img
                            src="/images/video-thumb2.jpg"
                            alt="Video Thumb"
                        />

                        <div className="experience-overlay">

                            <span>
                                Premium Experience
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