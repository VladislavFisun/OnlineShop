import React from 'react';
import {Routes,Route} from 'react-router-dom'
import MainPage from '../pages/MainPage';
import SingleProduct from '../components/products/singleProduct';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/cart' />
            <Route path='/categories/$id' />
            <Route path='/products/:id' element={<SingleProduct/>} />
            <Route path='/profile' element={<SingleProduct/>} />
        </Routes>
    );
};

export default RoutesComponent;