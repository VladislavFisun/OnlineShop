import React, { useEffect } from 'react';
import styles from '../../styles/Product.module.css'
import { useDispatch,useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { addItemCart } from '../../Slices/UserSlice';
import { addToFavourites,removeFromFavourites } from '../../Slices/UserSlice';

const Product = (props) => {
    const SIZES=[4,4.5,5]
    const {cart,favourites} = useSelector(({user})=>user)
    const { title,product,amount} = props;
    const {images,price,description,id} = product
    const dispatch = useDispatch()
    const [img,setImg] = React.useState()    
    const [sizes,setSizes] = React.useState()
useEffect(()=>{
    if(images?.length){
        setImg(images[0])
    }
},[images])

const addToCart=()=>{
    dispatch(addItemCart(product))
}

let checkCart = cart.find(item=>item.id===id)
let checkFavourites = favourites.find(item=>item.id===id)

    return (
        <section className={styles.product}>
   
        <div className={styles.images}>
          <div
            className={styles.current}
            style={{ backgroundImage: `url(${img})` }}
          />
          <div className={styles["images-list"]}>
            {images?.map((image, i) => (
              <div
               
                key={i}
                className={styles.image}
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => {setImg(image)}}
              />
            ))}
          </div>
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.price}>{price}$</div>
          <div className={styles.color}>
            <span>Color:</span> Green
          </div>
          <div className={styles.sizes}>
            <span>Sizes:</span>
  
            {SIZES.map((size) => (
              <div
                 
                className={`${styles.size} ${sizes===size?styles.active:''}`} 
                  onClick={()=>{setSizes(size)}}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
  
          <p className={styles.description}>{description}</p>
  
          <div className={styles.actions}>
            <button
            disabled={!sizes||checkCart}
              onClick={addToCart}
              className={styles.add}
             
            >
           {checkCart?'Already in your cart':'Add to card'}
            </button>
            <button 
           
            onClick={()=>{dispatch(addToFavourites(product))}}
            className={styles.favourite}>  {checkFavourites?<Link to='/favourites'>Already in your favorites</Link>:'Add to favourites'}</button>
          </div>
  
          <div className={styles.bottom}>
            <div className={styles.purchase}></div>
  
            <Link to='/'>Return to store</Link>
          </div>
        </div>
      </section>
    );
};

export default Product;