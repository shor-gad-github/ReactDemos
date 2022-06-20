import React from 'react';

//--Function Component Example
export default function PropsDemo(props)
{
    console.log(props)
    return(
    <>
    <h1> {props.myData}</h1>
     <p> {props.kuku}</p>
    </>);
}