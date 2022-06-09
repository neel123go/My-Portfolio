import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="w-100 mx-auto">
                <ul className="menu menu-horizontal p-0">
                    <a href="#" className='mt-5 bg-secondary mx-1 sm:mx-4 text-center px-2 sm:px-0 pt-3 h-12 w-auto sm:w-40 hover:rounded-lg cursor-pointer'>HOME</a>
                    <a href="#projects" className='mt-5 bg-secondary mx-1 sm:mx-4 text-center px-2 sm:px-0 pt-3 h-12 w-auto sm:w-40 hover:rounded-lg cursor-pointer'>PROJECTS</a>
                    <a href="#contactMe" className='mt-5 bg-secondary mx-1 sm:mx-4 text-center px-2 sm:px-0 pt-3 h-12 w-auto sm:w-40 hover:rounded-lg cursor-pointer'>CONNECT ME</a>
                </ul>
            </div>
        </div>
    );
};

export default Header;