import React from 'react'
import Contact from '../Contact/Contact'
import './Background.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from '../Home/Home';
import Sidebar from '../Sidebar/Sidebar';
import Portfolio from '../Portfolio/Portfolio';

function Background() {
  return (
    <>
    <div className="background" style={{backgroundColor:"#121212" ,width:"100%",height:"100%"}}>
        <div className="container outer_container pt-5 pb-1 " >
        <Router>
          {/* <Sidebar/> */}
        <Routes>

          <Route path="/" element={<Portfolio/>}></Route>
          {/* <Route path="/" element={<Home/>}></Route> */}
          {/* <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact  />}></Route>
          <Route path="/work" element={<Project  />}></Route>
          <Route path="/popup" element={<Modal  />}></Route> */}


      </Routes>
     
      </Router>
        </div>
    </div>
        
    </>
  )
}

export default Background