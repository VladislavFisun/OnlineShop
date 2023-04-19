import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { PRODUCTS_URL,SINGLE_PRODUCT_URL } from '../utlis/constants'
import { suffle } from '../utlis/common'
export const getProducts = createAsyncThunk('/products',async(_,arg)=>{
    try {
        const {data} = await axios.get(`${PRODUCTS_URL}`)

        return  data
    } catch (error) {
        console.log(error)
        return arg.rejectWithValue(error)
    }
})

export const getOneProduct = createAsyncThunk('/singleProduct',async(arg)=>{

    const {data} = await axios.get(`https://api.escuelajs.co/api/v1/products/${arg}`)

    return data
})

const initialState={
list:[],
filtered:[],
related:[],
oneProduct:{},
status:'fulfilled'
}

const ProductsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
       filteredByPrice:(state,action)=>{
        state.filtered = state.list.filter(item=>item.price<action.payload)
       },
       getRelatedProducts:(state,{payload})=>{
       const list= state.list.filter(({price})=>price<payload?.price)
       state.related = suffle(list)
        
       }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.list = action.payload
            state.status='fullfilled'
        })
        .addCase(getProducts.rejected,(state)=>{
           state.status='error'
        })
        .addCase(getOneProduct.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(getOneProduct.fulfilled,(state,action)=>{
            state.oneProduct = action.payload
            state.status='fullfilled'
        })
        .addCase(getOneProduct.rejected,(state)=>{
           state.status='error'
        })
    }
        

    
})


export default ProductsSlice.reducer
export const {filteredByPrice,getRelatedProducts} = ProductsSlice.actions