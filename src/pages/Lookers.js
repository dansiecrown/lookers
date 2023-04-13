import React from 'react'
import Facts from '../components/Facts'
import Lorem from '../components/Lorem'

export default function Lookers({ view, setView, lightMode } ) {
    
    console.log(lightMode)
  
    return (
        <div>
            <div className={lightMode ? "loutlet" : "outlet"}>

                {view === "facts" && <Facts lightMode={lightMode} />}
                {view === "lorem" && <Lorem lightMode={lightMode} />}

            </div>

            <div className={lightMode ? "viewChange" : "viewChange"}>
                <button className={view == "facts" ? "active" : "btn"} onClick={() => setView("facts")}>Facts</button>
                <button className={view == "lorem" ? "active" : "btn"} onClick={() => setView("lorem")}>Lorem</button>
            </div>
        </div>
    )
}
