import React, { useState } from 'react'

export default function Us7() {
    const [data,setData] = useState({brand:'',color:'',model:'',year:''});
    function hc(){
        setData({brand:'Bmw',color:'red',model:'xsl',year:'2016'});
    };
  return (
    <div>
        <h1>My {data.brand}.it is  a {data.color} {data.model} from {data.year}</h1>
      <button onClick={hc}>click</button>
    </div>
  );
};