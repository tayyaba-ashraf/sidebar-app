import React, { useState } from 'react'
import SidebarHeader from './SidebarHeader';
import SidebarLinks from './SidebarLinks';
import SidebarLinksHelper from './SidebarLinksHelper';

const Sidebar222 = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const {menuItem}=SidebarLinksHelper();
   
    // const menuItem=[
    //     {
    //         path:"/",
    //         name:"Dashboard",
    //         icon:<FaTh/>
    //     },
    //     {
    //         path:"/about",
    //         name:"About",
    //         icon:<FaUserAlt/>
    //     },
    //     {
    //         path:"/analytics",
    //         name:"Analytics",
    //         icon:<FaRegChartBar/>
    //     },
    //     {
    //         path:"/comment",
    //         name:"Comment",
    //         icon:<FaCommentAlt/>
    //     },
    //     {
    //         path:"/product",
    //         name:"Product",
    //         icon:<FaShoppingBag/>
    //     },
    //     {
    //         path:"/productList",
    //         name:"Product List",
    //         icon:<FaThList/>
    //     }
    // ]
  return (
      <div className='container'>
          <div className={`sidebar ${isOpen ? "openSidebarWidth": "closeSidebarWidth"}`}>
              {/* <div className='top_section'>
                  <h1 className={`logo ${isOpen ? "openSidebarLogo":"closeSidebarLogo" }`}>Logo</h1>
                  <div className={`bars ${isOpen ? "openSidebarbars" : "closeSidebarbars"} `}>
                      <FaBars onClick={toggle} />
                  </div>
              </div> */}
              <SidebarHeader isOpen={isOpen} toggle={toggle}/>
              {
                 menuItem.map((item, index) => (
                    // <NavLink to={item.path} key={index} className="link" >
                    //     <div className="icon">{item.icon}</div>
                    //     <div className={`link_text ${isOpen ? "openSidebarlink_text" : "closeSidebarlink_text"}`}>{item.name}</div>
                    // </NavLink>
                    <SidebarLinks key={index} item={item} isOpen={isOpen} />
                    ))
              }

            </div>
            <main>{children}</main>

        </div>


  )
}

export default Sidebar222