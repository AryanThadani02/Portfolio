import React from 'react'
import './Sidebar2.css'

function Sidebar2() {
  return (
    <>
    <div  className='asid'>
        <div className='ul d-flex justify-content-between'>
            <div className='l1'><h6 className='l1_h6'>HOME</h6><i class="fa-solid fa-house text-dark" ></i></div>
            <div className='l2'><h6 className='l2_h6'>ABOUT</h6><i class="fa-solid fa-user text-dark" ></i></div>
            <div className='l3'><h6 className='l3_h6'>PORTFOLIO</h6><i class="fa-solid fa-briefcase text-dark" ></i></div>
            <div className='l4'><h6 className='l4_h6'>CONTACT</h6><i class="fa-solid fa-envelope text-dark" ></i></div>
            <div className='l5'><h6 className='l5_h6'>SERVICES</h6><i class="fa-solid fa-layer-group text-dark" ></i></div>
        </div>
    </div>
   </>
  )
}

export default Sidebar2