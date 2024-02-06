import React, { useEffect, useState } from 'react';

const GeoLocation = () => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    // Check if the Geolocation API is supported by the browser
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Extract latitude and longitude from the position object
          const { latitude, longitude } = position.coords;
          setCoordinates({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      {coordinates ? (
        <p>
          Your location: Latitude {coordinates.latitude}, Longitude {coordinates.longitude}
        </p>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default GeoLocation;
