import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import AuthContext from '../../provider/AuthContext';
import Swal from 'sweetalert2';

const TaskCard = ({ task }) => {
    const { isDark, setCategory } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://taskly-server-murex.vercel.app/task/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate('/')
                    })

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    if (!task) {
        return <p>No Task Yet</p>
    }
    return (
        <div key={task._id} className="card bg-base-50 shadow-xl border ">
            <NavLink to={`/task/${task._id}`} onClick={() => setCategory("add")}>
                <div className="p-4">
                    <div className={`h-40 flex flex-col  justify-center items-left py-5 px-5 text-xs overflow-hidden rounded-xl ${isDark ? "bg-gray-900" : "bg-gray-200"}`}>
                        <h6 className='font-bold text-center'>Title: {task.title}</h6>
                        <p className='text-center'>Description: {task.description}</p>

                    </div>
                </div>
                <div className="card-body p-4 pb-1">
                    {/* Task Title */}
                    <h2 className="text-md font-semibold truncate">{task.title}</h2>

                    {/* Opened Date */}
                    <p className="text-xs text-gray-500">
                        Opened {new Date(task.timestamp).toLocaleDateString("en-US", {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                        })}
                    </p>

                </div>
            </NavLink>
            {/* File Type Badge (Category) */}
            <div className='flex justify-between px-4 pb-4'>
                <div className="badge badge-primary">{task.category}</div>
                <div>
                    <button onClick={() => handleDelete(task._id)} className='badge badge-primary btn'>Delete</button>

                </div>
            </div>

        </div>
    );
};

export default TaskCard;