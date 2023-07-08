import React from "react";
import App from "./App";


function Listitems(props){
    
    return (
        <>
        <div className="listitems">
        <i onClick={()=> {
            props.onSelect(props.id);
        }} class="fa-regular fa-circle-xmark"></i> <li> {props.text} </li> 
    </div>
    </> );
};

 

export default Listitems;