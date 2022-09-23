import React from 'react';
import './News.css';

const News = () => {
    return (
        <div>
            <div className="HeadNews">
                <div>
                    <h2>News & Updates</h2>
                    <p>Read All News</p>

                    <div className='subNews'>

                        <div className='singleTitle'>
                            <img src="https://i.pinimg.com/736x/96/10/b4/9610b4c8eaf35b6738d06e8aaeebb7d6.jpg" alt="" />
                            <h5>JUNE 12,2022 / ADMISSION Update</h5>
                            <p>Campus Campaing and Learning Sesion</p>
                        </div>


                        <div>
                            <div className='singleNews'>
                                <img src="https://thumbs.dreamstime.com/b/college-friends-socializing-students-talking-each-other-university-campus-concept-happy-days-student-life-166551790.jpg" alt="" />
                                <div>
                                    <p>JUNE 12,2022 / ADMISSION Update</p>
                                    <h5>Campus Campaing and Learning Sesion</h5>
                                </div>
                            </div>
                            <div className='singleNews'>
                                <img src="https://thumbs.dreamstime.com/z/international-friendship-concept-college-friends-taking-selfie-break-169995954.jpg" alt="" />
                                <div>
                                    <p>JUNE 12,2022 / ADMISSION Update</p>
                                    <h5>Campus Campaing and Learning Sesion</h5>
                                </div>
                            </div>
                            <div className='singleNews'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVuKnZ2PWplxU_spghdIEIy9tR1veL4HWfowyJF-pXRJJWI7ywdpi75pOJE3XwWDXeFHQ&usqp=CAU" alt="" />
                                <div>
                                    <p>JUNE 12,2022 / ADMISSION Update</p>
                                    <h5>Campus Campaing and Learning Sesion</h5>
                                </div>
                            </div>


                        </div>



                    </div>
                </div>


                <div className='VideoPart'>
                    <h2>Campus Videos</h2>
                    <span>View All Videos</span>





                </div>

            </div>

        </div>
    );
};

export default News;