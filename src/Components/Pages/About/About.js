import React from 'react';
import ProfileImg from '../../../assets/profile.jpg';

const About = () => {
    return (
        <div className='min-h-screen'>
            <h2 className='text-4xl my-8 md:my-20 ml-20'>About Me -</h2>
            <div className="hero">
                <div className="w-full mx-auto md:w-4/5 hero-content flex-col lg:flex-row">
                    <div className='w-full md:w-1/2'>
                        <img src={ProfileImg} className="w-3/4 sm:max-w-xs mx-auto rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-full p-5 md:w-1/2'>
                        <p className='text-xl mb-5'>Hello, There I'm</p>
                        <h1 className="text-5xl font-bold">Ayoun Paul Neel</h1>
                        <p className="py-6 text-lg text-slate-700">I am a student in class 10. The name of my school is Sylhet Govt. Pilot High School. I want to be a web developer. I believe that dreams don't work unless you do. So, to fulfill my dreams I always work hard every single day.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;