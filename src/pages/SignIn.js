import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"

import "./signin.css"

export default function SignIn() {

    const navigate = useNavigate();
    const { signIn, user } = UserAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signIn(email, password);
            navigate("/");
        }
        catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }
    return (
        <div className='signs'>
            {user ?
                <div>
                    <h1>You are already signed in!</h1>
                    <p>Go to <Link to="/">Home</Link></p>
                </div>
                :
                <div>
                    <h1>Sign In</h1>
                    <p>Don't have an account yet? <Link to="/signup">Sign Up</Link></p>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        <button type="submit">Sign In</button>
                        <p>Forgotten Password? <Link to="/Forgot">Click Here</Link></p>
                    </form>
                </div>
            }
        </div>
    )
}
