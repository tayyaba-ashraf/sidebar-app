import React  from 'react'
import SidebarStateHelper from './SidebarStateHelper';
import SidebarHeader from './SidebarHeader';
import SidebarLinks from './SidebarLinks';
import SidebarLinksHelper from './SidebarLinksHelper';


const Sidebar = () => {
   
  const {isOpen,toggle}=SidebarStateHelper();
  const {menuItem}=SidebarLinksHelper();
     
  return (
      <div className='sidebarcontainer'>
          <div className={`sidebar ${isOpen ? "openSidebarWidth" : "closeSidebarWidth"}`}>
              <SidebarHeader isOpen={isOpen} toggle={toggle} />
              {
                menuItem.map((item, index) => (
                    <SidebarLinks key={index} item={item} isOpen={isOpen} />
                ))
              }

            </div>
            

        </div>


  )
}

export default Sidebar