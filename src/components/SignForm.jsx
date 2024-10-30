import {useState} from 'react';
import {FaXmark} from "react-icons/fa6";
import {toast} from 'react-toastify';

const SignForm = () => {
    const [signMode, setSignMode] = useState('sign-in');
    const [{email, password, policy}, setFormState] = useState({
        email: '',
        password: '',
        policy: false,
    });

    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormState(previousState => ({
            ...previousState,
            [name]: newValue
        }));
    }

    const handleSubmit = async e => {
        try {
            e.preventDefault();
            if (!email || !password) return alert('Please fill out all the fields!');

            const user = {
                email: email,
                password: password
            }
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }

            if (signMode === 'sign-up') {
                const result = await fetch('http://localhost:3001/api/users', options)
                const data = await result.json();
                console.log(data);
            } else if (signMode === 'sign-in') {
                const result = await fetch('http://localhost:3001/api/auth/login', options)
                const data = await result.json();
                console.log(data);
            }

        } catch (error) {
            toast.error(error.message)
        } finally {

        }

    }

    return (
        <dialog id="sign-form" className="modal">
            <div className="modal-box p-8">
                <form method="dialog">
                    <button className="absolute text-2xl right-2 top-2" onClick={() => setSignMode('sign-in')}>
                        <FaXmark />
                    </button>
                </form>
                <h3 className="font-bold text-2xl text-center mb-8">{signMode === 'sign-in' ? "SIGN IN" : "SIGN UP"}</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input name="email" type="email" autoComplete="email" value={email} onChange={handleChange} required />
                        <label htmlFor="email">{signMode === 'sign-in' ? "Email" : "Enter your email"}</label>
                    </div>
                    <div className="input-field">
                        <input name="password" type="password" autoComplete="off" value={password} onChange={handleChange} required />
                        <label htmlFor="password">{signMode === 'sign-in' ? "Password" : "Create password"}</label>
                    </div>

                    {signMode === 'sign-in' ? (
                        <a href="#" className="text-accent hover:underline pl-4">Forgot password?</a>
                    ) : (
                        <label htmlFor="policy" className="pl-4"><input type="checkbox" name="policy" checked={policy} onChange={handleChange} required /> I agree to the<a href="#" className="text-accent hover:underline pl-4">Terms & Conditions</a></label>
                    )}

                    <div className="modal-action">
                        <button className="btn btn-primary w-full rounded-lg">{signMode === 'sign-in' ? "Log In" : "Sign Up"}</button>
                    </div>
                </form>

                {signMode === 'sign-in' ? (
                    <div className="flex justify-center mt-4">
                        <p>Don't have an account? <a className="text-accent hover:underline cursor-pointer" onClick={() => setSignMode('sign-up')}>Sign up</a></p>
                    </div>
                ) : (
                    <div className="flex justify-center mt-4">
                        <p>Already have an account? <a className="text-accent hover:underline cursor-pointer" onClick={() => setSignMode('sign-in')}>Sign in</a></p>
                    </div>
                )}
            </div>
        </dialog>
    );
};

export default SignForm;
