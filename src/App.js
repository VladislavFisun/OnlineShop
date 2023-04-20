
import { useEffect } from 'react';
import './App.css';
import RoutesComponent from './Routes/Routes'; 
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useDispatch,useSelector } from 'react-redux';
import {getCategories} from './Slices/CategoriesSlice'
import {getProducts} from './Slices/ProductsSlice'
import { localUserData } from './Slices/UserSlice';
import UserForm from './components/User/userForm';

function App() {
  const dispatch = useDispatch()
  const categories = useSelector(state=>state.categories)
  const user = useSelector(state=>state.user)
  useEffect(()=>{
    dispatch(getProducts())
    dispatch(getCategories())
   
  },[])

  console.log(categories)


 
  return (
 <div className='app'>
  <Header/>
  <UserForm/>
<div className='container'>
  <Sidebar/>
  <RoutesComponent/>
</div>
<Footer/>
 </div>
 );
}

export default App;
