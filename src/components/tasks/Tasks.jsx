import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../provider/AuthContext';
import { IoIosAddCircle } from 'react-icons/io';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';
import AddTask from '../addTask/AddTask';
import App from './App';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import TaskCard from './TaskCard';

const Tasks = () => {
    const { user, category, isDark, setIsDark, setCategory, showForm, setShowForm } = useContext(AuthContext)
    const [tasks, setTasks] = useState([])


    useEffect(() => {
        fetch(`https://taskly-server-murex.vercel.app/tasks/${user.uid}/?category=${category}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [user.uid, tasks])

    if (showForm) {
        return <AddTask setShowForm={setShowForm} ></AddTask>
    }

    return (
        <div>
            {
                (tasks.length > 0) ?
                    <div className='flex flex-col gap-1 p-6 pt-0'>


                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Add New Task Card */}
                            {
                                category !== "" && <div onClick={() => {
                                    setCategory("add")
                                    setShowForm(true)
                                }} className="card bg-base-100 shadow-xl border flex justify-center items-center cursor-pointer hover:bg-gray-100">
                                    <IoIosAddCircle className="text-5xl text-gray-400 hover:text-gray-600" />
                                </div>
                            }

                            {/* Task Cards */}

                            {
                                category !== "" && tasks.map((task) => (<TaskCard task={task}></TaskCard>))
                            }
                        </div>
                        {
                            category === "" && <div onClick={() => {
                                setShowForm(true)
                                setCategory("add")
                            }} className="card bg-base-100 shadow-xl border flex justify-center items-center cursor-pointer hover:bg-gray-100">
                                <IoIosAddCircle className="text-5xl text-gray-400 hover:text-gray-600" />
                            </div>
                        }
                        {
                            category === "" && <App></App>
                        }

                    </div> :
                    <div className='min-h-screen'>
                        <p className=' text-center text-red-500 text-3xl pt-20'>No task yet</p>
                        <div className='flex justify-center pt-5'>
                            <button onClick={() => {
                                setShowForm(true)
                                setCategory("add")
                            }} className='btn'>Add TAsk</button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Tasks;