import { useState, useContext } from "react";
import { TaskContext } from '../../context/TaskContext'

function TaskForm() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const tosave = {title: title, description: description };

    console.log(tosave);

    createTask(tosave);

    settitle('')
    setdescription('')
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-lg">
        <input
          onChange={(e) => {
            settitle(e.target.value);
          }}
          type="text"
          placeholder="Write your task"
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        />
        <input
          onChange={(e) => {
            setdescription(e.target.value);
          }}
          type="text"
          placeholder="Write a description"
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        />
        <button type="submit" className="bg-green-500 px-3 py-1 text-white rounded-md w-full">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
