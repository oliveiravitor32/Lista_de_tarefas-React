import React, {useContext, useState} from "react";

import {IoMdAdd} from "react-icons/io"
import "./CreateTask.css"
import AppContext from "../../context/AppContext";

function CreateTask() {
    
    const [ formText, setFormText] = useState("")

    const {tasks, setTasks} = useContext(AppContext)

    function handleSubmit(event) {
        event.preventDefault();

        const newTask = {title:formText, completed:false}
        setTasks([...tasks, newTask]) 
        setFormText('')
        console.log(tasks)
    }

    return (
        <form action="" className="form-create-task" onSubmit={handleSubmit}>
            <div className="form-container">
                <input 
                    type="text" 
                    placeholder="Create task..." 
                    className="form-input-text"
                    value={formText}
                    onChange={ ({ target }) => setFormText(target.value)}
                    required
                />
                <button className="form-button">
                    <IoMdAdd/>
                </button>
            </div>  
        </form>
    )
}

export default CreateTask;