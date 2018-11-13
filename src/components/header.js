import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.css'

const Header = () => (
  <div className={styles.navigationOuter}>
    <div className={styles.navigationInner}>
      <ul className={styles.headerul}>
        <li className={styles.headerli}><Link to="/" 
            style={{
              color: 'black',
              textDecoration: 'none',
          }}
          >Home</Link></li>
        <li className={styles.headerli}><Link to="/services" 
            style={{
              color: 'black',
              textDecoration: 'none',
          }}
          >Services</Link></li>
        <li className={styles.headerli}>
          <span className={styles.logo}>
            Paul's Motor Inc
          </span>
        </li>
        <li className={styles.headerli}><Link to="/about" 
            style={{
              color: 'black',
              textDecoration: 'none',
          }}
          >About</Link></li>
        <li className={styles.headerli}><Link to="/contact-us" 
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
