import Hero from './pages/Hero.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
            </main>
            <Footer />
        </>
    );
};

export default App;
