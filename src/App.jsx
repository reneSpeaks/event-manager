import Hero from './pages/Hero.jsx';
import Footer from './components/Footer.jsx';
import Navbar from "./components/Navbar";
import EventCardContainer from './components/EventCardContainer.jsx';

const App = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <EventCardContainer />
            </main>
            <Footer />
        </>
    );
};

export default App;
