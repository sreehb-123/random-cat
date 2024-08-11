import React from "react";
import { useState } from "react";

export default function Cats() {
    const [url,setUrl] = useState("")

    function fetch_data() {
        fetch("https://api.thecatapi.com/v1/images/search").then(res => {
            if(res.ok){
                return res.json();
            }
            throw new Error("Request Failed!");
        },networkError => console.log(networkError.message)
        ).then(jsonRes => {
            setUrl(jsonRes[0].url)
        })
    }

    return(
        <div className="cats-main">
            <img src={url} className="cats-img" alt=""/>
            <button className="cats-btn" onClick={fetch_data}>Generate!</button>
        </div>
    )
}