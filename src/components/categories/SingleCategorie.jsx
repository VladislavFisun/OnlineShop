import React, { useEffect } from 'react';
import Categorie from './Categorie'
import Poster from '../Poster';
import { getSingleCategory } from '../../Slices/CategoriesSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
const SingleCategorie = () => {
const dispatch = useDispatch()
const {id} =useParams()

const getCategorie=async (id)=>{
    let response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}`)

    return response.data
} 

const {data,isLoading,isError} = useQuery(['/categorie',id],()=>getCategorie(id))

useEffect(()=>{
dispatch(getSingleCategory(data))
},[data,dispatch])


    return (
<div>
<Poster/>
<Categorie data={data} isLoading={isLoading} isError={isError}/>
</div>
    );
};

export default SingleCategorie;