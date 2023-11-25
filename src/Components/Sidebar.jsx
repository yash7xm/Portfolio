import '../assets/Styles/Sidebar.css'
import SidebarBtns from '../Components/SidebarBtns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Sidebar({changeContent}) {
    const[mobile, setMobile] = useState(1);
    
    const setMobileNav = () => {
        setMobile(prevState => (prevState === 0 ? 1 : 0));
        console.log(mobile);
    }

    return (
        <div className="sidebar" style={{ height: mobile === 1 ? '100%' : '10%' }}>
            <div className="info">
                <div className="name">Yash Poonia</div>
                <div className="desc">Passionate computer engineering student excelling in programming, web development, and software engineering.</div>
                <div className="menu-btn" onClick={setMobileNav}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
           <SidebarBtns changeContent = {changeContent} mobile = {mobile} />
        </div>
    )
}

export default Sidebar