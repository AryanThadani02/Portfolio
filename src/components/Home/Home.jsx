import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="bg_yellow"></div>
            <div className="row align-items-center">
            <div className="col-4  bg position-fixed d-none d-lg-block  " >
                <img className='home_img' src="home.jpg" alt="" />
            </div>
            <div className="col-lg-12 d-flex justify-content-center text">
                <div className="text_div me-4"></div>
                <h1 className='home_text fw-bold '>I'M ARYAN THADANI. <br /><span className='text-light'>FRONT-END DEVELOPER</span><p className='text-light h5 fw-normal'>I'm an Indian based web designer & front-end developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p><button className='button'>More About me </button></h1><br />
            </div>
        </div> 
        </div>
    )
}

export default Home