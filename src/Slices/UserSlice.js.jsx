import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const getUser=createAsyncThunk("/createUser", async(arg)=>{

    let response = await axios.post('https://api.escuelajs.co/api/v1/users',arg)

    return response
})

const initialState={
currentUser:{},
cart:[],
status:'fulfilled'
}

const UserSlice=createSlice({
    name:"user",
    initialState,
    
    reducers:{
addItemCart(state,{payload}){
const check =state?.cart?.find(({id})=>id===payload.id)

let arr = [...state.cart]

    if(check){
       arr = arr.map(item=>{
        return item.id===payload.id?{...item,quantity:payload.quantity+1||item.quantity+1}:item
       })
       state.cart = arr
    
    }
    else{
        arr.push({...payload,quantity:1})
        state.cart = arr
    }


}
    },
    extraReducers:(build)=>{
        build
        .addCase(getUser.fulfilled,(state,action)=>{
            state.currentUser = action.payload
        })
    
    }
        

    
})


export default UserSlice.reducer
export const {addItemCart} = UserSlice.actions