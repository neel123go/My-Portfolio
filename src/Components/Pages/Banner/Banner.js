import React from 'react';
import ProfileImg from '../../../assets/profile.jpg';

const Home = () => {
    return (
        <div className="hero py-10 lg:py-40">
            <div className="hero-content flex-col lg:flex-row-reverse w-full lg:w-2/3">
                <div className="text-center lg:text-left pl-0 md:pl-8 w-full lg:w-2/3">
                    <p className='text-xl'>Hello, There I'm</p>
                    <h1 className="text-5xl font-bold">Ayoun Paul Neel</h1>
                    <p className="py-6">A Junior Web Developer who care about writing clean code and genuinely love to learn more about web development.</p>
                    <a href='https://drive.google.com/file/d/1S36aW0dOtiKZ7prOegMAa23rPSNP5bho/view?usp=sharing' target="_blank" className='btn-secondary px-6 py-2 rounded-lg text-xl'>Download Resume</a>
                </div>

                <div className="avatar mr-0 lg:mr-3 mt-10 lg:mt-0">
                    <div className="w-72 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                        <img src={ProfileImg} alt="Profile Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;