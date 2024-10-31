import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

const EventMap = ({ latitude, longitude, location }) => {
  // Define your marker icon
  const markerIcon = new L.Icon({
    iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
    iconSize: [25, 41], // Adjust as necessary
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div
      className="map-container"
      style={{ marginTop: "3px", height: "400px", width: "100%" }}
    >
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]} icon={markerIcon}>
          <Popup>{location}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default EventMap;
