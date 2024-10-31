import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import L from 'leaflet';

const markerIcon = new L.Icon({
  iconUrl: 'path_to_icon_image',
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
});


const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [event, setEvent] = useState(null);
  const [eventIds, setEventIds] = useState([]);
  const currentId = parseInt(id, 10);
  const [referrer, setReferrer] = useState(location.state?.from || "/events");
  const mapRef = useRef(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/events")
      .then((response) => {
        const ids = response.data.results.map((event) => event.id);
        setEventIds(ids);
      })
      .catch((error) => {
        console.error("Error fetching event IDs:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/events/${currentId}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching event details:", error);
      });
  }, [currentId]);


  const currentIndex = eventIds.indexOf(currentId);
  const previousId = currentIndex > 0 ? eventIds[currentIndex - 1] : null;
  const nextId =
  currentIndex < eventIds.length - 1 ? eventIds[currentIndex + 1] : null;

  const toggleMap = () => {
    setShowMap((prev) => !prev);
  
    if (!showMap) {
      setTimeout(() => {
        const mapElement = document.querySelector('.map-container');
        if (mapElement) {
          mapElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <>
      {event && (
        <section
          id="eventDetails"
          className="hero min-h-screen max-w-screen border-b-4 border-accent relative"
          style={{
            backgroundImage: `url(${
              event.imgurl
                ? event.imgurl
                : "https://via.assets.so/img.jpg?w=1280&h=900"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center flex-col md:flex-row gap-10 md:gap-28">
            <div
              id="details-container"
              className="max-w-md p-6 bg-white bg-opacity-80 rounded-lg shadow-lg relative"
            >
              <h1 className="text-6xl font-extrabold mb-4 text-accent">
                {event.title}
              </h1>
              <p className="text-2xl mb-2 font-semibold text-gray-800">
                {event.date}
              </p>
              <p className="text-xl mb-4 font-semibold text-gray-700">
                {event.location}
              </p>
              <p className="text-lg text-gray-600 mb-6">{event.description}</p>
              <div className="flex justify-between gap-4">
                <button
                  className="btn btn-accent hover:btn-primary"
                  onClick={toggleMap}
                >
                  {showMap ? "Hide Map" : "Show Map"}
                </button>
                <button
                  className="btn btn-accent hover:btn-primary"
                  onClick={() => {
                    sessionStorage.setItem("scrollToEvents", "true");
                    navigate(referrer);
                  }}
                >
                  Back to Events
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly gap-4 w-full absolute  mb-9 mx-4">
            <div className="flex">
              {previousId && (
                <FaCircleArrowLeft
                  className="size-10"
                  onClick={() => navigate(`/events/${previousId}`)}
                >
                  Previous Event
                </FaCircleArrowLeft>
              )}
            </div>
            <div className="flex">
              {nextId && (
                <FaCircleArrowRight
                  className="size-10"
                  onClick={() => navigate(`/events/${nextId}`)}
                >
                  Next Event
                </FaCircleArrowRight>
              )}
            </div>
          </div>
        </section>
      )}
      {showMap && event && (
        <div
          ref={mapRef}
          className="map-container"
          style={{ height: "400px", width: "100%" }}
        >
          <MapContainer
            center={[event.latitude, event.longitude]}
            zoom={13}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[event.latitude, event.longitude]} icon={markerIcon}>
              <Popup>{event.location}</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </>
  );
};

export default EventDetails;
