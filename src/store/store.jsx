import { configureStore } from "@reduxjs/toolkit";
import CategoriesSlice from '../Slices/CategoriesSlice'
const store = configureStore({
    reducer:{
   categories:CategoriesSlice
    },
    devTools:true
})

export default store