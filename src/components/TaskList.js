import React from "react";
import Task from "./Task";

function TaskList({ currentTasks, currentCategory, onDelete }) {
  return (
    <div className="tasks">
      {currentTasks.filter(task => 
        currentCategory === "All" ? true : task.category === currentCategory
      )
      .map(task => 
        <Task 
          key={task.text} 
          category={task.category} 
          text={task.text} 
          onDelete={onDelete} 
        />
      )}
    </div>
  );
}

export default TaskList;
