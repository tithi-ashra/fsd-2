import React, {useState,useEffect } from 'react';

function Ue1 (){
    const[countA,setcountA]=useState(0);
    const[countB,setcountB]=useState(0);
    useEffect(()=>{
        alert("Clicked")
    },[countA]);

    // useEffect(()=>{
    //     alert("Clicked")
    // },[]);
    // useEffect(()=>{
    //     alert("Clicked")
    // });
    function changeCountA(){
        setcountA(countA+1);
    }
    const changeCountB=()=>{
        setcountB(countB+1);
    }
    return (
        <div>
            <button onClick={changeCountA}>Button A {countA}</button><br/>
            <button onClick={ changeCountB}>Button B { countB}</button>
        </div>
    ); 
};

export default Ue1;