import React from 'react';
import { useState } from 'react';

export default function Us4() {
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    function handleChange(event)
    {
        setFirstName(event.target.value);
    };
    function handleChange1(event)
    {
        setLastName(event.target.value);
    };
    return (
        <div>
            <h3>Enter Your First Name</h3>
            <input name="firstName" value={firstName} onChange={handleChange}/>
            <br/>
            <h3>Enter Your Last Name</h3>
            <input name="lastName" value={lastName} onChange={handleChange1}/>
            <br/>
            <h1>First Name: {firstName} <br/>Lastname: {lastName}</h1>
        </div>
    );
}  ;