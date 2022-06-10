import React from "react";
import { NavLink } from "react-router-dom";

const SingleProject = ({ project }) => {
    return (
        <div className="card w-full md:w-2/3 mx-auto mb-0 md:mb-20 border-2 border-gray-300 min-h-screen">
            <figure><img src={project.mainImage} alt="car!" /></figure>
            <div className="card-body p-3 md:p-10">
                <h2 className="card-title">{project.name}</h2>
                <p className="text-left">{project.shortDescription}</p>
                <p className="text-left">{project.technology}</p>
                <div className="card-actions justify-end mt-5">
                    <NavLink to={`/projectDetails/${project._id}`} className="badge badge-secondary py-4 px-3 cursor-pointer">Explore More</NavLink>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;