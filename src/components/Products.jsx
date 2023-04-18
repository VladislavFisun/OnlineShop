import React from 'react';
import styles from '../styles/Products.module.css'
import { Link } from 'react-router-dom';

const Products = ({title,products=[],style={},amount}) => {
    const list = products.filter((_,i)=>i<amount)
    return (
        <section className={styles.products}>
           {title&& <h2>{title}</h2>}
 <div className={styles.list}>
                {list.map(({id,images,title,category:{name:cat},price})=>{
                    return(
    <Link className={styles.product} to={`/products/${id}`} key={id}>
        <div className={styles.image} style={{background:`url(${images[0]})`}}></div>
    <div className={styles.wrapper}>
     <h3 className={styles.title}>{title}</h3>
     <div className={styles.cat}>{cat}</div>
     <div className={styles.info}>
     <div className={styles.prices}>
            <div className={styles.price}>{price}$</div>
            <div className={styles.oldPrice}>{price*1.5}$</div>
     </div>
     <div className={styles.purchases}>
        {Math.floor(Math.random()*20+1)}
     </div>
     </div>

    </div>
    </Link>)})}
 </div>

        </section>
    );
};

export default Products;