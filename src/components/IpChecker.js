import React, { useState, useEffect } from 'react';

import './checker.css';

export default function IpChecker() {

    const [visitorData, setVisitorData] = useState([]);




    useEffect(() => {
        const url = "https://api.visitorapi.com/api/?pid=KBgSK4hkfeKNLEPS9QY2";
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }).then(resp => resp.json())
            .then(data => {
                
                setVisitorData(data.data);

                    ;
            })
            .catch(err => console.log(err));
    }, []
    )



    return (
        <div className='checker' >
            {visitorData &&
                <div>
                    {/* <span className="ip">{visitorData.ipAddress}
                    </span> */}

                    {/* <span>{visitorData.countryName}</span> */}
                    <span>{visitorData.city}</span>
                    
                    <span>{visitorData.os}</span>
                    <span>{visitorData.browser}</span>

                </div>
            }


        </div>
    )
}
