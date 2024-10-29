import Hero from './pages/Hero.jsx';
import Footer from './components/Footer.jsx';
import EventCardContainer from './components/EventCardContainer.jsx';
import Header from './components/Header';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <EventCardContainer />
            </main>
            <Footer />
        </>
    );
};

export default App;
