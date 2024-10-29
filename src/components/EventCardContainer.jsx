import {useEffect, useState} from 'react';
import axios from 'axios';
import EventCard from './EventCard.jsx';

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
        <section className="p-4 flex flex-col max-w-[1280px] w-full bg-base-100">
            <h2 className="text-3xl font-bold text-accent text-center mb-10">Moments to consider</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full place-items-center">
                {upcomingEvents && upcomingEvents.map((upcomingEvent, index) => {
                    return (<EventCard key={index} event={upcomingEvent} />);
                })}
            </div>
        </section>
    );
};

export default EventCardContainer;

