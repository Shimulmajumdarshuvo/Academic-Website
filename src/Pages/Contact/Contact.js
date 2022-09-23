import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className='contact'>
                <div className='subContact'>
                    <div>
                        <h2>Subscribe To Us!</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium qui doloremque dolorem soluta minima?</p>


                    </div>

                    <div className='MainInput'>
                        <input className='Input' type="email" name="email" id="" value="Enter Your Email" />

                        <input className='Submit' type="submit" value="Send"></input>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;