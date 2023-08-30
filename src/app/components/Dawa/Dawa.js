import React from 'react';
import Image from 'next/image';
import styles from "../Dawa/style.module.css";
import section_img from "../../../../public/images/shopper.png"

const Dawa = () => {
    return (
        <div className={styles.container}>
            <h1>WHY DAWA.AI?</h1>
            <p>We are dedicated team consisting of graduates from IITs</p>
            <div className={styles.shopper}>
                <div>
                    <Image src={section_img} width={600} height={510} />
                </div>
                <div>
                    <div className={styles.card}>
                        <h2>Increase efficiency</h2>
                        <p>Delivering possibilities for pharmacists and increasing efficiency in the production flows.</p>
                    </div>
                    <div  className={styles.card}>
                        <h2>User Friendly</h2>
                        <p>Its a pharmacists dashboard that offer a convenient way to manage our clients drugstores and digital presence</p>

                    </div>
                    <div  className={styles.card}>
                            <h2>Pocket Friendly</h2>        
                            <p>We belive in the power of technology to transform your business and we commited to delivering healthcare at a price you can afford.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dawa