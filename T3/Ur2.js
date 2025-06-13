import React from 'react';
import { useReducer } from 'react';

export default function Ur2() {
    const[state,dispatch]=useReducer(reducer,5)
    function reducer(state,action){
        return state+action
    }
  return (
    <>
    <h1>{state}</h1>
    <button onClick={()=>dispatch(5)}>add</button>
    </>
  );
};