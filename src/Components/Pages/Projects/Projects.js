import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SingleProject from '../SingleProject/SingleProject';
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

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
            <div className='mt-10 p-3 md:py-20 bg-white rounded-3xl'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {
                        projects.map(project =>
                            <SwiperSlide key={project._id}>
                                <SingleProject project={project} key={project._id}></SingleProject>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;