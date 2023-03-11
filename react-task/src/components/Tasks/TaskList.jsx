import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../../context/TaskContext";

function TaskListrender(task) {
  console.log(task);

  return (
    <div className="grid grid-cols-4 gap-2">
      {task.map((e) => (
        <TaskCard
          key={e.id}
          keyid={e.id}
          title={e.title}
          description={e.description}
        ></TaskCard>
      ))}
    </div>
  );
}

function TaskList() {
  const { task } = useContext(TaskContext);

  return <div>{task.lenght !== 0 ? TaskListrender(task) : <h1>Void</h1>}</div>;
}

export default TaskList;
