import { Button } from "./Button"
import '../styles/Modal.css'
export const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modalContent">
            <Button className="modalButton" onClick={onClose}>Fermer</Button>
                {children}
            </div>
        </div>
    );
};
