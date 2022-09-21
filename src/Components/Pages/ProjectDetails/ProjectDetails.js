import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./ProjectDetails.module.css";

import { Autoplay, Navigation, Pagination } from "swiper";
import Loading from '../Shared/Loading/Loading';

const ProjectDetails = () => {
    const [project, setProject] = useState({});
    const [isLoading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://mysterious-temple-59048.herokuapp.com/projects/${id}`)
            .then(res => res.json())
            .then(data => {
                setProject(data);
                setLoading(false);
            });
    }, [id]);

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    return (
        <div className="card my-10 mx-4 md:mx-20 border-2 border-gray-300">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={project[0]?.screenShorts[1]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={project[0]?.screenShorts[0]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={project[0]?.screenShorts[2]} alt="" />
                </SwiperSlide>

            </Swiper>

            <div className="card-body">
                <h2 className="card-title text-3xl text-gray-800">{project[0]?.name}</h2>
                <p className="text-left">{project[0]?.shortDescription}</p>
                <h2 className='text-gray-600 font-bold text-xl mt-5'>Details</h2>
                <ul>
                    <ol className='text-md'>- {project[0]?.points[0]}</ol>
                    <ol className='text-md'>- {project[0]?.points[1]}</ol>
                    <ol className='text-md'>- {project[0]?.points[2]}</ol>
                </ul>
                <p className="text-left text-xl text-gray-700 mt-5">Tecnology Used: {project[0]?.technology}</p>
                <div className="card-actions justify-end mt-5">
                    <a target='_blank' href={project[0]?.liveSite} className="badge badge-secondary py-4 px-3">Live View</a>
                    <a target='_blank' href={project[0]?.clientCode} className="badge badge-secondary py-4 px-3">Client Code</a>
                    {
                        project[0]?.serverCode && <a target='_blank' href={project[0]?.serverCode} className="badge badge-secondary py-4 px-3">Server Code</a>
                    }

                </div>
            </div>
        </div >
    );
};

export default ProjectDetails;