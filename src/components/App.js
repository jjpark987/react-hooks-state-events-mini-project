// One failing test 1. displays all items when intially rendered

import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [currentCategory, setCurrentCategory] = useState("All");
  function onCategoryClick(category) {
    setCurrentCategory(category);
  }

  const [currentTasks, setCurrentTasks] = useState(TASKS);
  function onDelete(text) {
    setCurrentTasks(currentTasks.filter(task => task.text != text));
  }

  function onTaskFormSubmit(newTask) {
    setCurrentTasks([...currentTasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        currentCategory={currentCategory} 
        onCategoryClick={onCategoryClick} 
      />
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList 
        currentTasks={currentTasks}
        currentCategory={currentCategory}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
