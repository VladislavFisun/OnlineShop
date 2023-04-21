import React, { useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Header.module.css'
import { Link ,NavLink} from 'react-router-dom';
import logo from '../images/logo.svg'
import { useState } from 'react';
import avatar from '../images/avatar.jpg'
import {ReactComponent as Svg} from '../svg/search.svg'
import { useSelector,useDispatch } from 'react-redux';
import { toggleForm,toggleFormType } from '../Slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import { uploadFilters } from '../Slices/ProductsSlice';
import {useGetProductsQuery} from '../Slices/ApiSlice'
import { useQuery } from 'react-query';
import {ReactComponent as Cart} from '../svg/cart.svg'
import {ReactComponent as Favorite} from '../svg/favorite.svg'
import '../svg/svg.css'

const Header = () => {
const navigate = useNavigate()

const [searchValue,setSearchValue] = useState('')

   const dispatch =useDispatch()

   const [value,setValue] = React.useState({
    name:'user',
    avatar:avatar
   })
    const {currentUser} = useSelector(state=>state.user)
    const {filtered} = useSelector(state=>state.products)
    const {cart} = useSelector(state=>state.user)
   

    const handleClick=()=>{
        if(!currentUser) dispatch(toggleForm(true))
        else{
            navigate(`/profile`)
        }
    }

  const getFilteredItems = async(item)=>{
    let response  = await axios.get(`https://api.escuelajs.co/api/v1/products/?title=${item}`)
    dispatch(uploadFilters(response.data))

    return response.data
  }  

  const {data,isLoading} = useQuery(['getItems',searchValue],()=>getFilteredItems(searchValue))

  console.log(data)

    React.useEffect(()=>{
        if(currentUser){
            setValue(currentUser)
        }
        else{
            setValue({
                name:'Login',
                avatar:avatar
               })
        }
    },[currentUser])

   

    

    return (
        <div className={styles.header}>
          
            <div className={styles.logo}>
                <NavLink to='/'>
                    <img src={logo} alt="stuff" />
                </NavLink>
            </div>
            <div className={styles.info}>
                <div className={styles.user}
                onClick={handleClick}
                >

                  <div className={styles.avatar} style={{backgroundImage:`url(${currentUser?currentUser?.avatar:value?.avatar})`}}></div>
                  <div className={styles.username}>{value?.name}</div>
                </div>
                
            </div>
            <form className={styles.form}>
                <div className={styles.icon}>
                <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
                </div>
                <div className={styles.input}>
                    <input type="search"
                     name='search'
                      placeholder='type something'
                      autoComplete='off'
                      onChange={(e)=>{setSearchValue(e.target.value)}}
                      value={searchValue}
                      />
                </div>
               {searchValue&&<div className={styles.box}>
                {
                isLoading?'loading'
                :!filtered.length?
                'no results'
                :
                filtered?.map(item=>{
                    return(
                    <Link 
                    onClick={()=>{setSearchValue('')}}
                    className={styles.item}
                    key={item.id}
                   
                    to={`/products/${item.id}`
                }>
                 <div className={styles.image}
                 style={{background:`url(${item.images[0]})`}}
                 />
                 <div  className={styles.title}>{item.title}</div>
                    </Link>
                    )
                })}
               
                </div>}
            </form>
            
            <div className={styles.account}>
                <Link to='/favourites'>
               <div>
               <Favorite className='header_icons'  fill='white' />
               </div>
                </Link>
                <Link to='/cart' className={styles.favourites}>
               <div className={styles.cart}>
               <Cart className='header_icons'  />
               <span className={styles.count}>{cart.length}</span>
               </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;