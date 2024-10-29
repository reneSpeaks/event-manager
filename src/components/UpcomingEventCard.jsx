import axios from 'axios';
import {useEffect, useState} from 'react';

const UpcomingEventCard = () => {
    const [upcomingEvent, setUpcomingEvent] = useState([]);

    useEffect(() => {
        // FIND UPCOMING EVENT
        axios('http://localhost:3001/api/events/upcoming')
            .then((response) => {
                setUpcomingEvent(response.data[0]);
            })
            .catch((error) => {
                console.error(error);
            });

        return () => {
        };
    }, []);

    return (
        <>
            {upcomingEvent && (
                <div className="event-card bg-base-100 shadow-sm shadow-accent rounded-lg p-5 max-w-sm transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-primary">
                    <img
                        src="https://via.assets.so/img.jpg?w=500&h=300"
                        alt={upcomingEvent.title}
                        className="w-full h-40 rounded-lg object-cover mb-4"
                    />
                    <h2 className="text-xl text-accent font-semibold mb-2">{upcomingEvent.title}</h2>
                    <p className="mb-1">{upcomingEvent.date}</p>
                    <p className="mb-1">{upcomingEvent.location}</p>
                    <p className="mb-4">{upcomingEvent.description}</p>
                    <button className="btn btn-accent">
                        Count Me In!
                    </button>
                </div>
            )};
        </>
    );
};

export default UpcomingEventCard;
