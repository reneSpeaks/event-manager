const SignForm = () => {
    return (
        <dialog id="sign-form" className="modal modal-middle">
            <div className="modal-box p-8">
                <h3 className="font-bold text-2xl text-center mb-8">SIGN IN</h3>
                <form>
                    <div className="input-field">
                        <input id="form-email" type="text" autoComplete="email" required />
                        <label htmlFor="form-email">Email</label>
                    </div>
                    <div className="input-field">
                        <input id="form-password" type="password" autoComplete="off" required />
                        <label htmlFor="form-password">Password</label>
                    </div>
                </form>
                <a href="#" className="text-accent hover:underline pl-4">Forgot password?</a>
                <div className="modal-action">
                    <button className="btn btn-primary w-full rounded-lg">Log In</button>
                    {/*<form method="dialog">*/}
                    {/*    /!* if there is a button in form, it will close the modal *!/*/}
                    {/*    <button className="btn btn-secondary">Close</button>*/}
                    {/*</form>*/}
                </div>
                <div className="flex justify-center mt-4">
                    <p>Don't have an account? <a href="#" className="text-accent hover:underline">Sign up</a></p>
                </div>
            </div>
        </dialog>
    );
};

export default SignForm;
