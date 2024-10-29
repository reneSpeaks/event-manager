import {useEffect} from 'react';
import UpcomingEventCard from "../components/UpcomingEventCard";
import {typeWriter} from '../utils/typewriter.js';

const Hero = () => {

    useEffect(() => {
        const heroText = ["All Your Events.", "One Place.", "Live and Loud"];

        function StartTextAnimation(i) {
            if (typeof heroText[i] == 'undefined'){
                setTimeout(function() {
                    StartTextAnimation(0);
                }, 20000);
            }
            // check if dataText[i] exists
            else if (i < heroText[i].length) {
                // text exists! start typewriter animation
                typeWriter(heroText[i], 0, function(){
                    // after callback (and whole text has been animated), start next text
                    StartTextAnimation(i + 1);
                });
            }
        }
        // start the text animation
        StartTextAnimation(0);

        return () => {};
    }, []);

    return (
        <section
            id="hero"
            className="hero min-h-screen max-w-screen border-b-4 border-accent relative"
            style={{
                backgroundImage: "url(/pexels-teddy-2263436.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content relative text-neutral-content text-center flex-col md:flex-row gap-28">
                <div className="w-32 h-32 text-center text-wrap">
                    <h1 className="">
                        <a className="typewrite text-5xl font-bold mb-4 text-center"> </a>
                        <span className="text-5xl font-bold border-r-2 border-solid border-accent"></span>
                    </h1>
                </div>
                <UpcomingEventCard />
            </div>
        </section>
    );
};

export default Hero;

