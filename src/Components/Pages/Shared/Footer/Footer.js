import React from 'react';

const Footer = () => {
    const data = new Date();
    const currentYear = data.getFullYear();
    return (
        <div className='text-center py-10'>
            <h2 className='text-xl'>Copyright &copy; {currentYear} Ayounpaulneel.com</h2>
        </div>
    );
};

export default Footer;