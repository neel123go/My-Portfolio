import React from "react";
import { Link } from "react-router-dom";
import './SingleProject.css';
import { EyeIcon, ArrowRightIcon, CodeIcon } from '@heroicons/react/solid'

const SingleProject = ({ project }) => {
    return (
        <div class="w-full bg-primary border border-slate-400">
            <figure><img src={project?.mainImage} alt="Shoes" /></figure>
            <div className="flex justify-between p-3">
                <h4 className="text-xl">{project?.name}</h4>

                <div className="grid grid-cols-2 justify-around gap-5 items-center">
                    <a href={project?.liveSite} target="_blank"><EyeIcon className="w-5 h-5 text-zinc-700 hover:text-zinc-900 hover:cursor-pointer" /></a>
                    <Link to={`/projectDetails/${project?._id}`}><ArrowRightIcon className="w-5 h-5 text-zinc-700 hover:text-zinc-900 hover:cursor-pointer" /></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;