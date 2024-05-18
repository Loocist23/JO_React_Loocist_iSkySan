import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="title">Bienvenue sur Notre Site des Jeux Olympiques 2024</h1>
            <p className="intro">Ceci est la page d'accueil de notre merveilleux site. Ici, vous trouverez des informations sur les Jeux Olympiques 2024.</p>

            <h2 className="section-title">Les Sports</h2>
            <p className="content">
                Les Jeux Olympiques 2024 comprendront 32 sports et 329 épreuves. Voici une liste des sports principaux :
                <ul className="sports-list">
                    <li>Athlétisme</li>
                    <li>Natation</li>
                    <li>Cyclisme (Route, Piste, BMX, VTT)</li>
                    <li>Gymnastique (Artistique, Rythmique, Trampoline)</li>
                    <li>Judo</li>
                    <li>Tennis</li>
                    <li>Basketball</li>
                    <li>Football</li>
                    <li>Handball</li>
                    <li>Boxe</li>
                    <li>Escrime</li>
                    <li>Équitation</li>
                    <li>Haltérophilie</li>
                    <li>Rugby à sept</li>
                    <li>Sports nautiques (Aviron, Canoë/Kayak, Voile)</li>
                    <li>Sports de combat (Lutte, Taekwondo)</li>
                    <li>Tir (Arc, Sportif)</li>
                    <li>Triathlon</li>
                    <li>Escalade sportive</li>
                    <li>Surf</li>
                    <li>Breaking (nouveau sport)</li>
                </ul>
            </p>

            <h2 className="section-title">Nombre de Participants</h2>
            <p className="content">Environ 10 500 athlètes de plus de 200 pays sont attendus pour participer aux Jeux Olympiques de Paris 2024. Les athlètes concourront dans diverses disciplines, chacune visant à atteindre l'excellence et à remporter une médaille.</p>

            <h2 className="section-title">Autres Informations</h2>
            <p className="content">
                <strong>Lieu et Dates :</strong> Les Jeux Olympiques 2024 se tiendront à Paris, France, du 26 juillet au 11 août 2024.
                <br/>
                <strong>Cérémonies :</strong> Les cérémonies d'ouverture et de clôture auront lieu au Stade de France, un des stades les plus emblématiques de Paris.
                <br/>
                <strong>Sites de Compétition :</strong>
                <ul className="sites-list">
                    <li>La Tour Eiffel sera le site de l'épreuve de tir à l'arc.</li>
                    <li>Le Grand Palais accueillera les compétitions d'escrime et de taekwondo.</li>
                    <li>La Seine sera utilisée pour les épreuves de natation en eau libre et le triathlon.</li>
                    <li>Le Champ de Mars accueillera le beach-volley.</li>
                    <li>L'Arena de la Porte de la Chapelle sera le site des épreuves de badminton et de gymnastique rythmique.</li>
                </ul>
                <br/>
                <strong>Durabilité :</strong> Paris 2024 met l'accent sur la durabilité et l'inclusion, avec des initiatives visant à réduire l'empreinte carbone des Jeux et à promouvoir la diversité et l'égalité.
            </p>
        </div>
    );
};

export default Home;
