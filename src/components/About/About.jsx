import React from 'react';
import './About.css';

const About = () => {
    return (
        <>
            <div className="background" style={{ backgroundColor: "#121212", width: "100%", height: "100%" }}>
                <div className="container outer_container pt-5 pb-1 " >
                    <div className="portfolio">
                        <div className='navbackground mt-2'>
                            <div className="container ">
                                <div className="row ">
                                    <div className='backgrounddiv '>
                                        <span className="backgroundtext">works<h1 className="title" style={{ letterSpacing: "-2px" }}>
                                            my <span>portfolio</span>
                                        </h1></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="About">
                            <div className="container-fluid">
                                <div className="row block_1 separator">
                                    <div className="col-8 mb-3">
                                        <h4 className='fw-bold'>PERSONAL <span style={{ color: "gold" }} >INFOS</span></h4>
                                    </div>
                                    <div className="col-8 my-2">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12 mb-sm-3">
                                                <span className='left'>First Name:</span>
                                                <span className='right'> Aryan</span>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <span className='left'>Last Name:</span>
                                                <span className='right'> Thadani</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 my-2">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12 mb-sm-3">
                                                <span className='left'>Age:</span>
                                                <span className='right'> 21 Years</span>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <span className='left'>Nationality:</span>
                                                <span className='right'> Indian</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 my-2">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12 mb-sm-3">
                                                <span className='left'>Freelance:</span>
                                                <span className='right' style={{ color: "green" }}> Available</span>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <span className='left'>Address:</span>
                                                <span className='right'> Jodhpur, Rajasthan</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 my-2">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12 mb-sm-3">
                                                <span className='left'>Phone:</span>
                                                <span className='right'> +91 7014089510</span>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <span className='left'>Email:</span>
                                                <span className='right'> Aryan@123gmail.com
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* <div className="row block_1 separator">
                                    <div className="col-6 col-lg-10 mb-3">
                                        <h4 className='fw-bold'>MY SKILLS</h4>
                                    </div>

                                    <div className="col-6 col-md-3 col-lg-3 mt-3">
                                        <div class="outer_circle">
                                            <div class="inner_circle"></div>
                                        </div>
                                        <h6 className='mt-2 mt-sm-2'>HTML</h6>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-3 mt-3">
                                        <div class="outer_circle">
                                            <div class="inner_circle"></div>
                                        </div>
                                        <h6 className='mt-2 mt-sm-2'>CSS</h6>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-3 mt-3">
                                        <div class="outer_circle">
                                            <div class="inner_circle"></div>
                                        </div>
                                        <h6 className='mt-2 mt-sm-2'>JAVASCRIPT</h6>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-3 mt-3">
                                        <div class="outer_circle">
                                            <div class="inner_circle"></div>
                                        </div>
                                        <h6 className='mt-2 mt-sm-2'>ReactJS</h6>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-3 mt-3">
                                        <div class="outer_circle">
                                            <div class="inner_circle"></div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-3 mt-3">
                                        <div class="outer_circle">
                                            <div class="inner_circle"></div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-3 mt-3">
                                        <div class="outer_circle">
                                            <div class="inner_circle"></div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-3 mt-3">
                                        <div class="outer_circle">
                                            <div class="inner_circle"></div>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="row my-5 my-sm-2">
                                    <div className="row ">
                                        <div className="col-8 ">
                                            <h3>Experience and Education</h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-6 mt-5">
                                            <ul style={{ listStyle: "none" }}>
                                                <li>
                                                    <div className="icon">
                                                        <i class="fa-solid fa-briefcase"></i>
                                                    </div>
                                                    <span className='time'>2023 - Present</span>
                                                    <h5>Web Development Internship</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nesciunt!</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i class="fa-solid fa-briefcase"></i>
                                                    </div>
                                                    <span className='time'>2023 - Present</span>
                                                    <h5>Web Development Internship</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nesciunt!</p>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i class="fa-solid fa-briefcase"></i>
                                                    </div>
                                                    <span className='time'>2023 - Present</span>
                                                    <h5>Web Development Internship</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nesciunt!</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-12 col-lg-6 mt-5">
                                            <ul style={{ listStyle: "none" }}>
                                                <li>
                                                    <div className="icon_right">
                                                        <i class="fa-solid fa-briefcase"></i>
                                                    </div>
                                                    <span className='time'>2023 - Present</span>
                                                    <h5>Web Development Internship</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nesciunt!</p>
                                                </li>
                                                <li>
                                                    <div className="icon_right">
                                                        <i class="fa-solid fa-briefcase"></i>
                                                    </div>
                                                    <span className='time'>2023 - Present</span>
                                                    <h5>Web Development Internship</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nesciunt!</p>
                                                </li>
                                                <li>
                                                    <div className="icon_right">
                                                        <i class="fa-solid fa-briefcase"></i>
                                                    </div>
                                                    <span className='time'>2023 - Present</span>
                                                    <h5>Web Development Internship</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nesciunt!</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
