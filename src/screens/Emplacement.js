// Importation des bibliothèques nécessaires
import React, { useState, useEffect } from 'react'; // React et ses hooks
import axios from 'axios'; // Axios pour les requêtes HTTP
import MapComponent from '../components/MapComponent'; // Composant de carte personnalisé

// Définition du composant Emplacements
const Emplacements = () => {
    // Utilisation du hook useState pour gérer l'état des lieux
    const [lieux, setLieux] = useState([]);

    // Utilisation du hook useEffect pour effectuer des actions après le rendu du composant
    useEffect(() => {
        // Définition de la fonction asynchrone pour récupérer les lieux
        const fetchLieux = async () => {
            try {
                // Effectuer une requête GET pour récupérer les données
                const response = await axios.get('https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?limit=99 ');
                // Mettre à jour l'état des lieux avec les données récupérées
                setLieux(response.data.results);
            } catch (error) {
                // En cas d'erreur, afficher l'erreur dans la console
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        // Appeler la fonction pour récupérer les lieux
        fetchLieux();
    }, []); // Le tableau vide signifie que useEffect s'exécutera une fois après le premier rendu du composant

    // Rendu du composant
    return (
        <div>
            <h1>Emplacements des Compétitions - JO Paris 2024</h1>
            {/* Utilisation du composant MapComponent en lui passant les lieux comme props */}
            <MapComponent sites={lieux}/>
        </div>
    );
};

// Exportation du composant pour pouvoir l'utiliser ailleurs
export default Emplacements;