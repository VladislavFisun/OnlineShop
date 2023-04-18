import React from 'react';
import { useSelector } from 'react-redux';
import Poster from './Poster';
import Products from './Products';
import Categories from './Categories';

const Home = () => {
  const products = useSelector(state=>state.products)  
  const categories = useSelector(state=>state.categories)  


    return (
        <>
         <Poster/>   
         <Products products={products.list} amount={5} title='Trending'/>
         <Categories products={categories.list} amount={5} title='Worth seeing' />
        </>
    );
};

export default Home;