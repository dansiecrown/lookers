import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
// import Lookers from "./pages/Lookers";
import SignIn from "./pages/SignIn";
import IpChecker from "./components/IpChecker";
import { AuthContextProvider } from "./context/AuthContext";

function App() {

  const [view, setView] = useState("lorem");
  const [lightMode, setLightMode] = useState(true);




  return (
    <AuthContextProvider>
    <div className={lightMode ? "lightMode" : "App"}>
      <div className="container">
        <Header lightMode={lightMode} setLightMode={setLightMode} />


        <Routes>

          <Route path="/" element={<Home view={view} setView={setView} lightMode={lightMode}/> } />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/signin" element={<SignIn/>} />
          {/* <Route path="/lookers" component={Lookers}/> */}
        </Routes>


      </div>


      <div className="footer">
        <IpChecker />
      </div>
    </div>
    </AuthContextProvider>
  );
}

export default App;
