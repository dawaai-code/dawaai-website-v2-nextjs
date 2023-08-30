import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import laptop from "../../../../public/images/laptop.png";
import mobile from "../../../../public/images/mobile.png";
import tree from "../../../../public/images/tree.png"
import saleserp from "../../../../public/images/saleserp.png";
import sales from "../../../../public/images/sales.png";
import basket from "../../../../public/images/basket.png";
import billing from "../../../../public/images/Billing.png";
import inventary from "../../../../public/images/invetary.png";








const Offering = () => {
    return (
        <div className={styles.container}>
            <h1>OFFERINGS</h1>

            <div className={styles.card}>

                <div className={styles.cards}>
                    <Image src={laptop} />
                    <h4>Web Application</h4>
                </div>
                <div className={styles.cards}>
                    <Image src={mobile} />
                    <h4>Mobile Applications</h4>
                </div>
            </div>
            <Image className={styles.tree} src={tree}  />

            <div className={styles.module}>
                <div className={styles.modulecard}>
                    <Image src={saleserp} />
                    <p>Sales Module</p>
                </div>
                <div className={styles.modulecard}>
                    <Image src={sales} />
                    <p>Sales return Module</p>
                </div>
                <div className={styles.modulecard}>
                    <Image src={basket} />
                    <p>Procurement Module</p>
                </div>
                <div className={styles.modulecard}>
                    <Image src={billing} />
                    <p>Billing Module</p>
                </div>
                <div className={styles.modulecard}>
                    <Image src={inventary} />
                    <p>Inventary Module</p>
                </div>
            </div>
        </div>

    )
}

export default Offering