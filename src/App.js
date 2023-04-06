import React,{ useState } from "react";
import Facts from "./components/Facts";
import "./App.css";
import IpChecker from "./components/IpChecker";
import Lorem from "./components/Lorem";

function App() {

  const [view, setView] = useState("lorem");
  const [lightMode, setLightMode] = useState(true);
  



  return (
    <div className={lightMode ? "lightMode" : "App"}>
      <div className="container">
        <div className="header">
          <h3>Sign in  </h3>
          <h1>L&#128064;kers</h1>
          <div className="mode">

 
            <button className={lightMode ? "lightbtn": "darkbtn" } onClick={() => setLightMode(!lightMode)}>
              {lightMode ?
               <i className="fa-regular fa-moon fa-2xl"></i> : 
               <i className="fa-sharp fa-solid fa-sun fa-2xl"></i>
               }
            </button>
          </div>
        </div>



        <div className={lightMode ? "loutlet": "outlet"}>

          {view === "facts" && <Facts lightMode={lightMode} />}
          {view === "lorem" && <Lorem lightMode={lightMode}/>}
        
        </div>

        <div className={lightMode ? "viewChange": "viewChange"}>
          <button className={view == "facts"? "active": "btn" } onClick={() => setView("facts")}>Facts</button>
          <button className={view == "lorem"? "active": "btn" } onClick={() => setView("lorem")}>Lorem</button>
        </div>

        <div className="footer">
          <IpChecker />
        </div>
      </div>
    </div>
  );
}

export default App;
