import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskCard({ keyid = 0, title = "", description = "" }) {
  const { deleteTask } = useContext(TaskContext);

  function handleSubmit(e) {
    e.preventDefault();
    deleteTask(keyid);
  }

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{title}</h1>
      <h2 className="text-gray-500 text-sm">{description}</h2>
      <form onSubmit={handleSubmit}>
        <button className="bg-red-500 px-2 py-2 rounded-md mt-4 hover:bg-red-400">Delete</button>
      </form>
    </div>
  );
}
export default TaskCard;
