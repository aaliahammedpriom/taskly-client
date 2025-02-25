import { useDrop } from "react-dnd";
import Task from "./Task";
import { useContext } from "react";
import AuthContext from "../../provider/AuthContext";

export default function Category({ category, tasks, moveTask }) {
  const { isDark } = useContext(AuthContext)
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => {
      if (item.category !== category) {
        moveTask(item.id, item.category, category);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={dropRef}
      className={` p-5  ${isOver ? " border border-blue-500 shadow-lg" : " "
        } ${isDark ? "bg-gray-800 " : "bg-base-200"}`}
    >
      <h2 className="text-xl font-bold mb-4  text-center">{category.toUpperCase()}</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tasks.length > 0 ? (
          tasks.map((task) => <Task key={task._id} task={{ ...task, category }} />)
        ) : (
          <div className='text-red-500'>No task yet</div>
        )}
      </div>
    </div>
  );
}
