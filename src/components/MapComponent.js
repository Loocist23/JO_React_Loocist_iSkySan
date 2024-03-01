import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Correction du bug d'affichage des icônes de marqueur
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = ({ sites }) => {
    return (
        <MapContainer center={[46.71109, 1.7191036]} zoom={5} style={{ height: '800px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {sites.map((site, index) => (
                <Marker key={index} position={[parseFloat(site.latitude), parseFloat(site.longitude)]}>
                    <Popup>
                        {site.nom_du_site}<br />
                        Sports: {site.sports}<br />
                        Dates: Du {site.start_date} au {site.end_date}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;
