import { Button } from "./Button"

export const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modalContent">
                {children}
                <Button className="modalButton" onClick={onClose}>Fermer</Button>
            </div>
        </div>
    );
};