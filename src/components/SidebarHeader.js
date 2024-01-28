import React from 'react'
import {FaBars}from "react-icons/fa";

const SidebarHeader = (props) => {
  
  return (
    <div className='top_section'>
      <h1 className={`logo ${props.isOpen ? "openSidebarLogo" : "closeSidebarLogo"}`}>Logo</h1>
      <div className={`bars ${props.isOpen ? "openSidebarbars" : "closeSidebarbars"} `}>
        <FaBars onClick={props.toggle} />
      </div>
    </div>
  )
}

export default SidebarHeader