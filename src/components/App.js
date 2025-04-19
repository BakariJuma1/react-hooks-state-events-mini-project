import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS); // Initialize state with TASKS
  const [selectedCategory, setSelectedCategory] = useState("All"); // Track selected category

  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]); // Add the new task to the list
  }
  function handleDeleteTask(taskText) {
    const updatedTasks = tasks.filter((task) => task.text !== taskText);
    setTasks(updatedTasks); // Update
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category); // Update the selected category
  }

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />{" "}
      {/* Pass the updated tasks state here */}
    </div>
  );
}

export default App;
