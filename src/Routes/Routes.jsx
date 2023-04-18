import React from 'react';
import {Routes,Route} from 'react-router-dom'
import MainPage from '../pages/MainPage';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/cart' />
            <Route path='/categories/$id' />
            <Route path='/products/:id' />
        </Routes>
    );
};

export default RoutesComponent;