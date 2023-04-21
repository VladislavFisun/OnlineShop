import React from 'react';
import {Routes,Route} from 'react-router-dom'
import MainPage from '../pages/MainPage';
import SingleProduct from '../components/products/singleProduct';
import Profile from '../components/Profile/profile';
import SingleCategorie from '../components/categories/SingleCategorie';
import Cart from '../components/Cart/Cart';
import Favourites from '../components/Favourites/Favourites';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/favourites' element={<Favourites/>}/>
            <Route path='/categories/:id' element={<SingleCategorie/>} />
            <Route path='/products/:id' element={<SingleProduct/>} />
            <Route path='/profile' element={<Profile/>} />
        </Routes>
    );
};

export default RoutesComponent;