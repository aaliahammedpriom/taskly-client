import { useContext, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Category from "./Category";
import AuthContext from "../../provider/AuthContext";
import Loading from "../Loading/Loading";

export default function App() {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState({ todo: [], inProgress: [], done: [] });
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    if (!user?.uid) return;
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/tasks/${user.uid}`);
      if (!response.ok) throw new Error("Failed to fetch tasks");
      const data = await response.json();

      const categorizedTasks = {
        todo: data.filter((task) => task.category === "todo"),
        inProgress: data.filter((task) => task.category === "inProgress"),
        done: data.filter((task) => task.category === "done"),
      };

      setTasks(categorizedTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [user?.uid]);

  const moveTask = async (taskId, fromCategory, toCategory) => {
    const taskToMove = tasks[fromCategory].find((task) => task._id === taskId);
    if (!taskToMove) return;

    setTasks((prev) => ({
      ...prev,
      [fromCategory]: prev[fromCategory].filter((task) => task._id !== taskId),
      [toCategory]: [...prev[toCategory], { ...taskToMove, category: toCategory }],
    }));

    // Update in database and refetch tasks
    try {
      const response = await fetch(`http://localhost:3000/task-category`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: taskId, category: toCategory }), // Sending id and category
      });

      if (!response.ok) throw new Error("Failed to update task category");
      fetchTasks(); // Fetch updated tasks
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col gap-1">
        {loading ? (
          <Loading></Loading>
        ) : (
          Object.keys(tasks).map((category) => (
            <Category key={category} category={category} tasks={tasks[category]} moveTask={moveTask} />
          ))
        )}
      </div>
    </DndProvider>
  );
}
