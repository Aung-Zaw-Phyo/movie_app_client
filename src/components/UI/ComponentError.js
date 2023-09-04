import React from "react";
import { useAsyncError } from "react-router-dom";

const ComponentError = (props) => {
    const error = useAsyncError()
    const message = error.message || 'Something wrong!'
    let classes = "text-center text-[red]"
    if(props.className) {
        classes = props.className + " text-center text-[red]"
    }
    return (
        <div className={classes}>
            {message}   
        </div>
    )
};

export default ComponentError;
