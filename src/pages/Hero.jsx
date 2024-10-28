const Hero = () => {
    return (
        <section
            id="hero"
            className="hero min-h-screen max-w-screen border-b-4 border-accent mb-4"
            style={{
                backgroundImage: "url(/pexels-teddy-2263436.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center flex-col">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold mb-4">Where every moment matters.</h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;
