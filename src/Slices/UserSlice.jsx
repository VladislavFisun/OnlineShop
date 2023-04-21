import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const createUser=createAsyncThunk("/createUser", async(arg)=>{

    
    try {
        let response = await axios.post('https://api.escuelajs.co/api/v1/users',arg)
        localStorage.setItem('user',JSON.stringify(response.data))
        return response.data    
    } catch (error) {
        console.log(error)
    }
})

export const loginUser =createAsyncThunk("/loginUser",async(arg)=>{

   try {

    let {data} = await axios.post('https://api.escuelajs.co/api/v1/auth/login',arg)
    let token = await axios.get('https://api.escuelajs.co/api/v1/auth/profile',{
        headers:{
            "Authorization":`Bearer ${data.access_token}`
        }
    })
  
     localStorage.setItem('user',JSON.stringify(token.data))
     let storage = localStorage.getItem('user')
       
    return token.data
    
   } catch (error) {
    console.log(error)
   }
})

export const updateUser=createAsyncThunk('/updateUser',async (arg)=>{
    let {data} = await axios.put(`https://api.escuelajs.co/api/v1/users/${arg.id}`,arg)
localStorage.setItem('user',JSON.stringify(data))

    return data
})


const initialState={
currentUser:localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null,
favourites:[],
cart:[],
status:'fulfilled',
formType:'signup',
showForm:false
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


},
removeItemCart(state,{payload}){
    const check =state?.cart?.find(({id})=>id===payload.id)
    
    let arr = [...state.cart]
    
        if(check){
           arr = arr.map(item=>{
            return item.id===payload.id?{...item,quantity:payload.quantity-1||item.quantity+1}:item
           })
           state.cart = arr
        
        }
        else{
            arr.push({...payload,quantity:1})
            state.cart = arr
        }
    
    
    },
removeItemFromCart: (state, { payload }) => {
    state.cart = state.cart.filter(({ id }) => id !== payload);
  },
  toggleForm: (state, { payload }) => {
    state.showForm = payload;
  },
  toggleFormType: (state, { payload }) => {
    state.formType = payload;
  },
  localUserData:(state,{payload})=>{
    state.currentUser = payload
  },
  exitAccount:(state)=>{
   state.currentUser=null
   localStorage.removeItem('user')
  },

  addToFavourites:(state,{payload})=>{

let storage = localStorage.getItem('favorite')


 let check = state.favourites.find(item=>item.id===payload.id)
 if(!check){
     state.favourites = [...state.favourites,payload]
     localStorage.setItem('favorite',JSON.stringify(state.fav))
 }
 else{
    return
 }
  },
  removeFromFavourites:(state,{payload})=>{
    if(window.confirm('are you sure you want to delete?')){
        state.favourites = state.favourites.filter(item=>item.id!==payload.id)     
    }
    else{
        return
    }
  },

    },
    extraReducers:(build)=>{
        build
        .addCase(createUser.fulfilled,(state,action)=>{
            state.currentUser = action.payload
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.currentUser = action.payload
        })
        .addCase(updateUser.fulfilled,(state,{payload})=>{
            state.currentUser = payload
        })
    
    }
        

    
})


export default UserSlice.reducer
export const {addItemCart,exitAccount,removeItemFromCart,toggleForm,toggleFormType,localUserData,removeItemCart,addToFavourites,removeFromFavourites} = UserSlice.actions