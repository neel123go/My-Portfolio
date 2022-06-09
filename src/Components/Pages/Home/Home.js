import React from 'react';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactPage/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;