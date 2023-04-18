import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from '../components/Home';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    );
};

export default RoutesComponent;