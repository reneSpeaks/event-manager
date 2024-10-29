
import EventCard from "./EventCard";
import events from "../data/events";

const EventCardContainer = () => {
  return (
    <div className="bg-gray-900 text-white py-10">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-300">Upcoming Events</h2>
      
      <section className="container mx-auto flex flex-col md:flex-row items-center md:justify-between p-4">
        <EventCard event={events[1]} />
        <div className="md:w-1/2 text-right md:pl-8">
          <h1 className="text-2xl text-accent font-semibold mb-2">{events[1].title}</h1>
          <p className="text-gray-400">{events[1].description}</p>
        </div>
      </section>

      <section className="container mx-auto flex flex-col md:flex-row-reverse items-center md:justify-between p-4">
        <EventCard event={events[2]} />
        <div className="md:w-1/2 text-left md:pr-8">
          <h1 className="text-2xl text-accent font-semibold mb-2">{events[2].title}</h1>
          <p className="text-gray-400">{events[2].description}</p>
        </div>
      </section>

      <section className="container mx-auto flex flex-col md:flex-row items-center md:justify-between p-4">
        <EventCard event={events[3]} />
        <div className="md:w-1/2 text-right md:pl-8">
          <h1 className="text-2xl text-accent font-semibold mb-2">{events[3].title}</h1>
          <p className="text-gray-400">{events[3].description}</p>
        </div>
      </section>
    </div>
  );
};

export default EventCardContainer;

