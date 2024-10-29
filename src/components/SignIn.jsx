const SignIn = () => {
    return (
        <dialog id="sign-in" className="modal modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">SIGN IN</h3>
                <form action="#">
                    <div>
                        <label htmlFor="sign-in-email">Email</label>
                        <input id="sign-in-email" type="text" autoComplete="email" required />
                    </div>
                    <div>
                        <label htmlFor="sign-in-password">Password</label>
                        <input id="sign-in-password" type="password" autoComplete="off" required />
                    </div>
                </form>
                <a href="#">Forgot password?</a>
                <p>Don't have an account? <a href="#">Sign up</a></p>
                <div className="modal-action">
                    <button className="btn btn-primary">Log In</button>
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-secondary">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default SignIn;
