import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const navbarLinks = links.map((link) => {
    return (<li>
      <Link key={link.id} to={link.url}>{(link.text !== 'Random') ? link.text : "Home"}</Link>
    </li>
    )
  })

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
        </div>
        <div className='links-container'>
          <ul className='links'>
            {navbarLinks}
          </ul>

        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { url, id, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
