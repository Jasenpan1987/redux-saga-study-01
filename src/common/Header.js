import React from "react";
import { Link, IndexLink } from 'react-router';

const Header = props => {
    return (
        <div className="text-center">
            <nav className="navbar navbar-default">
                <IndexLink activeClassName="active" >Home</IndexLink>
                {" | "}
                <Link to="library" activeClassName="active">Library</Link>
            </nav>
        </div>
    )
}

export default Header;