import React from "react";
import { useAsyncError } from "react-router-dom";

const ComponentError = () => {
    const error = useAsyncError()
    const message = error.message || 'Something wrong!'
    return (
        <div className="text-center text-[red]">
            {message}   
        </div>
    )
};

export default ComponentError;
