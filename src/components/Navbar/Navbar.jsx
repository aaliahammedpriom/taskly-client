import React, { useContext } from 'react';
import AuthContext from '../../provider/AuthContext';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useNavigate } from 'react-router';

const Navbar = () => {
    const { category, setCategory, user, isDark, setIsDark, showForm, setShowForm } = useContext(AuthContext)
    const navigate = useNavigate()
    const links = <>
        <li>
            <button
                onClick={() => {
                    setShowForm(false)
                    setCategory("")
                    navigate('/')
                }}
                className={`btn max-sm:btn-xs ${category === "" ? "bg-green-500 text-white" : ""}`}
            >
                All Task
            </button>
        </li>
        <li>
            <button
                onClick={() => {
                    setShowForm(false)
                    setCategory("todo")
                    navigate('/')
                }}
                className={`btn max-sm:btn-xs ${category === "todo" ? "bg-green-500 text-white" : ""}`}
            >
                To-Do
            </button>
        </li>
        <li>
            <button
                onClick={() => {
                    setShowForm(false)
                    setCategory("inProgress")
                    navigate('/')
                }}
                className={`btn max-sm:btn-xs ${category === "inProgress" ? "bg-green-500 text-white" : ""}`}
            >
                In Progress
            </button>
        </li>
        <li>
            <button
                onClick={() => {
                    setShowForm(false)
                    setCategory("done")
                    navigate('/')
                }}
                className={`btn max-sm:btn-xs ${category === "done" ? "bg-green-500 text-white" : ""}`}
            >
                Done
            </button>
        </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <button onClick={() => {
                    setShowForm(false)
                    setCategory("")
                    navigate('/')
                }} className="btn btn-ghost text-xl">taskLy</button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2 ">
                <div>
                    <button className='  p-0 m-0 text-3xl text-yellow-400 ' onClick={() => setIsDark(!isDark)}>
                        {isDark ? <MdOutlineLightMode /> : <MdDarkMode />}
                    </button>
                </div>
                <img src={user?.photoURL} className='h-5 w-5 rounded-full' alt="" />
            </div>
        </div>
    );
};

export default Navbar;