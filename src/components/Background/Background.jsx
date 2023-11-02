import React from 'react'
import Contact from '../Contact/Contact'
import './Background.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function Background() {
  return (
    <>
    <div className="background" style={{backgroundColor:"#121212" ,width:"100%",height:"100%"}}>
        <div className="container outer_container pt-5 pb-1 " >
        <Router>
     
        <Routes>

          <Route path="/" element={<Contact/>}></Route>
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