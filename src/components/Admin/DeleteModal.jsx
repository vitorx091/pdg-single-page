function DeleteModal({

    isOpen,
    onClose,
    onConfirm

}) {

    if (!isOpen) return null

    return (

        <div className="delete-modal-overlay">

            <div className="delete-modal">

                <h2>
                    Deletar Evento
                </h2>

                <p>
                    Tem certeza que deseja deletar esse evento?
                </p>

                <div className="delete-modal-actions">

                    <button
                        onClick={onClose}
                        className="cancel-btn"
                    >

                        Cancelar

                    </button>

                    <button
                        onClick={onConfirm}
                        className="delete-btn"
                    >

                        Deletar

                    </button>

                </div>

            </div>

        </div>

    )

}

export default DeleteModal