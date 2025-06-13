import React from 'react';
import { useState } from 'react';

export default function Us6() {
    const [text,setText] = useState("Lj University");
    const [showReactText,setshowReactText] = useState(true);
    const [color,setStyle] = useState('red');
    const[buttontext,setButtontext]= useState("hide");
    function hc(){
        setText(cp=>(cp==='Lj University'?'Hello students':'Lj University'));
    };
    function hc1(){
        setStyle(cp=>(cp==='red'?'blue':'red'));
    };
    function hc2(){
        if(showReactText)
        {
            setshowReactText(false);
            setButtontext("show");
        }
        else
        {
            setshowReactText(true);
            setButtontext("hide");
        }
    };
  return (
    <div>
        <h1 style={{color}}>{text}</h1>
        {showReactText && <h2>React js Hooks</h2>}
      <button onClick={hc}>change text</button>
      <button onDoubleClick={hc1}>change color</button>
      <button onClick={hc2}>hide/show</button>
    </div>
  );
};