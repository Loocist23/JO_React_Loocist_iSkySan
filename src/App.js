import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './screens/Home';
import SportFavoris from './screens/SportFavoris'; // Assure-toi de créer ce composant
import Resultats from './screens/Resultats'; // Assure-toi de créer ce composant
import Emplacement from './screens/Emplacement'; // Assure-toi de créer ce composant

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/sport-favoris" element={<SportFavoris />} />
                    <Route path="/resultats" element={<Resultats />} />
                    <Route path="/emplacement" element={<Emplacement />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
