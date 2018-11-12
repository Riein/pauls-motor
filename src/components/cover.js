import React from 'react'
import {Link} from 'gatsby'
import styles from './cover.module.css'

const Cover = () => (
    <div className={styles.cover}>
        <div className={styles.coverContent} >
            <h1>Quality Auto Repair.</h1>
            <h2>Offering high-quality auto repair and used car sales.</h2>
            <h2>
                <Link to='/services' 
                style={{ 
                    color: 'white', 
                    }}
                >Click here to find out more!</Link>
            </h2>
        </div>
    </div>
)

export default Cover;