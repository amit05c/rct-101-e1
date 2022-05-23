import React,{useState} from "react";
import styles from "./addTask.module.css";

const AddTask = ({ addTodo, Todos }) => {
  // NOTE: do not delete `data-cy` key value pair
  const [todo,setTodo] = useState("") 

  const handlechange = (e)=>{
    // console.log(e.target.value)
    if(e.target.value!==""){

      setTodo(e.target.value)
    }
  }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" onChange={handlechange} />
      <button value={todo} data-cy="add-task-button" onClick={()=>{ 
        if(todo!=="" && (Todos.filter(el=> el.value!=todo))){

          addTodo(todo);
          setTodo("")
        }
        
      }} >Add</button>
          <h1></h1>
    </div>
  );
};

export default AddTask;
