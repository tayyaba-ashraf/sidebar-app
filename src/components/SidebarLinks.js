import React from 'react'
import { NavLink } from 'react-router-dom';
const SidebarLinks = (props) => {
  return (
      <NavLink to={props.item.path} key={props.key} className="link" >
          <div className="icon">{props.item.icon}</div>
          <div className={`link_text ${props.isOpen ? "openSidebarlink_text" : "closeSidebarlink_text"}`}>{props.item.name}</div>
      </NavLink>
  )
}

export default SidebarLinks