import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-secondary">
            <div className="w-100 mx-auto">
                <ul className="menu menu-vertical mt-40">
                    <NavLink to="/" className='mt-5 mx-1 sm:mx-4 text-center px-2 sm:px-0 pt-3 h-12 w-auto sm:w-40 cursor-pointer font-semibold hover:border-b-4 hover:border-gray-800'>HOME</NavLink>
                    <NavLink to="/projects" className='mt-5 mx-1 sm:mx-4 text-center px-2 sm:px-0 pt-3 h-12 w-auto sm:w-40 cursor-pointer font-semibold hover:border-b-4 hover:border-gray-800'>PROJECTS</NavLink>
                    <NavLink to="/blogs" className='mt-5 mx-1 sm:mx-4 text-center px-2 sm:px-0 pt-3 h-12 w-auto sm:w-40 cursor-pointer font-semibold hover:border-b-4 hover:border-gray-800'>BLOGS</NavLink>
                    <NavLink to="/about" className='mt-5 mx-1 sm:mx-4 text-center px-2 sm:px-0 pt-3 h-12 w-auto sm:w-40 cursor-pointer font-semibold hover:border-b-4 hover:border-gray-800'>ABOUT ME</NavLink>
                    <NavLink to="/contact" className='mt-5 mx-1 sm:mx-4 text-center px-2 sm:px-0 pt-3 h-12 w-auto sm:w-40 cursor-pointer font-semibold hover:border-b-4 hover:border-gray-800'>CONNECT ME</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Header;