import React from 'react';
import './Navigation.css';

const navigation = (props) => {
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li><a href="/"> Questions </a></li>
                    <li><a href="/result"> Result </a></li>
                    <li><a href="/user-register"> Register </a></li>
                </ul>
            </nav>
        </div>
    );
}

export default navigation;