import React from 'react';
import styles from '../styles/Footer.module.css'
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
import {ReactComponent as Vk} from '../svg/vk.svg'
import {ReactComponent as Github} from '../svg/github.svg'

const Footer = () => {
    return (
        <section 
        style={{
            display:'flex',
            alignItems:'center',
            justifyContent:"space-between",
            padding:'24px',
            marginTop:'20px'
        }}
        className-={styles.footer} >
                
                <div className={styles.logo}>
                <Link to='/'>
                    <img src={logo} alt="stuff" />
                </Link>
            </div>
            <div className={styles.rights}>
                Developed by <a target='_blank'
                href='https://github.com/VladislavFisun'
                >Vladislav Fisun</a>
            </div>
            <div className={styles.socials}>
               <a href="https://vk.com/id334730135">
                  <Vk/>
               </a>
               <a href="https://github.com/VladislavFisun">
                  <Github/>
               </a>
            </div>
        </section>
    );
};

export default Footer;