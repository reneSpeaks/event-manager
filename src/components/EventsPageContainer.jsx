import axios from "axios";
import { useEffect, useState } from "react";
import EventCard from "./EventCard.jsx";

const EventsPageContainer = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/api/events")
      .then((response) => {
        setEvents(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="p-4 flex flex-col max-w-[1280px] w-full bg-base-100 m-auto">
      <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-accent text-left-md md:text-center mb-4">
        Moments
      </h1>
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventsPageContainer;
