
"use client";
import React from 'react';
import Image from 'next/image';
import dawalogo from "../../../../public/images/dawaa.png";
import partnership from "../../../../public/images/partnership.png";
import menu from "../../../../public/images/menu.png";
import styles from "./style.module.css";
import { useState } from 'react';

const NavBar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={dawalogo} />
        </div>

        <div className={styles.menu}>

          <button style={{position:"relative"}} onClick={() =>{toggleMenu()}}>
            <Image src={menu} />
          </button>
          <div className={styles.hover}>
            <ul style={{listStyle:"none", display: showMenu ? 'block' : "none" }}>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>About Us</a></li>
              <li><a href='/'>Offering</a></li>
              <li><a href='/'>Contact Us</a></li>
              <li>  <button>Join Us</button> </li>
              <li>  <button>Sign In</button>  </li>
            </ul>
          </div>

        </div>

        <div>
          <ul className={styles.unorderedlist}>
            <li className={styles.listitem}><a href='/'>Home</a></li>
            <li className={styles.listitem}><a href='/'>About Us</a></li>
            <li className={styles.listitem}><a href='/'>Offering</a></li>
            <li className={styles.listitem}><a href='/'>Contact Us</a></li>
            <li className={styles.listitem}>  <button>Join Us</button> </li>
            <li className={styles.listitem}>  <button>Sign In</button>      </li>
          </ul>
        </div>
      </div>
      <Image className={styles.partner} src={partnership} width={500} height={100} />
      <p className={styles.next}>Next Gen B2B SaaS platform for health care <br /> professionals created by IITians & IIM's</p>
      <button className={styles.join}>Join Us</button>
    </div>
  );
};

export default NavBar;
