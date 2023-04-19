import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getOneProduct, getRelatedProducts } from '../../Slices/ProductsSlice';
import styles from '../../styles/Product.module.css'
import { useParams,useNavigate } from 'react-router-dom';
import Products from './Products';
import Product from './Product';

const SingleProduct = () => {
    const dispatch = useDispatch()
const {id} = useParams()
const navigate =useNavigate()
const products = useSelector(state=>state.products)
useEffect(()=>{
    if(id){
 dispatch(getOneProduct(id))
    }
    else{
        navigate('/')
    }
},[dispatch])

useEffect(()=>{
dispatch(getRelatedProducts(products.oneProduct))

},[dispatch,products.list.length])

 return (
    <>
          <Product product={products.oneProduct} amount={5} Title='"Related products'/>
          <Products products={products.related} amount={5} title='Trending'/>
    </>
 )
    
   
    
};

export default SingleProduct;