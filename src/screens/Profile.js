import React, { useEffect, useState } from 'react';
import user from '../user.json';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        setUserData(user);
        setFormData(user);
    }, []);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSave = () => {
        setUserData(formData);
        handleClose();
    };

    if (!userData) {
        return <div>Chargement...</div>;
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Profil de l'utilisateur</h1>
            <p><strong>Pseudo :</strong> {userData.pseudo}</p>
            <p><strong>Date de création du compte :</strong> {userData.creationDate}</p>
            <p><strong>Sports préférés :</strong> {userData.favoriteSports.join(', ')}</p>

            <h2>Informations personnelles :</h2>
            <p><strong>Nom :</strong> {userData.personalInfo.name}</p>
            <p><strong>Âge :</strong> {userData.personalInfo.age} ans</p>
            <p><strong>Pays :</strong> {userData.personalInfo.country}</p>
            <p><strong>Ville :</strong> {userData.personalInfo.city}</p>

            <h2>Historique de participation :</h2>
            <ul>
                {userData.participationHistory.map((event, index) => (
                    <li key={index}>{event}</li>
                ))}
            </ul>

            <h2>Activité récente :</h2>
            <ul>
                {userData.recentActivity.map((activity, index) => (
                    <li key={index}>{activity}</li>
                ))}
            </ul>

            <h2>Badges :</h2>
            <ul>
                {userData.badges.map((badge, index) => (
                    <li key={index}><strong>{badge.name} :</strong> {badge.description}</li>
                ))}
            </ul>

            <h2>Amis :</h2>
            <p>{userData.friends.join(', ')}</p>

            <h2>Statistiques personnelles :</h2>
            <p><strong>Nombre de commentaires :</strong> {userData.stats.comments}</p>
            <p><strong>Articles partagés :</strong> {userData.stats.sharedArticles}</p>
            <p><strong>Photos téléchargées :</strong> {userData.stats.uploadedPhotos}</p>

            <h2>Préférences :</h2>
            <p><strong>Notifications :</strong> {userData.preferences.notifications}</p>
            <p><strong>Langue :</strong> {userData.preferences.language}</p>
            <p><strong>Mode de visualisation :</strong> {userData.preferences.viewMode}</p>

            <Button onClick={handleShow}>Modifier les informations</Button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifier les informations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div>
                            <label>Pseudo :</label>
                            <input
                                type="text"
                                name="pseudo"
                                value={formData.pseudo}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Date de création du compte :</label>
                            <input
                                type="text"
                                name="creationDate"
                                value={formData.creationDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>Sports préférés :</label>
                            <input
                                type="text"
                                name="favoriteSports"
                                value={formData.favoriteSports.join(', ')}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    favoriteSports: e.target.value.split(',').map(sport => sport.trim())
                                })}
                            />
                        </div>
                        <div>
                            <label>Nom :</label>
                            <input
                                type="text"
                                name="personalInfo.name"
                                value={formData.personalInfo.name}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    personalInfo: {
                                        ...formData.personalInfo,
                                        name: e.target.value
                                    }
                                })}
                            />
                        </div>
                        <div>
                            <label>Âge :</label>
                            <input
                                type="text"
                                name="personalInfo.age"
                                value={formData.personalInfo.age}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    personalInfo: {
                                        ...formData.personalInfo,
                                        age: e.target.value
                                    }
                                })}
                            />
                        </div>
                        <div>
                            <label>Pays :</label>
                            <input
                                type="text"
                                name="personalInfo.country"
                                value={formData.personalInfo.country}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    personalInfo: {
                                        ...formData.personalInfo,
                                        country: e.target.value
                                    }
                                })}
                            />
                        </div>
                        <div>
                            <label>Ville :</label>
                            <input
                                type="text"
                                name="personalInfo.city"
                                value={formData.personalInfo.city}
                                onChange={(e) => setFormData({
                                    ...formData,
                                    personalInfo: {
                                        ...formData.personalInfo,
                                        city: e.target.value
                                    }
                                })}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Annuler</Button>
                    <Button variant="primary" onClick={handleSave}>Enregistrer</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UserProfile;