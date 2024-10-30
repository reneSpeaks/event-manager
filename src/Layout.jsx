import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <div className="relative">
                <main className="flex flex-col relative z-10 items-center mb-24 bg-base-100">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
