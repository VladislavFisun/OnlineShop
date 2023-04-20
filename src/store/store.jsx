import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from '../Slices/CategoriesSlice'

import ProductsSlice from "../Slices/ProductsSlice";
import UserSlice from "../Slices/UserSlice";
import { apiSlice } from "../Slices/ApiSlice";
const store = configureStore({
    reducer:{
   categories:CategoriesSlice,
   products:ProductsSlice,
   user:UserSlice
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools:true
})

export default store