'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
    const mapStyles = {
        height: "380px",
        width: "380px"
    };

    const defaultCenter = {
        lat: -21.8052654, // Latitude de exemplo (São Paulo)
        lng: -43.374531  // Longitude de exemplo (São Paulo)
    };

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDKQ8G0cfs8tDoz78S8M1IsCr08EKWEvBU"
        >
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapContainer;