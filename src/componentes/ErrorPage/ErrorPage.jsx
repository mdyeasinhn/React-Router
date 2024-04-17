import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>Oops!</h1>
            <p>{error.statusText || error.massage}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <p>Go back Where you from</p>
                    <Link to="/"><button>Back to Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;