import React from 'react'
import './Contact.css'
// import Navbar from '../Navbar/Navbar'

function Contact() {
    return (
        <>
            <div className="background" style={{ backgroundColor: "#121212", width: "100%", height: "100%" }}>
                <div className="container outer_container pt-5 pb-1 " >
                    <div className="container mb-5 contact">
                        <div className='navbackground mt-2'>
                            <div className="container ">
                                <div className="row ">
                                    <div className='backgrounddiv '>
                                        <span className="backgroundtext">contact<h1 className="title" >
                                            get in <span>touch</span>
                                        </h1></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-light">
                            <div className="col-lg-4 col-12 text-start" >
                                <h4 className='fw-bold mb-3'>
                                    DON'T BE SHY !
                                </h4>
                                <p>
                                    Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                </p>
                                <p className='address d-flex my-4' >
                                    <i class="fa-solid fa-map me-3" ></i>
                                    <div>
                                        <span>ADDRESS POINT</span>
                                        <div>Jodhpur , Rajasthan , India , 342008.</div>
                                    </div>
                                </p>
                                <p className='mail d-flex mb-4' >
                                    <i class="fa-solid fa-envelope-open me-4" ></i>
                                    <div><span>MAIL ME</span>
                                        <div>aryanthadani0@gmail.com</div></div>
                                </p>
                                <p className='call d-flex mt-3'>
                                    <i class="fa-solid fa-phone-square me-4" ></i>
                                    <div><span>CALL ME</span>
                                        <div> +91 7014089510</div></div>
                                </p>
                                <div className='row'>
                                    <a class="btn facebook " href="https://www.facebook.com/profile.php?id=100006233594859" role="button"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a class="btn facebook mx-3" href="https://web.telegram.org/k/" role="button"><i class="fa-brands fa-telegram"></i></a>
                                    <a class="btn facebook " href="https://www.instagram.com/aryan_thadani_02/" role="button"><i class="fa-brands fa-instagram"></i></a>
                                    <a class="btn facebook ms-3 " href="https://web.whatsapp.com/" role="button"><i class="fa-brands fa-whatsapp"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-12 mb-4 form_col ">
                                <form action="" className='form'>
                                    <div className="row">
                                        <div className="col-6 my-4" > <input type="text" className='name text-light' name='name' placeholder='YOUR NAME' required autoComplete='off' /></div>
                                        <div className="col-6 my-4"> <input type="email" className='email text-light' name='email' placeholder='YOUR EMAIL' required autoComplete='off' /></div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-12">
                                            <input type="text" className='subject text-light ' name='subject' placeholder='YOUR SUBJECT' required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <textarea rows="7" cols="5" className='message text-light' name='message' placeholder='YOUR MESSAGE'></textarea>
                                        </div>
                                    </div>
                                </form>
                                <div className='ms-1 mt-4 mb-5'>
                                    <button type="button" class="fw-bold btn btn-outline-warning send_message text-light py-2 px-4">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact