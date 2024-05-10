import React, { useState } from 'react';
import basketballData from '../basketball.json';
import judoData from '../judo.json'; // Import the judo data
import '../styles/SportFavoris.css'; // Import the CSS file
import {Button} from '../components/Button'
import {Card} from '../components/Card'
import {Modal} from '../components/Modal'

const SportFavoris = () => {
    const [showBasketball, setShowBasketball] = useState(false);
    const [showJudo, setShowJudo] = useState(false); // State for showing judo details

    const handleCloseBasketball = () => setShowBasketball(false);
    const handleShowBasketball = () => setShowBasketball(true);

    const handleCloseJudo = () => setShowJudo(false); // Handlers for showing and hiding judo details
    const handleShowJudo = () => setShowJudo(true);

    return (
        <div>
            <h1>Vos Sports Favoris</h1>
            <p>Sélectionnez vos sports favoris pour obtenir les dernières nouvelles et résultats.</p>
            <Card title="Basketball" text="Cliquez pour voir les détails des événements de basketball." onClick={handleShowBasketball} />
            <Modal show={showBasketball} onClose={handleCloseBasketball}>
                <h2>Détails des événements de Basketball</h2>
                {basketballData.events.map((event, index) => (
                    <div key={index}>
                        Date: {event.date} <br />
                        Time: {event.time} <br />
                        Phase: {event.phase} <br />
                        Teams: {event.teams ? event.teams.join(', ') : 'N/A'} <br />
                        Venue: {event.venue} <br />
                        <hr />
                    </div>
                ))}
            </Modal>
            <Card title="Judo" text="Cliquez pour voir les détails des événements de judo." onClick={handleShowJudo} /> {/* Card for judo events */}
            <Modal show={showJudo} onClose={handleCloseJudo}> {/* Modal for judo events */}
                <h2>Détails des événements de Judo</h2>
                {judoData.events.map((event, index) => (
                    <div key={index}>
                        Category: {event.category} <br />
                        Details: {event.details.map((detail, detailIndex) => (
                            <div key={detailIndex}>
                                Round: {detail.round} <br />
                                Time: {detail.time} <br />
                                <hr />
                            </div>
                        ))}
                    </div>
                ))}
            </Modal>
        </div>
    );
};

export default SportFavoris;