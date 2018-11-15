import React from 'react'
import styles from './footer.module.css'

const Footer = () => (
    <div>
        <div className={styles.footer} >
        <ul className={styles.footerul}>
          <li className={styles.footerli}>
            &copy; Copyright 2018. All Rights Reserved.
          </li>
          <li className={styles.footerli}>
            <a href="#top" style={{ color: 'white',}}>Back To Top</a>
          </li>
          <li className={styles.footerli}>
            Paul's Motor Inc
          </li>
        </ul>
        </div>
    </div>
)

export default Footer;