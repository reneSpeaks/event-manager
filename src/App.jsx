import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Hero from './pages/Hero.jsx';
import EventDetails from './pages/EventDetails.jsx';
import Layout from './Layout.jsx';

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Hero />} />
                <Route path="/event/:id" element={<EventDetails />} />
            </Route>
        )
    )

    return <RouterProvider router={router} />;
};

export default App;

