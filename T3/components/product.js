import React from 'react';

export default function product(props) {
  return (
    <div>
        <h5>Product name = {props.name}</h5>
        <img src={props.img} height='200px' width='200px'></img>
        <h4>Price = {props.price}</h4>
        <h6>Description = {props.desc}</h6>
    </div>
  );
};