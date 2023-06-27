import React, { useState } from 'react'
import { PathContext } from './PathContext';

const PathState = (props) => {
    const [path, setPath] = useState("");
    return (
        <div>
            <PathContext.Provider value={{ path, setPath }}>
                {props.children}
            </PathContext.Provider>
        </div>
    )
}

export default PathState
