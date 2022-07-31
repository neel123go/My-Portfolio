import React from "react";
import { NavLink } from "react-router-dom";
import './SingleProject.css';
import { EyeIcon, ArrowRightIcon, CodeIcon } from '@heroicons/react/solid'

const SingleProject = ({ project }) => {
    return (
        <div className="h-96">
            <div className="z-20">
                <figure><img className="project-img" src={project.mainImage} alt="car!" /></figure>
            </div>
            <div className="bg-secondary ml-[70px] w-[425px] h-[226px] mt-[-190px] z-10">
                <div className="flex flex-col items-end pt-4">
                    <a href={project.liveSite} target="_blank" className="cursor-pointer w-9 my-1 rounded-full p-2"><EyeIcon className="h-5 w-5 text-gray-800 hover:ml-1" /></a>
                    <a href={project.clientCode} target="_blank" className="cursor-pointer w-9 my-1 rounded-full p-2"><CodeIcon className="h-5 w-5 text-gray-800 hover:ml-1" /></a>
                    <NavLink to={`/projectDetails/${project._id}`} className="cursor-pointer w-9 my-1 rounded-full p-2"><ArrowRightIcon className="h-5 w-5 text-gray-800 hover:ml-1" /></NavLink>
                </div>
                <p className="text-gray-800 text-xl project-tittle">{project.name}</p>
            </div>
        </div>
    );
};

export default SingleProject;