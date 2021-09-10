import React from 'react';
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

    const displaySubmenu = (e) => {
        const page = e.target.textContent 
        //submenu 이동시키기 위한 위치값 구하기 
        const tempBtn = e.target.getBoundingClientRect()
        const center = (tempBtn.left + tempBtn.right) / 2 
        const bottom = tempBtn.bottom - 3
        openSubmenu(page, { center, bottom })
    }
    //navbar 텍스트외에는 마우스오버 이벤트 적용되지 않게하기 
    const handleSubmenu = (e) => {
        if(!e.target.classList.contains('link-btn')){ //e.target.className !== "link-btn"
            closeSubmenu()
        }
    }
    return (
        <nav className="nav" onMouseOver={handleSubmenu}>
           <div className="nav-center">
               <div className="nav-header">
                   <img src={logo} alt="stripe" className="nav-logo" />
                   <button className="btn toggle-btn" onClick={openSidebar}>
                       <FaBars/>
                   </button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button 
                        className="link-btn" 
                        onMouseOver={displaySubmenu}
                        >products</button>
                    </li>
                    <li>
                        <button 
                        className="link-btn" 
                        onMouseOver={displaySubmenu}
                        >developers</button>
                    </li>
                    <li>
                        <button 
                        className="link-btn" 
                        onMouseOver={displaySubmenu}
                        >company</button>
                    </li>
                </ul>
                <button className="btn signin-btn">Sign in</button>
            </div> 
        </nav>
    );
};

export default Navbar;