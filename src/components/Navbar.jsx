const Navbar = () => {
    return (
        <nav className="navbar bg-base-100 z-50 fixed t-0">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Logo</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Events</a></li>
                    <li><a>Login / Sign up</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

