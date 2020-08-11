import React from 'react';
import user from '../images/user.svg'

export default function UserDetails (){
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '32vh',
        color: 'white',
    }

    return(
       <div style={styles}>
           <img src={user} width="70" alt="user avatar"/>
           <p className="font-weight-bold mb-0">Name Of User</p>
           <p>Position</p>
       </div> 
    )
}