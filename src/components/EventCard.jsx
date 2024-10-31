import {useNavigate, useLocation} from "react-router-dom";

const EventCard = ({event}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = () => {
        navigate(`/event/${event.id}`, { state: { from: location } });
    };

    return (
        <div onClick={handleClick} className="relative">
            <div className="max-w-96 w-full h-72 overflow-hidden rounded-md cursor-pointer shadow-sm shadow-accent group hover:scale-105 hover:shadow-2xl hover:shadow-primary transition-all duration-300 ease-out">
                <img
                    src={event.imgurl ? event.imgurl : "https://via.assets.so/img.jpg?w=500&h=300"}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-300 ease-out"
                />
                <div className="absolute top-0 right-0 text-end p-3">
                    <p>{event.date}</p>
                    <p>{event.location}</p>
                </div>
                <div className="absolute bottom-0 left-0 py-2 px-5">
                    <h3 className="text-2xl font-bold text-accent">{event.title}</h3>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
