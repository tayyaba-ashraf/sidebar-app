import React, { useState } from 'react'

const SidebarStateHelper = () => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
  return {isOpen,toggle}
}

export default SidebarStateHelper