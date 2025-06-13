import React from 'react';
import { useReducer } from 'react';

export default function Ur1() {
    const[state,dispatch]=useReducer(reducer,5)
    function reducer(state,action){
        if(action.type==='increment'){
            return state+1
        }
        else if(action.type==='decrement'){
            return state-1
        }
    }
  return (
   <>
   <button onClick={()=>dispatch({type:'increment'})}>increment</button>
   <button onClick={()=>dispatch({type:'decrement'})}>decrement</button>
   <h1>{state}</h1>
   </>
  );
};