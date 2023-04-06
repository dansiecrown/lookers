import React, { useState, useEffect } from 'react';
import Loading from "./Loading"
import './facts.css';

export default function Facts() {

    const [facts, setFacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setLoading(true);
        const url = "https://api.api-ninjas.com/v1/facts?limit=1"

        const fetchFacts = fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'X-Api-Key': 'wiAPCDSS2ydvDxC25b+aCQ==vIJI9Wx6BCrPSKOY',
            }
        }).then(resp => resp.json())
            .then(data => {
                setFacts(data);
                console.log(data);
                setLoading(false);
            })
            .catch(err => console.log(err));


    }, [load])

    function nextQuote() {
        setLoad(!load);
    }


    return (
        <div className="facts">
            <h1>Facts!</h1>
            {loading? <Loading /> :
                <div>
                    <p>{facts[0].fact}</p>

                    {/* <span>Detail1</span>
                        <span>Detail1</span>
                        <span>Detail1</span>
                        <span>Detail1</span>
                        <span>Detail1</span>
                        <span>Detail1</span> */}

                    <button className="btn" onClick={() => nextQuote()}>Next Quote</button>
                </div>
            }
        </div>
    )
}
