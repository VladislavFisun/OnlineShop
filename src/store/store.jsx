import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from '../Slices/CategoriesSlice'

import ProductsSlice from "../Slices/ProductsSlice";
import UserSlice from "../Slices/UserSlice";
const store = configureStore({
    reducer:{
   categories:CategoriesSlice,
   products:ProductsSlice,
   user:UserSlice
    },
    devTools:true
})

export default store