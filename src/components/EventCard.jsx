import { useNavigate } from "react-router-dom";
const EventCard = ({ event }) => {
  const navigate = useNavigate();
  if (!event) {
    return null;
  }

  const handleCardClick = () => {
    navigate(`/event/${event.id}`);
  };

  return (
    <div className="event-card bg-base-100 shadow-sm shadow-accent rounded-lg p-5 max-w-sm transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-primary">
      <img
        src="https://via.assets.so/img.jpg?w=500&h=300"
        alt={event.title}
        className="w-full h-40 rounded-lg object-cover mb-4"
      />
      <div className="flex justify-center">
        <button onClick={handleCardClick} className="btn btn-accent">
          Count Me In!
        </button>
      </div>
    </div>
  );
};

export default EventCard;
