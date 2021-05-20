import './Header.css'
import Logo from './Logo'
import Nav from './Nav'
import React from 'react'

const header = () =>
    <div class="header">
        <header className="header-content">
            <Logo/>
            <Nav/>
        </header>
    </div>
    
export default header;