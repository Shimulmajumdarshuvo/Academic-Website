import React from 'react';
import './Testmonial.css';

const Testmonial = () => {
    return (
        <div className='headTestimonials'>
            <h1>Testimonial</h1>
            <div className='testimonial'>
                <div className="subTestimonial">
                    <div className='testi'>
                        <img src="https://www.thewikifeed.com/wp-content/uploads/2022/01/alex-griswold-1.jpg" alt="" />
                        <div className='testiTitle'>
                            <h2 >
                                ALex Gordan
                            </h2>
                            <h3>Player</h3>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dolorum quas odit ea ratione architecto dolorem officia maiores sequi sint, quibusdam perspiciatis consectetur nam adipisci?</p>
                </div>
                <div className="subTestimonial">
                    <div className='testi'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4bOt5Ss8-JafQf3s9fU20ZOuhRleBJK0X6Q&usqp=CAU" alt="" />
                        <div className='testiTitle'>
                            <h2>
                                ALex Gordan
                            </h2>
                            <h3>Player</h3>
                        </div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dolorum quas odit ea ratione architecto dolorem officia maiores sequi sint, quibusdam perspiciatis consectetur nam adipisci?</p>
                </div>



            </div>
        </div>
    );
};

export default Testmonial;