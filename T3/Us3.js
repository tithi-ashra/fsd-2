import React from 'react';
import { useState } from 'react';
import img1 from './img.jpg';
import img2 from './img1.jpg';

export default function Us3() {
    const [img,setImg] = useState(img1);
    function hc(){
        setImg(cp=>(cp===img1?img2:img1));
    };
  return (
    <div>
      <img src={img} height='200px' width={'200px'}></img>
      <button onClick={hc}>Change image</button>
    </div>
  );
};