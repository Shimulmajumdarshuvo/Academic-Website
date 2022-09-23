import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='mainFooter'>
            <div className='footer'>
                <div>
                    <h1>Academics</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsa suscipit libero ullam fuga.</p>
                    <button className='Btn'>Lean More</button>

                </div>
                <div className='footerTitle'>
                    <span>Our Campus</span>
                    <p>Academic</p>
                    <p>News</p>
                    <p>Our Team</p>
                    <p>Academic</p>
                    <p>Academic</p>
                    <p>Academic</p>
                </div>
                <div className='footerTitle'>
                    <span>Our Course</span>
                    <p>Month</p>
                    <p>Computer Service</p>
                    <p>Academic</p>
                    <p>Academic</p>
                    <p>Academic</p>
                    <p>Academic</p>
                </div>
                <div className='footerTitle'>
                    <span>Contact</span>
                    <p>Help Center</p>
                    <p>Support Commounity</p>
                    <p>Plan</p>
                    <p>Academic</p>
                    <p>Academic</p>
                    <p>Our Supports</p>
                </div>

            </div>
            <p className='footerEnd'>Copy Write©2022 All rights reserve|This is Academic Website</p>

        </div>
    );
};

export default Footer;