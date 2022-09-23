import React from 'react';
import './Work.css';
import { MdCastForEducation, MdAccountBalance, MdTransferWithinAStation } from "react-icons/md";


const Work = () => {
    return (
        <div className='workSection'>
            <h1>Why Academics Work</h1>
            <div className='work'>
                <div className="subWork">
                    <div className='icon'>
                        <span className='icons'> <MdCastForEducation></MdCastForEducation></span>

                    </div>

                    <h2>Personalize Learning</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repellendus incidunt doloribus ullam iusto odit recusandae deserunt illo, enim, temporibus autem, mollitia illum sunt quas officia sit? Autem, expedita quod.</p>
                    <button className='btn'>Learn More</button>
                </div>
                <div className="subWork">
                    <div className='icon'>
                        <span className='icons'> <MdAccountBalance /></span>

                    </div>
                    <h2>Trusted Course</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repellendus incidunt doloribus ullam iusto odit recusandae deserunt illo, enim, temporibus autem, mollitia illum sunt quas officia sit? Autem, expedita quod.</p>
                    <button className='btn'>Learn More</button>
                </div>
                <div className="subWork">
                    <div className='icon'>
                        <span className='icons'> <MdTransferWithinAStation></MdTransferWithinAStation></span>

                    </div>
                    <h2>Tools For Student</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repellendus incidunt doloribus ullam iusto odit recusandae deserunt illo, enim, temporibus autem, mollitia illum sunt quas officia sit? Autem, expedita quod.</p>
                    <button className='btn'>Learn More</button>
                </div>

            </div>
        </div>
    );
};

export default Work;