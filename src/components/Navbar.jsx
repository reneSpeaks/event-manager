const Navbar = () => {
    return (
        <nav className="navbar flex justify-between max-w-7xl">
            <div>
                <a className="text-2xl font-bold cursor-pointer">Eventify<span className="text-accent">.</span></a>
            </div>
            <ul className="flex flex-row gap-20 font-bold">
                <li><a className="menu-item cursor-pointer">Home</a></li>
                <li><a className="menu-item cursor-pointer">Events</a></li>
            </ul>
            <button className="text-xl cursor-pointer font-bold hover:text-accent active:text-primary" onClick={() => document.getElementById('sign-in').showModal()}>Log In</button>
        </nav>
    );
};

export default Navbar;

