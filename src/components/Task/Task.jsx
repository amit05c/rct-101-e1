import React,{useState} from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"

const Task = ({Todos,value}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [count,setCount]= useState(1)
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">{Todos.value}</div>
      {/* Counter here */}
      <Counter count={count} setCount={setCount}/>
      <button data-cy="task-remove-button">Remove Task</button>
    </li>
  );
};

export default Task;
