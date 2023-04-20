import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../utlis/constants'

export const getCategories = createAsyncThunk('/categories',async(_,arg)=>{
    try {
        const {data} = await axios.get(`https://api.escuelajs.co/api/v1/categories`)

        return  data
    } catch (error) {
        console.log(error)
        return arg.rejectWithValue(error)
    }
})



const initialState={
list:[],
status:'fulfilled',
singleCategory:null
}

const CategoriesSlice=createSlice({
    name:"categories",
    initialState,
    reducers:{
getSingleCategory:(state,{payload})=>{
    state.singleCategory =payload
}
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getCategories.pending,(state)=>{
            state.status = 'loading'
        })
        .addCase(getCategories.fulfilled,(state,action)=>{
            state.list = action.payload
            state.status='fullfilled'
        })
        .addCase(getCategories.rejected,(state)=>{
           state.status='error'
        })
    }
        

    
})


export default CategoriesSlice.reducer
export const {getSingleCategory} = CategoriesSlice.actions