import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <>
    <div  className='aside'>
        <ul className='ul'>
            <li className='l1'><h6 className='l1_h6'>HOME</h6><i class="fa-solid fa-house text-dark" ></i>
              
            </li>
            <li className='l2'><h6 className='l2_h6'>ABOUT</h6><i class="fa-solid fa-user text-dark" ></i></li>
            <li className='l3'><h6 className='l3_h6'>PORTFOLIO</h6><i class="fa-solid fa-briefcase text-dark" ></i></li>
            <li className='l4'><h6 className='l4_h6'>CONTACT</h6><i class="fa-solid fa-envelope text-dark" ></i></li>
            <li className='l5'><h6 className='l5_h6'>SERVICES</h6><i class="fa-solid fa-layer-group text-dark" ></i></li>
           
        </ul>
    </div>
    </>
  )
}

export default Sidebar