import React from 'react';
import styles from '../styles/Sidebar.module.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Sidebar(){
    const {list} = useSelector(({categories})=>categories)
    return (
        <section className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>
            <nav>
                <ul className={styles.menu}>
                    {list.map(item=>{
                        return(
                            <li key={item.id}>
                       <NavLink 
                       className={({isActive})=>`${styles.link} ${isActive?styles.active:''}`}
                       to={`/categories/${item.id}`}>
                        {item.name}
                        </NavLink>
                            {/* {  item.image==='https://firebasestorage.googleapis.com/v0/b/platzi-store-forms.appspot.com/o/category.png?alt=media&token=c74fd381-6577-40eb-b792-0b1cb2b45b91'
                            ?  <img src={item.image} alt="" />
                            :
                            ' image not found'} */}
                            </li>
                        )
                    })}
                
                </ul>
            </nav>
          
          <div className={styles.footer}>
            <a href="/help" taget='_blank' className={styles.link}>
            Help          
            </a>
            <a 
            target='_blank'
            href="/terms"
            style={{textDecoration:'underline'}}
            >
                Terms & Conditions
            </a>
          </div>
        </section>
    );
};

export default Sidebar;