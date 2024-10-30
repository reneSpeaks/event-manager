import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {Outlet} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useEffect, useState} from 'react';
import {getLocalStorage} from './utils/storage.js';

const Layout = () => {
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
        if( getLocalStorage("SignedIn") !== []) setSignedIn(() => true);
    }, [])

    return (
        <>
            <Header signedIn={signedIn} setSignedIn={setSignedIn} />
            <div className="relative">
                <main className="flex flex-col relative z-10 items-center mb-24 bg-base-100">
                    <ToastContainer theme='colored' autoClose={1000} position='bottom-left' />
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
