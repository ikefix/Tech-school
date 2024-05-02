import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
    <ul className="primary-menu">
        <li className="current">
            <Link to="/">Home</Link>
        </li>
        <li><Link to="/about">About</Link></li>

        <li>
            <Link to="/course-3">Courses</Link>
        </li>

        <li><Link to="/blog">Blog</Link> </li>
           
        <li> <Link to="/contact">Contact</Link></li>
    </ul>

    )
}
export default Nav;
