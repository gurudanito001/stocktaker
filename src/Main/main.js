import React from 'react';
import TopNavbar from './topNavbar';
import DataSection from './dataSection';

export default function Main (props) {
    const styles = {
        backgroundColor: '#eaeef3'
    }
    return(
        <main style={styles} className="col p-0">
            <TopNavbar toggleSidebar={props.toggleSidebar} />
            <DataSection currentScreen={props.currentScreen} screenHeader={props.screenHeader} setScreenDetails={props.setScreenDetails} />
        </main>
    )
}