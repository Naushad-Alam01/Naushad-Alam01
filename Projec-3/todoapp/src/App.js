import logo from './logo.svg';
import './App.css';  
import { useState } from 'react';
import Listitems from './Listitems';
  

function App() {
  const state = useState("");
  const [task , updateTask] = useState("");
  const [item , updateItem] = useState([]);

const Addtask = (event) =>{
     const value = event.target.value;
     updateTask(value);
};

const Additems = () =>{
     updateItem((olditems) =>{
      return [...olditems, task]
     } );
    updateTask("");
};

const deleteItems = (id) => {
  console.log("Deleted");
 updateItem( (olditems) =>{
  return olditems.filter((arrElem, index) => {
    return index !== id;
  })
 } );
}

  return (
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> ToDo List </h1>
        <br />
        <input onChange={Addtask} type='text' placeholder='Add a item' value={task} />
        <button className="btn" onClick={Additems}> + </button>

        <ol>
         { item.map((element, i) => {
              return <Listitems key={i} id={i} onSelect={deleteItems} text={element}/>;      
          })}
        </ol>  
      </div>
    </div> 

   </>
  ); 
}

export default App;
