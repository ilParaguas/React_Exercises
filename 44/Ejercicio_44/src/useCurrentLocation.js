import { useState } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.log(`Error getting user location: ${error}`);
        }
      );
    } else {
      console.error("Geolocation is not soported on this browser");
    }
  }

  return { location, getLocation };
}
