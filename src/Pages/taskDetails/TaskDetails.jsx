import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import AuthContext from "../../provider/AuthContext";

const TaskDetails = () => {
    const { isDark } = useContext(AuthContext);
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://taskly-server-murex.vercel.app/task/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setTask(data);
                setTitle(data.title);
                setDescription(data.description);
            });
    }, [id]);

    const handleTitleChange = (e) => {
        const newTitle = e.target.value.slice(0, 50); // Limit to 50 characters
        setTitle(newTitle);

        fetch(`https://taskly-server-murex.vercel.app/task/title/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: newTitle, timestamp: new Date().toISOString() })
        });
    };

    const handleDescriptionChange = (e) => {
        const newDescription = e.target.value.slice(0, 200); // Limit to 200 characters
        setDescription(newDescription);

        fetch(`https://taskly-server-murex.vercel.app/task/description/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ description: newDescription, timestamp: new Date().toISOString() })
        });
    };

    if (!task) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="flex flex-col items-center p-6 min-h-screen">
            {/* <NavLink to="/" onClick={()=>setCategory("")} className="btn btn-primary">Go Back</NavLink> */}

            {/* Toolbar */}
            <div className="w-full max-w-4xl flex justify-between items-center shadow-2xl p-3 rounded-lg">
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    onBlur={handleTitleChange}
                    maxLength={50} // Limit input field to 50 characters
                    className="text-lg font-semibold truncate border-none outline-none bg-transparent w-full"
                />
                <span className="text-xs text-gray-500">{title?.length}/50</span>
            </div>

            {/* Editable Document Container */}
            <div className="w-full max-w-4xl mt-6 shadow-2xl rounded-lg p-6">
                <p className="text-sm mb-4">Last edited: {new Date(task.timestamp).toLocaleString()}</p>
                <textarea
                    value={description}
                    onChange={handleDescriptionChange}
                    onBlur={handleDescriptionChange}
                    maxLength={200} // Limit input field to 200 characters
                    className="w-full h-60 resize-none text-lg leading-relaxed outline-none border-none bg-transparent"
                />
                <span className="text-xs text-gray-500">{description?.length}/200</span>
            </div>
        </div>
    );
};

export default TaskDetails;
