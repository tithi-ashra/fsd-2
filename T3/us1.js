import React from 'react';
import { useState } from 'react';

export default function Us1() {
    const [count,setCount] = useState(0);
    function hc(){
        if(count<10){
            setCount(count+1);
        }
    };
    function hc1(){
        if(count>0){
            setCount(count-1);
        }
    };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={hc}>inc</button>
      <button onClick={hc1}>dec</button>
    </div>
  );
};