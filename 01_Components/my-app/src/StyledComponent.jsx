import React from 'react';

function  StyledComponent() {
   let myStyle =  {color:"blue",border:"3px solid blue"};
   //Edit Style as JSON OBJECT

    return ( 
       <>
        <h1 className='headerTest'>HTML WITH STYLE 1</h1>
        <br></br>
        <h1 style={{color:"blue",border:"3px solid blue"}}>HTML WITH STYLE 2</h1>
        <br></br>
        <h1 style={myStyle}>HTML WITH STYLE 3</h1>
        </>
     );
}

export default StyledComponent;