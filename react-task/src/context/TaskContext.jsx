import { createContext } from "react";
import { task as data } from "../data/task";
import { useState, useEffect } from "react";

export const TaskContext = createContext();

function TaskContextProvider(props) {
  const [task, settasks] = useState([]);

  useEffect(() => {
    if (task.length === 0) {
      settasks(data);
    }
  }, []);

  function createTask(tosave) {
    settasks([
      ...task,
      {
        id: task.length,
        title: tosave.title,
        description: tosave.description,
      },
    ]);
  }

  function deleteTask(id) {
    const indexDel = task.findIndex((t) => t.id === id);
    if (indexDel !== -1) {
      const newtask = [...task];
      newtask.splice(indexDel, 1);
      settasks(newtask);
    }
  }

  return (
    <TaskContext.Provider value={{x:10, task, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
