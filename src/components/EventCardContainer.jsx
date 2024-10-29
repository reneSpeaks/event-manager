import EventSection from "./EventSection";
import events from "../data/events";

const EventCardContainer = () => {
  return (
    <div className="bg-gray-900 text-white py-10">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-300">Upcoming Events</h2>
      
      <EventSection event={events[0]} isReversed={false} />
      <EventSection event={events[1]} isReversed={true} />
      <EventSection event={events[2]} isReversed={false} />
    </div>
  );
};

export default EventCardContainer;

