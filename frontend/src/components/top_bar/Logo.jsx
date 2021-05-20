import './Logo.css'
import ibm_logo from '../../assets/ibm_logo_svg.svg'
import React from 'react'


const logo = () =>
    <aside className="logo">
        <img src={ibm_logo} alt="IBM"/>
    </aside>

export default logo;