import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import styles from '../../styles/Cart.module.css'
import { Link } from 'react-router-dom';
import { removeItemFromCart,addItemCart,removeItemCart } from '../../Slices/UserSlice';
const Cart = () => {


const quantityChecker=(q,item)=>{
if(q>1){
    dispatch(removeItemCart(item))
}



}
const deleteChecker=(index)=>{
    if(window.confirm('are you sure you want to delete?')){
        dispatch(removeItemFromCart(index))
    }
    }

const user= useSelector(state=>state.user)
const {cart} =user
const dispatch = useDispatch()
    return (
        <selector className={styles.cart}>
            <h2 className={styles.title}>Your Cart</h2>
            {
                !cart?
                <div className={styles.empty}>Cart is empty</div>
                
                :<div className={styles.list}>
                    {cart?.map((item)=>{
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
                       <div className={styles.price}>{item.price}</div>
                       <div className={styles.quantity}>
                        <div 
                        onClick={()=>{quantityChecker(item.quantity,item)}}
                        className={styles.minus}>-</div>
                        <span>{item.quantity}</span>
                        <div 
                        onClick={()=>{dispatch(addItemCart(item))}}
                        className={styles.plus}>+</div>

                       </div>
                         <div className={styles.total}>{item.price*item.quantity}$</div>
                         <div 
                         onClick={()=>{deleteChecker(item.id)}}
                         className={styles.close}>delete</div>

                      </div>)
                    })}
                </div>
                
            }
            <div className={styles.total}>
                Total price <span>{cart?.reduce((acc,item)=>acc+(item.price*item.quantity),0)}$</span>
            </div>
        </selector>
    );
};

export default Cart;