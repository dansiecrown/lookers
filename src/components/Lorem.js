import React, {useState, useEffect} from 'react'
import "./lorem.css"

export default function Lorem({lightMode}) {

    // This is a Lorem generator app
    // It generates a random text
    const [charNum, setCharNum] = useState(300);
    const [text, setText] = useState([]);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        generateText();
    }, [charNum])

    function generateText() {
        setLoading(true);
        const url = "https://api.api-ninjas.com/v1/loremipsum?max_length=" + charNum;
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'X-Api-Key': 'wiAPCDSS2ydvDxC25b+aCQ==vIJI9Wx6BCrPSKOY',

            }
        }).then(resp => resp.json())
            .then(data => {
                setText(data.text);
                setCopied(false);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }

    //Copy to clipboard using js
    function copyHandler(){
        navigator.clipboard.writeText(text);
        setCopied(true);
    }

    //Set the number of characters
    function setCharNumHandler(e){
        setCharNum(e.target.value);
       
    }

    //Make Copied notification disappear after 2 seconds
    useEffect(() => {
        if(copied){
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    }, [copied])


  return (
    <div className="lorem">
        <input
        className={lightMode? "light-input" : "dark-input"}
        placeholder="Change Number of characters" onChange={(e)=> setCharNumHandler(e)}/>
        {
            text && <p>{text}</p>
        
    }
    {
        text && <button onClick={() => copyHandler()}>Copy to clipboard</button>
    }

    {/* Copied Notified */}
    {
        copied && <p className="copied">Copied to clipboard</p>
    }

    </div>
  )
}
