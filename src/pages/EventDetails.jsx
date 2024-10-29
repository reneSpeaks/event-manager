import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import events from "../data/events";
import { useParams } from "react-router-dom";

const EventDetails = () => {
    const { id } = useParams();
    const event = events.find((event) => event.id === parseInt(id));

    if (!event) {
        return <div>Event not found</div>;
    }

  return (
    <div>
      <section
        id="eventDetails"
        className="hero min-h-screen max-w-screen border-b-4 border-accent relative"
        style={{
          backgroundImage: `url(${event.imageUrl})`,
          backgroundSize: '100%', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center flex-col md:flex-row gap-28">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-4">{event.title}</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
