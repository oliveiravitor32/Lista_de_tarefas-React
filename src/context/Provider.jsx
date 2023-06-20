
import React, {useState} from "react";

import AppContext from "./AppContext";

function Provider({children}) {

    const [tasks, setTasks] = useState([])

    const value = {
        tasks,
        setTasks,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default Provider;