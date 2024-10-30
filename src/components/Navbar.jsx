import {FaBars} from "react-icons/fa6";
import {Link, NavLink} from "react-router-dom";
import {toast} from 'react-toastify';

const Navbar = (signedIn, setSignedIn) => {
    const signOut = () => {
        setSignedIn(() => false);
        toast.success('Successfully signed out!');
    }

    return (
        <>
            <div className="drawer max-w-full w-full flex justify-center">
                <nav className="navbar flex justify-between max-w-7xl px-4">
                    <label htmlFor="my-drawer" className="sm:hidden"><FaBars /></label>
                    <div>
                        <Link to="/" className="text-3xl sm:text-2xl font-bold cursor-pointer hover:text-accent">Eventify<span className="text-accent">.</span></Link>
                    </div>
                    <ul className="hidden sm:flex flex-row gap-20 font-bold">
                        <li><NavLink to="/" className={({isActive}) => isActive ? "menu-item cursor-pointer text-accent" : "menu-item cursor-pointer"}>Home</NavLink></li>
                        <li><NavLink to="/events" className={({isActive}) => isActive ? "menu-item cursor-pointer text-accent" : "menu-item cursor-pointer"}>Events</NavLink></li>
                        <li><span className="menu-item cursor-pointer" onClick={() => document.getElementById('event-form').showModal()}>Add Event</span></li>
                    </ul>
                    {signedIn ? (
                        <button className="text-xl cursor-pointer font-bold hover:text-accent active:text-primary" onClick={() => document.getElementById('sign-form').showModal()}>
                            Log In
                        </button>
                    ) : (
                        <button className="text-xl cursor-pointer font-bold hover:text-accent active:text-primary" onClick={signOut}>
                            Log Out
                        </button>
                    )}
                </nav>

                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content text-3xl font-bold min-h-full w-80 p-4">
                        <li><NavLink to="/" className={({isActive}) => isActive ? "menu-item cursor-pointer text-accent" : "menu-item cursor-pointer"}>Home</NavLink></li>
                        <li><NavLink to="/events" className={({isActive}) => isActive ? "menu-item cursor-pointer text-accent" : "menu-item cursor-pointer"}>Events</NavLink></li>
                        <li><span className="menu-item cursor-pointer" onClick={() => document.getElementById('event-form').showModal()}>Add Event</span></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;

