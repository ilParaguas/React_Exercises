import { useCurrentLocation } from "./useCurrentLocation";

export function App() {
  const { location, getLocation } = useCurrentLocation();

  return (
    <div>
      <button onClick={getLocation}>Show location</button>
      {location && (
        <div>
          <h2>User location</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
}
