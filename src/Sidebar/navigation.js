import React from 'react';
import spareparts from '../images/spareparts.svg';
import truck from '../images/truck.svg';
import history from '../images/history.svg';



function NavLink (props){
    return(
        <button className="btn btn-outline-secondary btn-block d-flex align-items-center text-white p-3 border-0 m-0"
            style={{boxShadow:'none'}} onClick={props.onClick}>
            <img src={props.icon} alt={props.alt} height="22" className="mr-2"/>
            <span>{props.linkText}</span>
        </button>
    )
}

export default function Navigation (props){
    return(
        <>
            
        <ul className="p-0 m-0">
            <NavLink icon={spareparts} alt='Spare Parts Icon' linkText="Spare Parts" onClick={()=>{
                props.setScreenDetails('Inventory Records', 'Inventory Records');
                if(props.windowWidth < 1200){
                    props.toggleSidebar()
                }
                document.getElementById('cancelPurchaseModal').click()
                document.getElementById('cancelUseItemsModal').click()
                if(props.currentScreen === 'Table Item Details'){
                    document.getElementById('cancelEditItemForm').click()
                }
                
                }} 
            />

            <NavLink icon={truck} alt='Vehicles Icon' linkText="All Vehicles" onClick={()=>{
                props.setScreenDetails('All Vehicles', 'All Vehicles')
                if(props.windowWidth < 1200){
                    props.toggleSidebar()
                }
                document.getElementById('cancelPurchaseModal').click()
                document.getElementById('cancelUseItemsModal').click()
                //document.getElementById('cancelEditItemForm').click()
                }} 
            />

            <NavLink icon={history} alt='History Icon' linkText="History"  onClick={()=>{
                props.setScreenDetails('App History', 'App History');
                if(props.windowWidth < 1200){
                    props.toggleSidebar()
                }
                document.getElementById('cancelPurchaseModal').click()
                document.getElementById('cancelUseItemsModal').click()
                if(props.currentScreen === 'Table Item Details'){
                    document.getElementById('cancelEditItemForm').click()
                }
                }} 
            />
            
        </ul>


        </>
    )
}
