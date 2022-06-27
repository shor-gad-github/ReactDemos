import React from "react";

//---Class Components---
class Car extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {brand:"Ford",model:"4fx",color:"black",year:2021};
    }

    chageColor = () =>{
   // this.state.color = "RED"; //WILL NOT WORK;
        this.setState({color:"red",year:this.state.year+1});
    }

    
 

    //ADD A BUTTON THAT CHANEGE the COLOR----
    render()
    {
        return(
        <div>
          <h1>{this.state.color}</h1>  
            <p>
               Brand: {this.state.brand}
               <br/>
               Year: {this.state.year}
            </p>
            <button onClick={this.chageColor}></button>
        </div>);
    }



}
