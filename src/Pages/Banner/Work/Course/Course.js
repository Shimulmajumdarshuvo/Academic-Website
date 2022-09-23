import React from 'react';
import './Course.css';
import { AiFillStar } from "react-icons/ai";


const Course = () => {
    return (
        <div>
            <div className='cTitle'>
                <h2>Popular Courses</h2>
                <p>Praesentium impedit, possimus harum eos ut tempora!</p>
            </div>
            <div className='mainCourse'>



                <div className="course">
                    <img src="https://media.istockphoto.com/photos/learning-on-the-job-picture-id1312139041?b=1&k=20&m=1312139041&s=170667a&w=0&h=27R_x4Sl6R7KJOVlYxjnxsY6dKBoxZm-CXXo3qXxXsw=" alt="" />

                    <h2>Mobile Application</h2>
                    <button className='buttons'> $99.00</button>
                    <div className='subCourse'>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>


                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur aspernatur illum distinctio tempora saepe ut unde cupiditate quas soluta numquam.</p>
                        <span><AiFillStar></AiFillStar></span>
                        <span><AiFillStar></AiFillStar></span>
                        <span><AiFillStar></AiFillStar></span>
                        <span><AiFillStar></AiFillStar></span>
                        <span><AiFillStar></AiFillStar></span>
                        <br />
                        <button className='btn'>Enroll the Course</button>
                    </div>
                </div>
                <div className="course">
                    <img src="https://media.istockphoto.com/photos/learning-on-the-job-picture-id1312139041?b=1&k=20&m=1312139041&s=170667a&w=0&h=27R_x4Sl6R7KJOVlYxjnxsY6dKBoxZm-CXXo3qXxXsw=" alt="" />

                    <h2>Mobile Application</h2>
                    <button className='buttons'> $99.00</button>
                    <div className='subCourse'>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>


                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur aspernatur illum distinctio tempora saepe ut unde cupiditate quas soluta numquam.</p>
                        <span><AiFillStar></AiFillStar></span>
                        <span><AiFillStar></AiFillStar></span>
                        <span><AiFillStar></AiFillStar></span>
                        <span><AiFillStar></AiFillStar></span>
                        <span><AiFillStar></AiFillStar></span>
                        <br />
                        <button className='btn'>Enroll the Course</button>
                    </div>
                </div>
                <div className="course">
                    <img src="https://media.istockphoto.com/photos/learning-on-the-job-picture-id1312139041?b=1&k=20&m=1312139041&s=170667a&w=0&h=27R_x4Sl6R7KJOVlYxjnxsY6dKBoxZm-CXXo3qXxXsw=" alt="" />

                    <h2>Mobile Application</h2>
                    <button className='buttons'> $99.00</button>
                    <div className='subCourse'>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>


                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur aspernatur illum distinctio tempora saepe ut unde cupiditate quas soluta numquam.</p>
                        <span><AiFillStar></AiFillStar></span>
                        <span><AiFillStar></AiFillStar></span>
                        <span><AiFillStar></AiFillStar></span>
                        <span><AiFillStar></AiFillStar></span>
                        <span><AiFillStar></AiFillStar></span>
                        <br />
                        <button className='btn'>Enroll the Course</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;