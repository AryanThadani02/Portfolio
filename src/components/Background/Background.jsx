import React from 'react'
import './background.css'
import Home from '../Home/Home'


function Background() {
  return (
    <>
        <div className="background" style={{backgroundColor:"#121212" ,width:"100%",height:"100vh"}}>
          <div className="container outer_container pt-5 pb-1 " >
            <Home/>
            </div>
        </div>
    </>
  )
}

export default Background