function VideoModal({ video, onClose }) {

  if (!video) return null

  return (

    <div
      className="video-modal"
      onClick={onClose}
    >

      <div
        className="video-modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="video-close"
          onClick={onClose}
        >
          ✕
        </button>

        <iframe
          src={video}
          title="PDG Video"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>

      </div>

    </div>

  )
}

export default VideoModal