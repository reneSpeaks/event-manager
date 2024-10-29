
const UpcomingEventCard = () => {
  const event = {
    title: "Community Meetup",
    date: "November 15, 2024",
    time: "5:00 PM - 8:00 PM",
    location: "Central Park, NYC",
    description: "Join us for a fun-filled evening with community members!",
    imageUrl: "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600"
  };

  return (
    <div className="event-card bg-[#1A1A2E] shadow-lg shadow-[#2E1455] rounded-lg p-5 max-w-sm text-[#FFFFFF] transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#4A0D67]">
      <img src={event.imageUrl} alt={event.title} className="w-full h-40 rounded-lg object-cover mb-4" />
      <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
      <p className="text-[#FFFFFF] mb-1">{event.date}</p>
      <p className="text-[#FFFFFF] mb-1">{event.time}</p>
      <p className="text-[#FFFFFF] mb-1">{event.location}</p>
      <p className="text-[#FFFFFF] mb-4">{event.description}</p>
      <button className="bg-[#3F76FF] text-[#FFFFFF] py-2 px-4 rounded hover:bg-[#4A0D67] transition duration-200">
      Count Me In!
      </button>
    </div>
  );
};

export default UpcomingEventCard;





