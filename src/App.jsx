import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './pages/Hero.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header';
import EventDetails from './pages/EventDetails.jsx';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Hero />} /> 
                    <Route path="/event/:id" element={<EventDetails />} /> 
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;

