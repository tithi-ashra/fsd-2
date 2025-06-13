import React from 'react';
import { useState } from 'react';

export default function Us5() {
    const [data,setData] = useState({name:'jeet'});
    function hc(){
        setData({name:'deep'});
    };
    return (
        <div>
            <h1>Don't talk {data.name}</h1>
            <button onClick={hc}>click</button>
        </div>
  );
};