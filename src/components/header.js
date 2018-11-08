import React from 'react'
import { Link } from 'gatsby'
import './header.module.css'

const Header = ({ siteTitle }) => (
  <div className="navigation">
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </h1>

    <ul>
      <li><Link to="/" 
          style={{
            color: 'black',
            textDecoration: 'none',
        }}
        >Home</Link></li>
      <li><Link to="/services" 
          style={{
            color: 'black',
            textDecoration: 'none',
        }}
        >Services</Link></li>
      <li id="logo">Paul's Motor Inc</li>
      <li><Link to="/about" 
          style={{
            color: 'black',
            textDecoration: 'none',
        }}
        >About</Link></li>
      <li><Link to="/contact-us" 
          style={{
            color: 'black',
            textDecoration: 'none',
        }}
        >Contact Us</Link></li>
    </ul>
  </div>
)

export default Header
