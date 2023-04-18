import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from '../Slices/CategoriesSlice'
import ProductsSlice from "../Slices/ProductsSlice";
const store = configureStore({
    reducer:{
   categories:CategoriesSlice,
   products:ProductsSlice
    },
    devTools:true
})

export default store