import React, {useContext} from "react";

import "./TasksList.css"
import Task from "../Task/Task"

import AppContext from "../../context/AppContext";

function TasksList() {

    const {tasks} = useContext(AppContext)

    return (
        <section className="tasks-list">
            {
                tasks.map((task, index) =>
                    <Task key={index} taskData={task} index={index} />
                )
            }
            
        </section>
    )

}

export default TasksList;