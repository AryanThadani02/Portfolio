import React from 'react'
import './Portfolio.css'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

function Portfolio() {
    return (
        <>
        <Navbar/>
        <Sidebar/>
        <div className="portfolio">
            <div className="container row justify-content-center mt-4 mb-4 ">
                <div className="col-3 bg_color me-2">
                    <figure class="snip1576">
                        <img src="calc.png" alt="sample104" style={{width:"100%",height:"221px"}} />
                        <figcaption>
                            <h3>Basic <span>Calculator</span></h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </div>
                <div className="col-3 bg_color mx-2 ">
                    <figure class="snip1576">
                        <img src="tdl.png" alt="sample104" style={{width:"100%",height:"221px"}} />
                        <figcaption>
                            <h3>to-do <span>list</span></h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </div>
                <div className="col-3 bg_color ms-2 ">
                    <figure class="snip1576">
                        <img src="Netflix.png" alt="sample104" style={{width:"100%",height:"221px"}} />
                        <figcaption>
                            <h3>clone <span>Netflix</span></h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </div>
            </div>
            <div className="container row justify-content-center mt-4 mb-4 ">
                <div className="col-3 bg_color me-2 ">
                    <figure class="snip1576">
                        <img src="car.jpeg" alt="sample104" style={{width:"100%",height:"221px"}} />
                        <figcaption>
                            <h3>Car <span>animation</span></h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </div>
                <div className="col-3 bg_color mx-2 ">
                    <figure class="snip1576">
                        <img src="psr.webp" alt="sample104" style={{width:"100%",height:"221px"}} />
                        <figcaption>
                            <h3>Game <span>Stone-paper-scissor</span></h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </div>
                <div className="col-3 bg_color ms-2 ">
                    <figure class="snip1576">
                        <img src="hotel.webp" alt="sample104" style={{width:"100%",height:"221px"}} />
                        <figcaption>
                            <h3>hotel & resort <span> Roberto</span></h3>
                        </figcaption>
                        <a href="#"></a>
                    </figure>
                </div>
            </div>
        </div>
        </>
    )
}

export default Portfolio