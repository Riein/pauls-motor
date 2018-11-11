import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.css'

const Header = () => (
  <div className={styles.navigationOuter}>
    <div className={styles.navigationInner}>
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
        <li className={styles.logo}>Paul's Motor Inc</li>
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
  </div>
)

export default Header
