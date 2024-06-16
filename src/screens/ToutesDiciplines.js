import React, { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import '../styles/ToutesDiciplines.css';

const ToutesDiciplines = () => {
    const [events, setEvents] = useState([]);
    const [sortType, setSortType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('/sports.json') // Assurez-vous que sports.json est dans le dossier public
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error('Erreur lors du chargement des données:', error));
    }, []);

    const sortEvents = (type) => {
        const sorted = [...events];
        switch (type) {
            case 'alphabetical':
                sorted.sort((a, b) => a.discipline.localeCompare(b.discipline));
                break;
            case 'date':
                sorted.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
                break;
            case 'medals':
                sorted.sort((a, b) => a.medal_sessions.split(',').length - b.medal_sessions.split(',').length);
                break;
            case 'days':
                sorted.sort((a, b) => {
                    const getDays = (start, end) => (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24) + 1;
                    return getDays(a.startDate, a.endDate) - getDays(b.startDate, b.endDate);
                });
                break;
            default:
                break;
        }
        setEvents(sorted);
    };

    useEffect(() => {
        if (sortType) {
            sortEvents(sortType);
        }
    }, [sortType]);

    const filteredEvents = events.filter(event =>
        event.discipline.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Derniers Résultats</h1>
            <p>Consultez les derniers résultats de vos sports favoris!</p>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Rechercher une épreuve"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="sort-buttons">
                <button onClick={() => setSortType('alphabetical')}>Trier par ordre alphabétique</button>
                <button onClick={() => setSortType('date')}>Trier par date</button>
                <button onClick={() => setSortType('medals')}>Trier par nombre de médailles</button>
                <button onClick={() => setSortType('days')}>Trier par nombre de jours d'épreuve</button>
            </div>
            <div className="card-grid">
                {filteredEvents.map((event, index) => (
                    <Card
                        key={index}
                        title={event.discipline}
                        text={`Date: ${new Date(event.startDate).toLocaleDateString()} au ${new Date(event.endDate).toLocaleDateString()}\nLieu: ${event.location}\nSessions de médailles: ${event.medal_sessions}`}
                        onClick={() => console.log('Voir les détails de', event.discipline)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToutesDiciplines;
