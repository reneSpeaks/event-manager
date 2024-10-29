const Footer = () => {
    return (
        <footer className="footer fixed bottom-0 left-0 footer-center bg-base-300 text-base-content p-4 z-0">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Eventify Ltd.</p>
            </aside>
        </footer>
    );
};

export default Footer;