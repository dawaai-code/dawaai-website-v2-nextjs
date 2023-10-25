
import React from 'react';
import styles from "./style.module.css";
import Link from 'next/link';

const Partner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.partner}>
                <h3>Let’s Connect! </h3>
                <button><Link style={{textDecoration:"none", color:"white"}} href="#">Join us</Link></button>
            </div>


        </div>
    )
}

export default Partner