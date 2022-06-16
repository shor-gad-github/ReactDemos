import React from 'react';
import ReactDOM from 'react-dom/client';
import ComponentAsClass from './ComponentAsClass.js';
import OtherComponent from './MyOtherComponent.js';
import './index.css';


function Countries()
{
  const countries  = ["Israel","USA","Brazil","France"];
  return(
    <ul>
    {
      countries.map((country) =>
        <li>{country}</li>
      )
    }
  </ul>);
}

function MyComponent()
{
    return(
  <React.Fragment>
      <h1>List Of Component</h1>
      <OtherComponent></OtherComponent>
      <br/>
      <OtherComponent></OtherComponent>
      <ComponentAsClass></ComponentAsClass>
   </React.Fragment>);

}

//Create he Root Div For REACT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Countries />
);


