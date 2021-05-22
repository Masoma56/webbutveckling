import React from 'react'
import './NavigationBar.css'
import Logotype from '../../shared/images/Logotype.svg'


export const NavigationBar = () => {

    return (
        <div className="Navigationbar-wrapper">
            <img className="logo" src={Logotype} alt="Logo" />
            <span className="signIn">Sign in</span>

        </div>
    )
}