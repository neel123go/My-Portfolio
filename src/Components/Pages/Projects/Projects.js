import React, { useEffect, useState } from "react";
import SingleProject from '../SingleProject/SingleProject';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-temple-59048.herokuapp.com/projects')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
            });
    }, []);

    return (
        <div className='px-5 py-10 md:px-20 lg:32 mb-20 p-10' id="projects">
            <h2 className='text-4xl'>My Projects -</h2>
            <div className='grid grid-cols-3 gap-7 mt-16'>
                {
                    projects.map(project =>
                        <SingleProject project={project} key={project._id}></SingleProject>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;