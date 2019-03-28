import React, {Component} from 'react'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends Component {

render() {
    return (
        <nav>
            <ul>
            <li>
                <Link to="/">Question</Link>
            </li>
            <li>
                <Link to="/result/">Result</Link>
            </li>
            <li>
                <Link to="/login/">Login</Link>
            </li>
            </ul>
        </nav>
    );
}}

export default Navigation;