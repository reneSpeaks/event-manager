import axios from 'axios';
import {useEffect, useState} from 'react';
import EventCard from './EventCard.jsx';

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
                <>
                    <div className="absolute bottom-0 right-0 mb-9 mx-4">
                        <div>
                            <h2 className="text-accent text-3xl font-bold mb-4">Ne<span className="text-base-content">xt Ev</span>ent:</h2>
                        </div>
                        <EventCard event={upcomingEvent} />
                    </div>
                </>
            )}
        </>
    );
};

export default UpcomingEventCard;
