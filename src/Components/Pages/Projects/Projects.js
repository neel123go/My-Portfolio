import React from 'react';
import Project1Img from '../../../assets/project-pic/project1.png';
import Project2Img from '../../../assets/project-pic/project2.png';
import Project3Img from '../../../assets/project-pic/project3.png';
const Projects = () => {
    return (
        <div className='px-5 md:px-20 lg:32 mb-20' id="projects">
            <h2 className='text-4xl mb-10'>My Projects -</h2>
            <div className='p-3 md:p-10 bg-white rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="card w-auto glass">
                    <figure><img src={Project1Img} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">MR. Computer Tools</h2>
                        <p>This a Computer Tools Manufacturer website that sales different type of computer tools. In this website user can buy tools & pay his/her orders by debit card. An admin user can add products, manage products, manage all user orders and you can also make admin any normal user.</p>
                        <div className="card-actions justify-end mt-5">
                            <a target='_blank' href="https://mr-computer-tools.web.app/" className="badge badge-secondary py-4 px-3">Live View</a>
                            <a target='_blank' href="https://github.com/neel123go/mr-computer-tools" className="badge badge-secondary py-4 px-3">Client Code</a>
                            <a target='_blank' href="https://github.com/neel123go/mr-computer-tools-server" className="badge badge-secondary py-4 px-3">Server Code</a>
                        </div>
                    </div>
                </div>
                <div className="card w-auto glass">
                    <figure><img src={Project2Img} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sales Tracking</h2>
                        <p>This website is a warehouse management website. Through this website, users can stock, restock, add, delete as well as delivered user items. Moreover, The users can also purchase services according to their demands.</p>
                        <div className="card-actions justify-end mt-5">
                            <a target='_blank' href="https://sales-tracking-2ffd2.web.app/" className="badge badge-secondary py-4 px-3">Live View</a>
                            <a target='_blank' href="https://github.com/neel123go/sales-traking-client" className="badge badge-secondary py-4 px-3">Client Code</a>
                            <a target='_blank' href="https://github.com/neel123go/sales-tracking-server" className="badge badge-secondary py-4 px-3">Server Code</a>
                        </div>
                    </div>
                </div>
                <div className="card w-auto glass">
                    <figure><img src={Project3Img} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Paul's Capture</h2>
                        <p>This is a photography website which provides different services. In this website user can create an account with with gmail and password. User can also create your account with your google & github account.</p>
                        <div className="card-actions justify-end mt-5">
                            <a target='_blank' href="https://paul-s-capture.web.app/" className="badge badge-secondary py-4 px-3">Live View</a>
                            <a target='_blank' href="https://github.com/neel123go/pauls-capture-assignment" className="badge badge-secondary py-4 px-3">Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;