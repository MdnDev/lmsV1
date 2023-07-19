import React from 'react'
import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2bGFicyIsImEiOiJja3dxaXpweXkwbjV6MnB1c3FzMnc2dmExIn0.M76eBYXq7_OwI6osSnhNrw';

const MapSDK = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-52.26667);
    const [lat, setLat] = useState(4.91667);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
        });

        useEffect(() => {
            if (!map.current) return; // wait for map to initialize
            map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
            });
            });

    return (
        <div className="mb-5">
            <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container"/>
        </div>
    )
}

export default MapSDK
