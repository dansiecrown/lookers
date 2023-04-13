import React, {useState} from 'react'
import { Link,  useNavigate} from "react-router-dom"
import {UserAuth} from "../context/AuthContext"




export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayname] = useState("");
    const [error, setError] = useState(null);

    const {createUser, user} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("")
        try{
            await createUser(email, password)
            navigate('/signin')

        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }
  return (
    
    <div className="Sign-up">
        {
        user ?
        <div>
            <h1>You are already signed in!</h1>
            <p>Go to <Link to="/">Home</Link></p>
        </div>
        :
        <div>


        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}> 
            <input onChange={(e)=> setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Email'/>
            <input onChange={(e)=> setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password"/>
            <input onChange={(e)=> setDisplayname(e.target.value)} type="text" name="username" id="username" placeholder='Username' />


            <button type="submit">Sign Up</button>
            <p>Already have an account? <Link to="/signin">Sign In</Link></p>
        </form> 
        </div>
    }
    </div>
  )
}
