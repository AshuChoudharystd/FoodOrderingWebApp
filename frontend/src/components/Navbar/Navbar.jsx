import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
    const [menu, setMenu] = useState("home")

    return (
        <div className="navbar">
            <img src={assets.logo} alt="Logo" className="logo" />
            <ul className="navbar-menu">
                <li onClick={()=>{
                    setMenu("home")
                }} className={menu === "home" ? "active" : ""}>home</li>
                <li onClick={()=>{
                    setMenu("menu")
                }} className={menu === "menu" ? "active" : ""}>menu</li>
                <li onClick={()=>{
                    setMenu("mobile-app")
                }} className={menu === "mobile-app" ? "active" : ""}>mobile-app</li>
                <li onClick={()=>{
                    setMenu("contact-us")
                }} className={menu === "contact-us" ? "active" : ""}>contact us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search" className="search-icon" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="Basket" className="basket-icon" />
                    <div className="dot"></div>
                </div>
                <button className="sign-in-button">Sign-In</button>
            </div>
        </div>
    )
}

export default Navbar
