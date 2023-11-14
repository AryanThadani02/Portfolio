import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="home d-flex align-items-center justify-content-center">
            <div className="row ">
                <div className="col-lg-4 col-12 bg mx-5 img col-12">
                    <img src="home.jpg" style={{ height: "100%", width: "100%" }} alt="" />
                </div>
                <div className="col-lg-6 text-light mx-auto text-start ">
                    <div className="home_text ps-5">
                        <div className='fs-1 fw-bold'>
                            <span className='home_name position-relative'><span className='position-absolute ' style={{ left: "-50px", bottom: "16px" }}>__</span>I'M ARYAN THADANI.</span><br />
                            <span className='home_name text-light'>FRONT-END DEVELOPER</span>
                        </div>
                        <div className="home_para text-justify fs-5 mt-4">
                            I'm an Indian based web designer & front-end developer focused on crafting clean & user-friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
                        </div>
                        <button className='button mt-4 px-4 py-3 rounded-pill'>
                            <span className='fs-6 fw-bold'>MORE ABOUT ME</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home