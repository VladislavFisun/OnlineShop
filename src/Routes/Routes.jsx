import React from 'react';
import {Routes,Route} from 'react-router-dom'
import MainPage from '../pages/MainPage';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
        </Routes>
    );
};

export default RoutesComponent;