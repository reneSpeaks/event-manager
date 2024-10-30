import EventsPageContainer from "../components/EventsPageContainer";
import { useEffect } from 'react';

const Events = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top of the page
      }, []); 


  return (
    <>
      <section className="hero min-h-screen max-w-screen border-b-4 border-accent relative">
        <EventsPageContainer />
      </section>
    </>
  );
};

export default Events;
