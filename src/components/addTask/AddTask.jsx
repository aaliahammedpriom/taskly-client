import { useContext } from "react";
import { useForm } from "react-hook-form";
import AuthContext from "../../provider/AuthContext";

export default function AddTask({ setShowForm }) {
    const { user, isDark, setCategory } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const addTask = {
            user_id: user.uid,
            ...data,
            timestamp: new Date().toISOString(),
        };
        fetch("https://taskly-server-murex.vercel.app/tasks", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addTask),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setShowForm(false);
                    setCategory("")
                }
            });
    };

    return (
        <div className="min-h-screen p-10">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={`p-4 max-w-lg mx-auto border rounded-lg shadow-lg space-y-4 transition-all ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"
                    }`}
            >
                {/* Title Input */}
                <input
                    {...register("title", { required: "Title is required", maxLength: 50 })}
                    className={`w-full p-2 border rounded text-lg font-semibold focus:outline-none ${isDark ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
                        }`}
                    placeholder="Enter task title"
                    maxLength={50}
                />
                {errors.title && <span className="text-red-400 text-sm">{errors.title.message}</span>}

                {/* Description Input */}
                <textarea
                    {...register("description", { maxLength: 200 })}
                    className={`w-full p-2 border rounded focus:outline-none ${isDark ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
                        }`}
                    placeholder="Enter task description..."
                    rows="5"
                    maxLength={200}
                />
                {errors.description && (
                    <span className="text-red-400 text-sm">Max 200 characters allowed</span>
                )}

                {/* Category Selection */}
                <select
                    {...register("category", { required: "Category is required" })}
                    className={`w-full p-2 border rounded focus:outline-none ${isDark ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
                        }`}
                >
                    <option value="">Select Category</option>
                    <option value="todo">To-Do</option>
                    <option value="inProgress">In Progress</option>
                    <option value="done">Done</option>
                </select>
                {errors.category && <span className="text-red-400 text-sm">{errors.category.message}</span>}

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`w-full p-2 rounded-lg ${isDark ? "bg-blue-600 hover:bg-blue-500" : "bg-blue-500 hover:bg-blue-400"
                        } text-white`}
                >
                    Add Task
                </button>
                
            </form>
        </div>
    );
}
