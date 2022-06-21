import React from 'react';
import ReactDOM from 'react-dom/client';
import ComponentAsClass from './ComponentAsClass.js';
import OtherComponent from './MyOtherComponent.js';
import HomePage from './Pages/HomePage.jsx';
import './styles.css';
import StyledComponent  from './StyledComponent'
import PropsDemo  from './PropsDemo'






function GetCountries()
{
  let countriesObjArray = [{countryCode:234243,countryName:"France",Capital:"Paris"},
                           {countryCode:567567,countryName:"Israel",Capital:"Jerusalem"},
                           {countryCode:456768,countryName:"USA",Capital:"Washington"}];

  return countriesObjArray;
}


//--Demo To Generate Component out of standart JS Array Object  
function CountriesList()
{
  //--Array Object
  const countries  = GetCountries();
  return(
    <ul> 
    { //--Use { } to move from React JSX-HTML to JS code area 
      countries.map((country) =>
        <li>{`[${country.countryCode}] - ${country.countryName} - ${country.Capital}`}</li> 
      )
    } 
  </ul>);

}





//--Demo To Generate Component out of standart JS Array Object  
function Countries()
{
  //--Array Object
  const countries  = ["Israel","USA","Brazil","France"];
  return(
    <ul> 
    { //--Use { } to move from React JSX-HTML to JS code area 
      countries.map((country) =>
        <li >{country}</li> 
      )
    } 
  </ul>);

}

//--Component that is Composed of other Components
function MyCompositeComponent()
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


function Car(props) {
  return(
  <>
   <h5>I am a {`${props.carInfo.name} - ${props.carInfo.model}`}!</h5>;

  </>);
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang 2020"  };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car carInfo={ carInfo } />
      <Car carInfo={{name: "Volvo", model: "AX-2021"  }} />
      <Car carInfo={{name: "Subaro", model: "vW-2019"  }} />
    </>
  );
}



//Create he Root Div For REACT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Garage />

  </>
  //  <ComponentAsClass />
  //  <MyCompositeComponent />
);


