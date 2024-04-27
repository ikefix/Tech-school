import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul className="primary-menu">
        <li className="current">
            <Link to="#">Home</Link>
            <ul className="submenu">
                <li><Link to="/">Home One</Link></li>
                <li><Link to="/home-2">Home Two</Link></li>
            </ul>
        </li>
        <li><Link to="/about">About</Link></li>

        <li>
            <Link to="#">Courses</Link>
            <ul className="submenu">
                <li><Link to="/course-1">Courses</Link></li>
                <li><Link to="/course-2">Course Grid 2 </Link></li>
                <li><Link to="/course-3">Course Grid 3</Link></li>
                <li><Link to="/course-4">Course Grid 4</Link></li>
                <li><Link to="/course-list">Course List</Link></li>
                <li><Link to="/course-details/1">Course Single 1</Link></li>
                <li><Link to="/course-details-two/2">Course Single 2</Link></li>
            </ul>
        </li>

        <li>
            <Link to="#">Pages</Link>
            <ul className="submenu">
                <li><Link to="/instructors">Instructors</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </li>

        <li><Link to="/blog">Blog</Link> </li>
           
        <li> <Link to="/contact">Contact</Link></li>
    </ul>

    )
}
export default Nav;
