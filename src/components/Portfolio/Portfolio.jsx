import React from 'react'
import './Portfolio.css'
// import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

function Portfolio() {
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

                        <div className="container row justify-content-center mt-4 mb-4 ">
                            <div className="col-3 bg_color me-2">
                                <a href="https://aryanthadani02.github.io/Calculator/">
                                    <figure class="snip1576">
                                        <img src="calc.png" alt="sample104" style={{ width: "100%", height: "221px" }} />
                                        <figcaption>
                                            <h3>Basic <span>Calculator</span></h3>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>

                            <div className="col-3 bg_color mx-2 ">
                                <a href="https://aryanthadani02.github.io/To-Do-List/">
                                    <figure class="snip1576">
                                        <img src="tdl.png" alt="sample104" style={{ width: "100%", height: "221px" }} />
                                        <figcaption>
                                            <h3>to-do <span>list</span></h3>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>

                            <div className="col-3 bg_color ms-2">
                                <a href="">
                                    <figure class="snip1576">
                                        <img src="Netflix.png" alt="sample104" style={{ width: "100%", height: "221px" }} />
                                        <figcaption>
                                            <h3>clone <span>Netflix</span></h3>
                                        </figcaption>
                                    </figure>
                                </a>

                            </div>

                            <div className="col-3 bg_color me-2 ">
                                <a href="https://aryanthadani02.github.io/Car-Animation/">
                                    <figure class="snip1576">
                                        <img src="car.jpeg" alt="sample104" style={{ width: "100%", height: "221px" }} />
                                        <figcaption>
                                            <h3>Car <span>animation</span></h3>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>

                            <div className="col-3 bg_color mx-2 ">
                                <a href="https://aryanthadani02.github.io/Stone-Paper_Scissor-Game/">
                                    <figure class="snip1576">
                                        <img src="psr.webp" alt="sample104" style={{ width: "100%", height: "221px" }} />
                                        <figcaption>
                                            <h3>Game <span>Stone-paper-scissor</span></h3>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>

                            <div className="col-3 bg_color ms-2 ">
                                <a href="https://aryanthadani02.github.io/Roborto-Clone/">
                                    <figure class="snip1576">
                                        <img src="hotel.webp" alt="sample104" style={{ width: "100%", height: "221px" }} />
                                        <figcaption>
                                            <h3>hotel & resort <span> Roberto</span></h3>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>

                            <div className="col-3 bg_color me-2 ">
                                <a href="https://aryanthadani02.github.io/New-Year-Countdown/">
                                    <figure class="snip1576">
                                        <img src="nye.png" alt="sample104" style={{ width: "100%", height: "221px" }} />
                                        <figcaption>
                                            <h3>new-year <span>countdown</span></h3>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>

                            <div className="col-3 bg_color mx-2 ">
                                <a href="https://aryanthadani02.github.io/Traffic-Light/">
                                    <figure class="snip1576">
                                        <img src="traffic.jpg" alt="sample104" style={{ width: "100%", height: "221px" }} />
                                        <figcaption>
                                            <h3>traffic<span>light</span></h3>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>

                            <div className="col-3 bg_color ms-2 ">
                                <a href="https://aryanthadani02.github.io/Matrimonial-Project/">
                                    <figure class="snip1576">
                                        <img src="matri.jpg" alt="sample104" style={{ width: "100%", height: "221px" }} />
                                        <figcaption>
                                            <h3>Matrimonial<span>Project</span></h3>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Portfolio