import React from 'react';
import About from '../Pages/About/About.js/About';
import Banner from '../Pages/Banner/Banner';
import Course from '../Pages/Banner/Work/Course/Course';
import Work from '../Pages/Banner/Work/Work';
import Catagoris from '../Pages/Catagoris/Catagoris';
import Contact from '../Pages/Contact/Contact';
import Footer from '../Pages/Footer/Footer';
import News from '../Pages/News/News';
import Testmonial from '../Pages/Testmonial/Testmonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Work></Work>
            <Course></Course>
            <About></About>
            <Testmonial></Testmonial>
            <Catagoris></Catagoris>
            <News></News>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;