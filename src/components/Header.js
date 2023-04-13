import React from 'react';
import { Link, useNavigate, Navigate} from "react-router-dom"
import {UserAuth} from "../context/AuthContext"
import "../App.css"

export default function Header({ lightMode, setLightMode}) {

    const { user, logout } = UserAuth()

    const handleLogout = async () => {
        try {
            await logout()
            Navigate("/")
            console.log("logged out")
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className="header">
            {
                user ?
                <button onClick={handleLogout} className={lightMode ? "lightbtn" : "darkbtn"}>Log Out</button>
                
                :<Link to="/signin" className={
                    lightMode ? "dark-a" : "light-a"
                }><h3>Sign In </h3></Link> 

            }
            <Link to="/" className={
                lightMode ? "dark-a" : "light-a"
            }><h1>L&#128064;kers</h1></Link>
           
            <div className="mode">


                <button className={lightMode ? "lightbtn" : "darkbtn"} onClick={() => setLightMode(!lightMode)}>
                    {lightMode ?
                        <i className="fa-regular fa-moon fa-2xl"></i> :
                        <i className="fa-sharp fa-solid fa-sun fa-2xl"></i>
                    }
                </button>
            </div>
        </div>
    )
}
