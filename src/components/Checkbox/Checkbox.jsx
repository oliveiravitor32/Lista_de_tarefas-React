
import React, {useContext} from "react";

import "./Checkbox.css"

import AppContext from "../../context/AppContext";

function Checkbox({taskState, index}) {

    const {tasks, setTasks} = useContext(AppContext)
   
    function handleChangeState() {
        const tasksWithUpdatedState = []

        tasks[index].completed = !tasks[index].completed

        tasks.map( (task) => {
            tasksWithUpdatedState.push(task)
        })

        setTasks(tasksWithUpdatedState)
    }

    return (
        <div className="checkbox-wrapper">
                <input type="checkbox" className="checkboxState" defaultChecked={taskState} onChange={handleChangeState}/>
        </div>
    )
}

export default Checkbox;