import React from 'react';
import menu from '../images/menu.svg'

export default function TopNavbar (props) {
    const styles = {
        boxShadow: '1px 5px 14px -7px rgba(0,0,0,0.7)',
        borderBottom: '1px solid white',
    }
    return(
        <nav style={styles} className="navbar navbar-light sticky-top bg-white">
            
            <li className="d-flex align-items-center navbar-brand">
                <img src={menu} alt="menu button" width="30" className="p-2 mr-3" onClick={props.toggleSidebar}/>
                Inventory Application 
            </li>
        </nav>
    )
}