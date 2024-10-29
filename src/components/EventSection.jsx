import EventCard from "./EventCard";

const EventSection = ({ event, isReversed }) => {
  return (
    <section
      className={`container mx-auto flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center md:justify-between p-4`}
    >
      <EventCard event={event} />
      <div className={`md:w-1/2 ${isReversed ? "text-left md:pr-8" : "text-right md:pl-8"}`}>
        <h1 className="text-2xl text-accent font-semibold mb-2">{event.title}</h1>
        <p className="text-gray-400">{event.description}</p>
      </div>
    </section>
  );
};

export default EventSection;
