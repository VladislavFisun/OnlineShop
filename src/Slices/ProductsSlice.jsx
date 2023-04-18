import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { PRODUCTS_URL } from '../utlis/constants'

export const getProducts = createAsyncThunk('/products',async(_,arg)=>{
    try {
        const {data} = await axios.get(`${PRODUCTS_URL}`)

        return  data
    } catch (error) {
        console.log(error)
        return arg.rejectWithValue(error)
    }
})

const initialState={
list:[],
filtered:[],
related:[],
status:'fulfilled'
}

const ProductsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{

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
    }
        

    
})


export default ProductsSlice.reducer
export const {} = ProductsSlice.actions