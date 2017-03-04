import React from "react";
import { Link } from "react-router";

const HomePage = (props) => {
    return (
        <div className="jumbotron center">
            <h1 className="lead">Welcome to Media Library</h1>
            <div>
                <Link to="library">
                    <button className="btn btn-primary btn-lg">Visit Library</button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;