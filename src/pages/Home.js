import React, { useState } from "react";
import { BrowserRouter as Router, Outlet, Route, Switch } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";
import "./home.css"


import Lookers from "./Lookers";

function Home({ view, setView, lightMode } ) {

    const navigate = useNavigate()
    const { user, logout } = UserAuth()

 

        return (
            <div className="Home">

                {
                    user ? 
                    <div>
                        <Lookers 
                            view={view}
                            setView={setView}
                            lightMode={lightMode}
                        />
                       
                    </div>
                     : 
                    <div className="home-action">
                    <h3>Login to get started</h3>
                    <div className="action">

                    <button onClick={() => navigate("/signin")}>Sign In</button>
                    <button onClick={() => navigate("/signup")} className="home-signup">Sign Up</button>
                    </div>
                    </div>

                }
                
            </div>
        );
    }

    export default Home;
