import './Footer.css'
import React from 'react'
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

const footer = () =>
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-item"> 
                <FaGithubSquare className="footer-icon-media" color="#f5f5f5" size={40}/>
                <FaLinkedin className="footer-icon-media" color="#f5f5f5" size={40}/>
                <FaInstagramSquare className="footer-icon-media" color="#f5f5f5" size={40}/>
            </div>
            <div className="footer-item"> leandrobispoferreira@gmail.com </div>
            <div className="footer-item"> Termos de uso • Políticas de privacidade </div>
            <div className="footer-item"> Copyright © 2021, Composer. </div>
        </div>
    </footer>

export default footer;