import React from 'react';
import bannerImg from '../images/banner.png'
import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Banner = () => {
  const {list} = useSelector(state=>state.categories)

  let randomCategoryId = list[ Math.floor(Math.random() * 8)]?.id

  console.log(list)

    return (
        <section className={styles.banner}>
        <div className={styles.left}>
          <p className={styles.content}>
            NEW YEAR
         <span>SALE</span>
          </p>
      <Link to={`/categories/${randomCategoryId}`}>    <button className={styles.more}>See more</button></Link>
        </div>
    
        <div
          className={styles.right}
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <p className={styles.discount}>
            save up to <span>50%</span> off
          </p>
        </div>
      </section>
    );
};


export default Banner;