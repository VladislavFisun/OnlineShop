import React, { useEffect } from 'react';
import styles from '../../styles/Category.module.css'
import { useSelector } from 'react-redux';
import { TransitionGroup,CSSTransition } from 'react-transition-group';
import Products from '../products/Products';
import './Category.css'
const Categorie = ({data,isLoading,isError}) => {

    const defaultValues={
        title:'',
        price_min:0,
        price_max:1000,
    }
    

const defaultParams={
    categoryId:data?.id,
    ...defaultValues
}

const [pages,setPages] = React.useState(10)
const [values,setValues] = React.useState(defaultValues)
const [params,setParams] = React.useState(defaultParams)
const [filteredList,setFilteredList] = React.useState([])
    const {list} = useSelector(state=>state.products)
  
   
useEffect(()=>{
if(data){
    setTimeout(()=>{
        setFilteredList(list.filter(item=>item.category?.id===data.id&&item.price>values.price_min&&item.price<values.price_max*item.title.toLowerCase().includes(values.title) ))
    },1000)
}
else return 
},[data,list,values])


const handleChange=({target:value,name})=>{
    setValues({...values,[name]:value})

}

const handleSubmit=(e)=>{
e.preventDefault();
setParams({...params,...values})
}

const handleReset = ()=>{
    setValues(defaultValues)
}

console.log(filteredList)

    return (
        <section className={styles.wrapper}>
        <h2 className={styles.title}>{data?.name}</h2>
  
        <form className={styles.filters} onSubmit={handleSubmit}>
          <div className={styles.filter}>
            <input
              type="text"
              name="title"
              onChange={(e)=>{setValues({...values,title:e.target.value})}}
              placeholder="Product name"
              value={values.title}
            />
          </div>
          <div className={styles.filter}>
            <input
              type="number"
              name="price_min"
              onChange={(e)=>{setValues({...values,price_min:e.target.value})}}
              placeholder="0"
              value={values.price_min}
            />
            <span>Price from</span>
          </div>
          <div className={styles.filter}>
            <input
              type="number"
              name="price_max"
              onChange={(e)=>{setValues({...values,price_max:e.target.value})}}
              placeholder="0"
              value={values.price_max}
            />
            <span>Price to</span>
          </div>
  
          <button type="submit" hidden />
        </form>
  
        {isLoading ? (
          <div className="preloader">Loading...</div>
        ) :  !filteredList.length ? (
          <div className={styles.back}>
            <span >No results</span>
            
          </div>
        ) : (

                  <Products
                    title=""
                    products={filteredList.slice(0,pages)}
                    style={{ padding: 0 }}
                    amount={filteredList.length}
                  />
 
        )}
  
       
          <div className={styles.more}>
            <button 
            onClick={()=>{
                setPages(prev=>prev+5)
            }}
            >
            {(filteredList?.length- pages)>0?'See more':'Content is over'}
            </button>
          </div>
    
      </section>
    );
};

export default Categorie;