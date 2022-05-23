import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task"

const Tasks = ({Todos}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {Todos.map(el=>{
          return(<Task key={el.id} value={el.value} Todos={el} />)
          

        })}

      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
