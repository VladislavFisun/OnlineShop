
import { useEffect } from 'react';
import './App.css';
import RoutesComponent from './Routes/Routes'; 
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useDispatch,useSelector } from 'react-redux';
import {getCategories} from './Slices/CategoriesSlice'
import {getProducts} from './Slices/ProductsSlice'

function App() {
  const dispatch = useDispatch()
  const categories = useSelector(state=>state.categories)
  useEffect(()=>{
    dispatch(getProducts())
    dispatch(getCategories())
   
  },[dispatch])
 
  return (
 <div className='app'>
  <Header/>
<div className='container'>
  <Sidebar/>
  <RoutesComponent/>
</div>
<Footer/>
 </div>
 );
}

export default App;
