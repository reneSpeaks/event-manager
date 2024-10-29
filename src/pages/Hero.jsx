import {useEffect} from 'react';
import UpcomingEventCard from "../components/UpcomingEventCard";
import {typeWriter} from '../utils/typewriter.js';
import EventCardContainer from "../components/EventCardContainer";

const Hero = () => {

    useEffect(() => {
        const heroText = ["All Your Events.", "One Place.", "Live and Loud."];

        function StartTextAnimation(i) {
            if (typeof heroText[i] == 'undefined') {
                setTimeout(function () {
                    StartTextAnimation(0);
                }, 20000);
            }
            // check if dataText[i] exists
            else if (i < heroText[i].length) {
                // text exists! start typewriter animation
                typeWriter(heroText[i], 0, function () {
                    // after callback (and whole text has been animated), start next text
                    StartTextAnimation(i + 1);
                });
            }
        }

        // start the text animation
        StartTextAnimation(0);

        return () => {
        };
    }, []);

    return (
        <>
            <section
                id="hero"
                className="hero min-h-screen max-w-screen border-b-4 border-accent relative"
                style={{
                    backgroundImage: "url(/pexels-teddy-2263436.jpg)",
                }}>

                <div className="hero-overlay bg-opacity-60"></div>
                <div className="max-w-[1280px] w-full relative h-full flex items-center justify-center">
                    <div className="hero-content w-full text-neutral-content text-center flex-col md:flex-row gap-28">
                        <h1>
                            <span className="typewrite text-5xl font-bold mb-4"></span>
                            <span className="text-5xl font-bold border-r-2 border-solid border-accent"></span>
                        </h1>
                        <UpcomingEventCard />
                    </div>
                </div>
            </section>
            <EventCardContainer />
        </>
    );
};

export default Hero;