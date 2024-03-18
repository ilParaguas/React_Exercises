/**
 Write the useCurrentLocation custom hook, that uses the 
 browser's navigator.geolocation API to get the current 
 location of the user through the getCurrentPosition builtin 
 method.The hook should return the current location as well 
 as a function to get the current location, and the error 
 and loading states.
 */

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
