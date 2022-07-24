import React ,{useState}from 'react'
import Todolist from './Todolist';
import'./TodoForm.css';

function TodoForm(props) {
     let put=[];
        let tt=[];
  
    if(localStorage.length>0){
      put= JSON.parse(localStorage.getItem("tt"));
      for(let i=0;i<put.length;i++){
        tt.push(put[i].text);
      }
    }
    const [input,setInput]=useState("");
    const [items,setitems]=useState(tt);
    const handleChange= e =>{
        setInput(e.target.value);
    }
   const listofitems=()=>{
    if(input===""){
      return;
    }
    const it=[...items,input];
    setitems(it);
       let data=[];
    for(let i=0;i<it.length;i++){
         data.push({id:i,text:it[i]});
    }
    localStorage.setItem("tt", JSON.stringify(data));
    setInput("");
   }
   const deleteitems=(id)=>{
    const it=items.filter((el,i)=>{
              return i!==id;
    })
    setitems(it);
       localStorage.clear();
    let data=[];
    for(let i=0;i<it.length;i++){
         data.push({id:i,text:it[i]});
    }
    localStorage.setItem("tt", JSON.stringify(data));

   }
  return (
    <div className='main-div'>
      <div className='centre-div'>
        <h1>To Do List</h1>
 <input type="text" placeholder='Add a todo' value={input}  name='text' className='todo-input' onChange={handleChange}/>
  <button className='todo-button' onClick={listofitems}>+</button>
    {items.map((e,i)=>{
      return <Todolist key={i} id={i} text={e} onselect={deleteitems}/>;
    })}
  
    </div>
    </div>
  )
}

export default TodoForm
