import React from 'react';
import {Routes,Route} from 'react-router-dom'
import MainPage from '../pages/MainPage';
import SingleProduct from '../components/products/singleProduct';
import Profile from '../components/Profile/profile';
import SingleCategorie from '../components/categories/SingleCategorie';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/cart' />
            <Route path='/categories/:id' element={<SingleCategorie/>} />
            <Route path='/products/:id' element={<SingleProduct/>} />
            <Route path='/profile' element={<Profile/>} />
        </Routes>
    );
};

export default RoutesComponent;