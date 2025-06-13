import React, {useEffect, useState} from 'react';
import axios from "axios";

function Axios1(){
    const [item,setItem] = useState("");
    function fetchapi(){
        axios
            .get('https://catfact.ninja/fact')
            .then((res)=>{setItem(res.data)})
            .catch((err)=>{console.log(err)})
    };
    // useEffect(fetchapi,[])
    useEffect(()=>{setInterval(()=>{setItem(item)},5000)},[])
    return(
        <div>
            <h1>fact in regards of cat : {item.fact}</h1>
            <button onClick={fetchapi}>view</button>
        </div>
    );
};

export default Axios1;