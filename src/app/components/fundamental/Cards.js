import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import card_1 from "../../../../public/images/one-preview.png";
import card_2 from "../../../../public/images/three-preview.png";
import card_3 from "../../../../public/images/two-preview.png";


const Cards = () => {
    return (
        <div className={styles.container}>
            <h1>OUR FUNDAMENTALS</h1>
            <div className={styles.card}>
                <div className={styles.cards}>
                <Image src={card_1}  />
                <h2>Vision</h2>
                <p>To be a world-class Saas Player for healthcare</p>
                </div>
                <div className={styles.cards}>
                <Image src={card_3}   />
                <h2>Mission</h2>
                <p>To meet your healthcare needs at an affordable cost</p>
                </div>
                <div className={styles.cards}>
                <Image src={card_2} />
                <h2>Values</h2>
                <p>We value your Time, Convenience and Simplicity</p>
                </div>

            </div>
        </div>
    )
}

export default Cards