import events from "../data/events";

const UpcomingEventCard = () => {  
  const event = events[0];

  return (
    <div className="event-card bg-base-100 shadow-sm shadow-accent rounded-lg p-5 max-w-sm transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-primary">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-40 rounded-lg object-cover mb-4"
      />
      <h2 className="text-xl text-accent font-semibold mb-2">{event.title}</h2>
      <p className="mb-1">{event.date}</p>
      <p className="mb-1">{event.time}</p>
      <p className="mb-1">{event.location}</p>
      <p className="mb-4">{event.description}</p>
      <button className="btn btn-accent">
        Count Me In!
      </button>
    </div>
  );
};

export default UpcomingEventCard;
