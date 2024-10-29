import events from "../data/events";
import { useParams, useNavigate } from "react-router-dom";

const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
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
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center flex-col md:flex-row gap-10 md:gap-28">
                    <div className="max-w-md p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
                        <h1 className="text-6xl font-extrabold mb-4 text-accent hover:underline transition-all duration-300">
                            {event.title}
                        </h1>
                        <p className="text-2xl mb-2 font-semibold text-gray-800">
                            {event.date}
                        </p>
                        <p className="text-xl mb-4 font-semibold text-gray-700">
                            {event.location}
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            {event.description}
                        </p>
                        <div className="flex justify-between gap-4">
                            <button className="btn bg-accent text-white hover:bg-accent-dark transition-all duration-300">
                                Show me a map!
                            </button>
                            <button 
                                className="btn bg-accent text-white hover:bg-accent-dark transition-all duration-300"
                                onClick={() => navigate(`/#${event.id}`)} // Navigate with hash for scrolling
                            >
                                Back to Events
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventDetails;





