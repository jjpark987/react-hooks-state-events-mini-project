import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({category: "", text: ""});
  function onInputChange(event) {
    setNewTask({...newTask, text: event.target.value})
  }
  function onOptionsChange(event) {
    setNewTask({...newTask, category: event.target.value})
  }
  return (
    <form className="new-task-form" onSubmit={() => onTaskFormSubmit(newTask)}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={onInputChange} />
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={onOptionsChange}>
          {categories.map(category => 
            category === "All" ? "" : <option value={category}>{category}</option>
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
