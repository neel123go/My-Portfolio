import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-secondary h-28 px-20">
            <div className="w-100 mx-auto">
                <ul className="menu menu-horizontal p-0">
                    <li className='px-5'><h1 className='text-xl mx-auto hover:bg-secondary'>HOME</h1></li>
                    <li className='px-5'><h1 className='text-xl mx-auto hover:bg-secondary'>PROJECTS</h1></li>
                    <li className='px-5'><h1 className='text-xl mx-auto hover:bg-secondary'>CONTACT</h1></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;