import {FaBars} from "react-icons/fa6";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="drawer max-w-full w-full flex justify-center">
                <nav className="navbar flex justify-between max-w-7xl px-4">
                    <label htmlFor="my-drawer" className="sm:hidden"><FaBars /></label>
                    <div>
                        <a className="text-3xl sm:text-2xl font-bold cursor-pointer hover:text-accent">Eventify<span className="text-accent">.</span></a>
                    </div>
                    <ul className="hidden sm:flex flex-row gap-20 font-bold">
                        <li><NavLink to="/" className={({isActive}) => isActive ? "menu-item cursor-pointer text-accent" : "menu-item cursor-pointer"}>Home</NavLink></li>
                        <li><a className="menu-item cursor-pointer">Events</a></li>
                    </ul>
                    <button className="text-xl cursor-pointer font-bold hover:text-accent active:text-primary" onClick={() => document.getElementById('sign-form').showModal()}>Log
                        In
                    </button>
                </nav>

                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content text-3xl font-bold min-h-full w-80 p-4">
                        <li><NavLink to="/" className={({isActive}) => isActive ? "menu-item cursor-pointer text-accent" : "menu-item cursor-pointer"}>Home</NavLink></li>
                        <li><a className="menu-item cursor-pointer">Events</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;

