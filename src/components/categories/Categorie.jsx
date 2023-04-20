import React, { useEffect } from 'react';
import styles from '../../styles/Category.module.css'
import { useSelector } from 'react-redux';
const Categorie = ({data,isLoading,isError}) => {
const defaultParams={
    title:'',
    price_min:0,
    price_max:0,
    categoryid:''
}
const [params,setParams] = React.useState(defaultParams)
const [filteredList,setFilteredList] = React.useState([])
    const {list} = useSelector(state=>state.products)
  
   
useEffect(()=>{
if(data){
    setFilteredList(list.filter(item=>item.category.id===data.id))
}
},[data])

console.log(filteredList)

    return (
        <section className={styles.wrapper}>
        {/* <h2 className={styles.title}>{cat?.name}</h2>
  
        <form className={styles.filters} onSubmit={handleSubmit}>
          <div className={styles.filter}>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="Product name"
              value={values.title}
            />
          </div>
          <div className={styles.filter}>
            <input
              type="number"
              name="price_min"
              onChange={handleChange}
              placeholder="0"
              value={values.price_min}
            />
            <span>Price from</span>
          </div>
          <div className={styles.filter}>
            <input
              type="number"
              name="price_max"
              onChange={handleChange}
              placeholder="0"
              value={values.price_max}
            />
            <span>Price to</span>
          </div>
  
          <button type="submit" hidden />
        </form>
  
        {isLoading ? (
          <div className="preloader">Loading...</div>
        ) : !isSuccess || !items.length ? (
          <div className={styles.back}>
            <span>No results</span>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : (
          <Products
            title=""
            products={filteredList}
            style={{ padding: 0 }}
            amount={items.length}
          />
        )}
  
        {!isEnd && (
          <div className={styles.more}>
            <button
              onClick={() =>
                setParams({ ...params, offset: params.offset + params.limit })
              }
            >
              See more
            </button>
          </div>
        )} */}
      </section>
    );
};

export default Categorie;