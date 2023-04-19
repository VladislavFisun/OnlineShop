import React from 'react';

import styles from '../styles/Header.module.css'
import { Link ,NavLink} from 'react-router-dom';
import logo from '../images/logo.svg'
import avater from '../images/avatar.jpg'
import {ReactComponent as Svg} from '../svg/search.svg'
import { useSelector,useDispatch } from 'react-redux';
import { showForm } from '../Slices/UserSlice.js';

const Header = () => {
   const dispatch =useDispatch()

   
    const {currentUser} = useSelector(state=>state.user)

    const handleClick=()=>{
        if(!currentUser) dispatch(showForm(true))
        else{
          dispatch(showForm(false))
        }
    }
    return (
        <div className={styles.header}>
          
            <div className={styles.logo}>
                <NavLink to='/'>
                    <img src={logo} alt="stuff" />
                </NavLink>
            </div>
            <div className={styles.info}>
                <div className={styles.user}
                onClick={handleClick}
                >

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