import React from 'react'
import logo from '../assets/light-saber.png'
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const options = ['Menu'];
  const navigate = useNavigate();


  return (
    <div>
        <div className='header-container'>
			<img src={logo} alt="starWarsLogo" onClick={() => navigate("/")} className='main-logo'/>
			<span className='option' onClick={() => navigate("/")}>Galactic Force</span>
			<div className='nav-container'>
				{options.map((option) => (
					<span className='option'onClick={() => navigate("/")}>{option}</span>
				))}
			</div>
        </div>
    </div>
  )
}

