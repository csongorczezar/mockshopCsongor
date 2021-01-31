import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../actions/AppActions/setCategoryAction';

function ProductList() {
    const productList = useSelector(state=>state.display)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setCategory())
    },[dispatch])
    

    return (
        <h1>{productList}</h1>
    )
}

export default ProductList