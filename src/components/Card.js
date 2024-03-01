import React, { useState } from 'react';

const Card = ({ site }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCard = () => setIsOpen(!isOpen);

    return (
        <div onClick={toggleCard} style={{ cursor: 'pointer', border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px' }}>
            <h2>{site.nom_du_site}</h2>
            {isOpen && (
                <div>
                    <p><strong>Sport(s) :</strong> {site.sports}</p>
                    <p><strong>Dates :</strong> Du {site.start_date} au {site.end_date}</p>
                    {site.adress && <p><strong>Adresse :</strong> {site.adress}</p>}
                    <p><strong>Latitude :</strong> {site.latitude} / <strong>Longitude :</strong> {site.longitude}</p>
                </div>
            )}
        </div>
    );
};

export default Card;
