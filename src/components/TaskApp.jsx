import React,{useState} from "react";
import TaskHeader from "../components/TaskHeader/TaskHeader"
import AddTask from "../components/AddTask/AddTask"
import Tasks from "../components/Tasks/Tasks"

import styles from "./taskApp.module.css";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todos,setTodos] = useState([])

  const addTodo = (newTodo)=>{
    if(newTodo.value!==""){

      setTodos([...todos,{id:Date.now(), value: newTodo}])
    }
       console.log(todos)
  }


  
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <h1>Todo App</h1>
      <TaskHeader/>
      <AddTask addTodo={addTodo} Todos={todos}/>
      <Tasks Todos={todos}/>
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
