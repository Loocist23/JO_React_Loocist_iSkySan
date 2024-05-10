import React from 'react';

// Supposons que vous utilisez toujours flowbite-react pour le style
import { Card } from 'flowbite-react';

const CustomCard = ({ site }) => {
    return (
        <Card className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {site.nom_site || site.nom_du_site}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
                    <strong>Sport(s) :</strong> {site.sports}<br />
                    <strong>Dates :</strong> Du {site.start_date} au {site.end_date}<br />
                    {site.adress && <><strong>Adresse :</strong> {site.adress}<br /></>}
                    <strong>Latitude :</strong> {site.latitude} / <strong>Longitude :</strong> {site.longitude}
                </p>
            </div>
        </Card>
    );
};

export default CustomCard;
