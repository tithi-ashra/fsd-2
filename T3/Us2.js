import React from 'react';
import { useState } from 'react';

export default function Us2() {
    const [style,setStyle] = useState("tomato");
    const [data,setData] = useState();
    function hc(){
        setStyle('cyan');
        setData('welcome campion');
    };
    return (
    <div>
      <h1 style={{backgroundColor:style}}>Hello</h1>
      <button onClick={hc}>changecss</button>
      <h3>{data}</h3>
    </div>
  );
};