import EventCard from "./EventCard";
import events from "../data/events";

const event = events[1];

const EventCardContainer = () => {
  return (
    <div>
      <section>
        <div className="event-container container mx-auto flex justify-start p-4">
          {/* EventCard on the left */}
          <EventCard />
          <div className="title-container flex justify-end">
            <h1 className="text-xl text-accent font-semibold mb-2">
             
            </h1>
          </div>
          <div className="description-container flex">
            <h2 className="mb-4"></h2>
          </div>
        </div>
      </section>
      <section>
        <div className="relative event-container container mx-auto flex justify-end p-4">
          <EventCard />
        </div>
      </section>
      <section>
        <div className="event-container container mx-auto flex justify-start p-4 ">
          <EventCard />
        </div>
      </section>
    </div>
  );
};

export default EventCardContainer;
