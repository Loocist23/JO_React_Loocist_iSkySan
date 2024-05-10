import { Button } from './Button'

export const Card = ({ title, text, onClick }) => {
    return (
        <div className="cardContainer">
            <h2 className="cardTitle">{title}</h2>
            <p className="cardContent">{text}</p>
            <Button className="cardButton" onClick={onClick}>Voir les détails</Button>
        </div>
    );
};