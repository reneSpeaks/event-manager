import axios from 'axios';
import {useEffect, useState} from 'react';
import EventCard from './EventCard.jsx';

const EventsPageContainer = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios('http://localhost:3001/api/events')
            .then((response) => {
                setEvents(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


        return (
            <section className="p-4 flex flex-col max-w-[1280px] w-full bg-base-100 m-auto">
                <h1 className="text-4xl font-bold text-accent text-center mb-10">Upcoming Moments</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full place-items-center">
                {events && events.map((event, index) => {
                    return (<EventCard key={index} event={event} />);
                    })}
                </div>
            </section>
        );
    };


export default EventsPageContainer;