import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the map
    mapRef.current = L.map('map', {
      center: [25.276987, 55.296249], // Dubai coordinates
      zoom: 12,
      scrollWheelZoom: false,
    });

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapRef.current);

    // Add a marker to the map at the specified position
    const marker = L.marker([25.276987, 55.296249]).addTo(mapRef.current);

    // Add a popup to the marker (this is optional)
    marker.bindPopup('<b>abudhabi, UAE</b><br>Here is the marker.').openPopup();

    // Cleanup the map instance when the component unmounts
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div id="map" style={{ height: '500px', width: '100%' }}>
      {/* The map will be rendered inside this div */}
    </div>
  );
};

export default MapComponent;