import React from 'react';

import styles from '../styles/Header.module.css'
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
import avater from '../images/avatar.jpg'
import {ReactComponent as Svg} from '../svg/search.svg'

const Header = () => {
    return (
        <div className={styles.header}>
          
            <div className={styles.logo}>
                <Link to='/'>
                    <img src={logo} alt="stuff" />
                </Link>
            </div>
            <div className={styles.info}>
                <div className={styles.user}>
                  <div className={styles.avatar} style={{backgroundImage:`url(${avater})`}}></div>
                  <div className={styles.username}>Guest</div>
                </div>
                
            </div>
            <form className={styles.form}>
                <div className={styles.icon}>
                <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
                </div>
                <div className={styles.input}>
                    <input type="search"
                     name='search'
                      placeholder='type something'
                      autoComplete='off'
                      onChange={()=>{}}
                      value=''
                      />
                </div>
               {false&&<div className={styles.box}></div>}
            </form>
            
            <div className={styles.account}>
                <Link to='/'>
               <div>
               <Svg width='20' height='20'/>
               </div>
                </Link>
                <Link to='/cart' className={styles.favourites}>
               <div>
               <Svg width='20' height='20'/>
               <span className={styles.count}>2</span>
               </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;