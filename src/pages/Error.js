import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError()
    console.log(error)
    const message = error.message || 'Something wrong.'
    return (
        <div>{message}</div>
    );
};

export default Error;
