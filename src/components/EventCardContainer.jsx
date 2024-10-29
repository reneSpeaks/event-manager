import EventSection from "./EventSection";
import {useEffect, useState} from 'react';
import axios from 'axios';

const EventCardContainer = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    useEffect(() => {
        axios('http://localhost:3001/api/events?page=1&limit=3')
            .then((response) => {
                setUpcomingEvents(response.data.results);
                // console.log(upcomingEvents);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="bg-gray-900 text-white py-10">
            <h2 className="text-3xl font-semibold text-center mb-10 text-gray-300">Upcoming Events</h2>

            {upcomingEvents && upcomingEvents.map((upcomingEvent, index) => {
                return (
                    <EventSection event={upcomingEvent} isReversed={(index % 2 === 0)} />
                );
            })}
        </div>
    );
};

export default EventCardContainer;

