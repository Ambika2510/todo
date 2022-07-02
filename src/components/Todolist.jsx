import React from 'react'
import './Todolist.css';

function Todolist(props) {
  return  (
    <div className='todolist'>
    
     <li>{props.text}</li>
     <button className='Delete' onClick={()=>{props.onselect(props.id)}}>Delete</button>
    </div>
 
  )
}

export default Todolist