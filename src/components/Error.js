import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Opps !!, Something Went Wrong</h1>
            <h2>Call The COPS , 😂</h2>
            <h2>{error.status}:{error.statusText}</h2>
        </div>
    );
};

export default Error;