import './Nav.css'
import React from 'react'
import { FaTrophy, FaGlobeAmericas, FaHome, FaMusic } from 'react-icons/fa';

import { Link } from 'react-router-dom'

const nav = () =>
    <div className="nav">
        <div className="nav-content">
            <Link to="/" className="nav-link">
                <div className="nav_menu_item1"><p> <FaHome className="nav-icon" color="#f5f5f5" size={20}/> Cadastrar cliente</p></div>
            </Link>

            <Link to="/transaction" className="nav-link">
                <div className="nav_menu_item2"><p> <FaGlobeAmericas className="nav-icon" color="#f5f5f5" size={20}/> Transação</p></div>
            </Link>

            <Link to="/client_extract" className="nav-link">
                <div className="nav_menu_item3"><p> <FaTrophy className="nav-icon" color="#f5f5f5" size={20}/> Extrato</p></div>
            </Link>

            <Link to="/daily_report" className="nav-link">
                <div className="nav_menu_item4"><p> <FaMusic className="nav-icon" color="#f5f5f5" size={20}/> Relatório</p></div>
            </Link>

            <Link to="/client_balance" className="nav-link">
                <div className="nav_menu_item4"><p> <FaMusic className="nav-icon" color="#f5f5f5" size={20}/> Saldo clientes</p></div>
            </Link>
        </div>
    </div>

export default nav;