import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import styles from '../../styles/Cart.module.css'
import { Link } from 'react-router-dom';
import { removeFromFavourites } from '../../Slices/UserSlice';







const Favourites = () => {


    const dispatch = useDispatch()
const user= useSelector(state=>state.user)
const {favourites} =user
    return (

        <selector className={styles.cart}>
            <h2 className={styles.title}>Your Favourites</h2>
            {
                !favourites?
                <div className={styles.empty}>Cart is empty</div>
                
                :<div className={styles.list}>
                    {favourites?.map((item)=>{
                      return (
                      <div key={item.id} className={styles.item}>
                       <div className={styles.image}
                      style={{background:`url(${item?.images[0]})`}}
                       >
                       </div>
                       <div className={styles.info}>
                       <h3 className={styles.name}><Link to={`/products/${item.id}`}>{item.title}</Link></h3>
                       <div className={styles.category}><Link to={`/categories/${item.category.id}`}>{item.category.name}</Link></div>

                       </div>
                       <div className={styles.price}>{item.price}$</div>
                    
                        
                         <div 
                         onClick={()=>{dispatch(removeFromFavourites(item))}}
                         className={styles.close}>delete</div>

                      </div>)
                    })}
                </div>
                
            }
           
        </selector>
    );
};

export default Favourites;