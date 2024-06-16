import React, { useEffect, useState } from 'react';
import '../styles/SportFavoris.css'; // Import the CSS file
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Modal } from '../components/Modal';
import user from '../user.json'; // Import user data

const SportFavoris = () => {
    const [showBasketball, setShowBasketball] = useState(false);
    const [showJudo, setShowJudo] = useState(false);
    const [basketballData, setBasketballData] = useState(null);
    const [judoData, setJudoData] = useState(null);

    useEffect(() => {
        if (user.favoriteSports.includes("Basketball")) {
            import('../basketball.json')
                .then(data => setBasketballData(data.default))
                .catch(error => console.error('Error loading basketball data:', error));
        }
        if (user.favoriteSports.includes("Judo")) {
            import('../judo.json')
                .then(data => setJudoData(data.default))
                .catch(error => console.error('Error loading judo data:', error));
        }
    }, []);

    const handleCloseBasketball = () => setShowBasketball(false);
    const handleShowBasketball = () => setShowBasketball(true);

    const handleCloseJudo = () => setShowJudo(false);
    const handleShowJudo = () => setShowJudo(true);

    return (
        <div>
            <h1>Vos Sports Favoris</h1>
            <p>Sélectionnez vos sports favoris pour obtenir les dernières nouvelles et résultats.</p>
            <div className="cards">
             {user.favoriteSports.includes("Basketball") && basketballData && (
               <>
                
                    <Card title="Basketball" text="Cliquez pour voir les détails des événements de basketball." onClick={handleShowBasketball} />
                    <Modal show={showBasketball} onClose={handleCloseBasketball}>
                        <h2 className='modal-title'>Détails des événements de Basketball</h2>
                        {basketballData.events.map((event, index) => (
                            <div key={index} className='modal-content'>
                             <div>Date: {event.date}</div>
                             <div>Heure: {event.time}</div>
                             <div>Phase: {event.phase}</div>
                             <div>Equipe: {event.teams ? event.teams.join(', ') : 'N/A'}</div>
                             <div>Lieux: {event.venue}</div>
                                <hr />
                            </div>
                        ))}
                    </Modal>
                </>
             )}
              {user.favoriteSports.includes("Judo") && judoData && (
                <>
                    <Card title="Judo" text="Cliquez pour voir les détails des événements de judo." onClick={handleShowJudo} />
                    <Modal show={showJudo} onClose={handleCloseJudo}>
                        <h2 className='modal-title'>Détails des événements de Judo</h2>
                        {judoData.events.map((event, index) => (
                            <div key={index} className='modal-content border-div'>
                                <div>Catégorie: {event.category}</div>
                                 Détails: {event.details.map((detail, detailIndex) => (
                                <div key={detailIndex}>
                                 <div>Round: {detail.round}</div>
                                 <div>Heure: {detail.time}</div>
                                    <hr />
                                </div>
                            ))}
                            </div>
                        ))}
                    </Modal>
                </>
             )}
            </div>
        </div>
    );
};

export default SportFavoris;
