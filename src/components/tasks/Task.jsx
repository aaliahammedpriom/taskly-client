import { useContext } from "react";
import { useDrag } from "react-dnd";
import AuthContext from "../../provider/AuthContext";
import TaskCard from "./TaskCard";

export default function Task({ task,moveTask, fetchTasks }) {
  const {isDark ,setCategory} = useContext(AuthContext)
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "TASK",
    item: { id: task._id, category: task.category },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
      <div ref={dragRef} className="card bg-base-50 shadow-xl border ">
                <TaskCard task={task} moveTask={moveTask} fetchTasks={fetchTasks}></TaskCard>
      </div>
  );
}
