import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function TaskContainer() {
  return (
    <div className="container mx-auto mb-20">
      <TaskForm></TaskForm>
      <TaskList></TaskList>
    </div>
  );
}

export default TaskContainer;
