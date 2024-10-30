import EventsPageContainer from "../components/EventsPageContainer";
import { useEffect } from "react";

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="hero min-h-screen max-w-screen border-b-4 border-accent relative flex flex-col items-center">
        <div className="p-4 text-center mb-4"></div>
        <EventsPageContainer />
      </section>
    </>
  );
};

export default Events;
