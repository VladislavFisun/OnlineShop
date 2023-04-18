import React from 'react';
import { useSelector } from 'react-redux';
import Poster from './Poster';
import Products from './Products';

const Home = () => {
  const {list} = useSelector(state=>state.products)  
  console.log(list)
    return (
        <>
         <Poster/>   
         <Products products={list} amount={5} title='Trending'/>
        </>
    );
};

export default Home;