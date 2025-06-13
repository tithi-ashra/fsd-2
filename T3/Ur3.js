import React, { useReducer } from 'react';

export default function Ur3() {
    const[state,dispatch] = useReducer(reduce,{num1:"",num2:"",resut:""});
    function reduce(state,action){
        const num1 = Number(state.num1);
        const num2 = Number(state.num2);
        switch(action.type){
            case 'selnum1':
                return {...state,num1:action.value};
            case 'selnum2':
                return {...state,num2:action.value};
            case 'add':
                return {...state,resut:num1+num2};
            case 'sub':
                return {...state,resut:num1-num2};
            case 'mul':
                return {...state,resut:num1*num2};
            case 'div':
                return {...state,resut:num1/num2};
            default:
                return state;
        }
    };
    return (
        <div>
            <input type='number' value={state.num1} onChange={(e)=>dispatch({type:'setnum1',value:e.target.value})}></input>
            <input type='number' value={state.num2} onChange={(e)=>dispatch({type:'setnum2',value:e.target.value})}></input>
            <div>
                <button onClick={()=>dispatch({type:'add'})}>Add</button>
                <button onClick={()=>dispatch({type:'sub'})}>Sub</button>
                <button onClick={()=>dispatch({type:'mul'})}>Mul</button>
                <button onClick={()=>dispatch({type:'div'})}>Div</button>
                <h3>result={state.resut}</h3>
            </div>
        </div>
  );
};