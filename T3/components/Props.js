import React from 'react';

function Props(props) {
  return (
    <div style={{textAlign:'center'}}>
        <h1>Hello World</h1>
        <h6>first Name = {props.fname}</h6>
        <h6>Last Name = {props.lname}</h6>
    </div>
  );
};

export default Props;