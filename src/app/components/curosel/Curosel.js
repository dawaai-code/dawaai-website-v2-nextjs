"use client"
import React from 'react';
import { useEffect } from 'react';
import { Carousel } from 'bootstrap';
import styles from "./style.module.css"
import Image from 'next/image';
import built from "../../../../public/images/built.png"
import desai from "../../../../public/images/desai.png"
import catalyst from "../../../../public/images/catalyst.png"
import jic from "../../../../public/images/jic.png"
import bi from "../../../../public/images/bi.png"
import rsn from "../../../../public/images/rsn.png"
import iimb from "../../../../public/images/iimb.png"
import iit from "../../../../public/images/iit.png"
import ideas from "../../../../public/images/ideas.png"







const Curosel = () => {
    useEffect(() => {
        // Initialize the Bootstrap Carousel on the client side
        const myCarousel = new Carousel(document.getElementById('carouselExample'));

        return () => {
            // Cleanup when the component unmounts
            myCarousel.dispose();
        };
    }, []);
    return (
        <div className={styles.container}>
            <h1>OUR INCUBATORS</h1>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className=" ms-5 ps-5 carousel-inner">
                    <div className="carousel-item active ">
                        <Image src={catalyst} alt='img' width={400} height={200} />
                        <Image className='ms-5' src={desai} alt='img' width={300} height={200} />
                        <Image className='ms-5' src={ideas} alt='img' width={300} height={200} />
                    </div>
                    <div className="carousel-item active">
                        <Image src={rsn} alt='img' width={300} height={200} />
                        <Image className='ms-5' src={bi} alt='img' width={300} height={200} />
                        <Image className='ms-5' src={jic} alt='img' width={300} height={200} />
                    </div>
                    <div className="carousel-item active">
                        <Image src={built} alt='img' width={300} height={200} />
                        <Image src={iit} alt='img' width={300} height={200} />
                        <Image src={iimb} alt='img' width={300} height={200} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Curosel