import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function myComponent()
{
  return <div><h1>My First Component</h1></div>
}

//Create he Root Div For REACT
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
   <myComponent />
);


