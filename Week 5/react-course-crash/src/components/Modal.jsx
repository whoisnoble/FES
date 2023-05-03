
import './Modal.css'

function Modal({ action, cancelModal, confirmModal }) {
    return (
        <>
            <div className="modal">
                <p className="modal__title">Are you sure?</p>
                <p className="modal__description">{action}</p>
                <div className="modal__buttons">
                <button className="btn btn__cancel" onClick={(event) => cancelModal()}>Cancel</button>
                <button className="btn" onClick={(event) => confirmModal()}>Confirm</button>
                </div>
            </div>
            <div className="backdrop" />
        </>
    )
}

export default Modal;