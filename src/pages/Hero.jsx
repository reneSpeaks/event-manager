import UpcomingEventCard from "../components/UpcomingEventCard";
import EventCardContainer from "../components/EventCardContainer";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="hero min-h-screen max-w-screen border-b-4 border-accent relative"
        style={{
          backgroundImage: "url(/pexels-teddy-2263436.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center flex-col md:flex-row gap-28">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-4">
              Where every moment matters.
            </h1>
          </div>
          <UpcomingEventCard />
        </div>
      </section>
      <section id="eventCardContainer">
      <EventCardContainer />
      </section>
    </>
  );
};

export default Hero;
