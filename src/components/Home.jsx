import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {filteredByPrice} from '../Slices/ProductsSlice'
import Poster from './Poster';
import Products from './products/Products';
import Categories from './Categories';
import Banner from './Banner';

const Home = () => {
  const products = useSelector(state=>state.products)  
  const categories = useSelector(state=>state.categories)  
  const dispatch = useDispatch()
  useEffect(()=>{
   if (products.list.length){
     dispatch(filteredByPrice(100))
   } 
    return
  },[dispatch,products.list.length])

    return (
        <>
         <Poster/>   
         <Products products={products.list} amount={5} title='Trending'/>
         <Categories products={categories.list} amount={5} title='Worth seeing' />
         <Banner/>
         <Products products={products.filtered} amount={5} title='Less then 100$'/>
        </>
    );
};

export default Home;