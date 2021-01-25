import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populateProducts } from '../actions/productsActions';
import CategoriesList from './CategoriesList.react';

function App() {
  const productCatalog = useSelector(state=>state.products.productsGrouped)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(populateProducts())
  },[dispatch])
  
  return (
    <div>
      <CategoriesList data ={productCatalog} />
    </div>
  )
}

export default App;
