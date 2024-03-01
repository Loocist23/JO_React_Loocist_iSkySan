import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MapComponent from '../components/MapComponent';

const Emplacements = () => {
    const [lieux, setLieux] = useState([]);

    useEffect(() => {
        const fetchLieux = async () => {
            try {
                const response = await axios.get('https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records');
                setLieux(response.data.results);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchLieux();
    }, []);

    return (
        <div>
            <h1>Emplacements des Compétitions - JO Paris 2024</h1>
            <MapComponent sites={lieux}/>
        </div>
    );
};

export default Emplacements;
