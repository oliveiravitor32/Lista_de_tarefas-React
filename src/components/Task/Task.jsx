import React, { useState, useContext, useRef } from "react";

import {IoMdRemove} from "react-icons/io"
import {AiFillEdit, AiOutlineSend} from "react-icons/ai"

import "./Task.css"

import AppContext from "../../context/AppContext";
import Checkbox from "../Checkbox/Checkbox";

function Task({taskData, index}) {

    const [ enableEdit, setEnableEdit] = useState(true)
    const [ newDescription, setNewDescription ] = useState('')
    const {tasks, setTasks} = useContext(AppContext)

    const inputElement = useRef();

    function handleRemove() {
        const tasksWithUpdated = []

        tasks.map( (task, i) => {
            i != index ? tasksWithUpdated.push(task) : ''
        })

        confirm("Remove task?") ?  setTasks(tasksWithUpdated) : ''
    }
    function handleEditDescription(input) {
        setNewDescription(input.target.value)
    }   
    function handleEnableEdit() { 
        
        if(!enableEdit == false) {
            inputElement.current.focus();
            setEnableEdit(!enableEdit)
        } else {
            setEnableEdit(!enableEdit)
        }
    }
    function handleSubmit(e) {
        e.preventDefault();

        const withUpdatedTaskDescription = []
        const taskEdited = {description: newDescription, completed: tasks[index].completed}

        tasks.map((task, i) => i != index ? withUpdatedTaskDescription.push(task) : withUpdatedTaskDescription.push(taskEdited))

        setTasks(withUpdatedTaskDescription)    
        setEnableEdit(!enableEdit)
    }


    return (
        <section className="task-card">
            <form action="" className="task-form" onSubmit={handleSubmit}>   
                
                <Checkbox taskState={taskData.completed} index={index}/>
                
                <textarea
                    className="task-card-description" 
                    readOnly={enableEdit} 
                    defaultValue={taskData.title} 
                    onChange={handleEditDescription} 
                    ref={inputElement}
                    />

                <div className="task-card-container-buttons">
                    <button type="button" className="task-card-button -edit" onClick={handleEnableEdit}>
                        <AiFillEdit/>
                    </button>
                    <button type="button" className="task-card-button -remove" onClick={handleRemove}>
                        <IoMdRemove/>
                    </button>
                </div>
                <button type="submit" className="task-card-button-submit" disabled={enableEdit}>
                    <AiOutlineSend/>
                </button>
            </form>
        </section>
    )
}

export default Task;