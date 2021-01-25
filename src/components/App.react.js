import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populateProducts } from '../actions/productsActions';
import CategoriesList from './CategoriesList.react';

function App() {
  const productCatalog = useSelector(state=>state.product)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(populateProducts())
  },[])
  
  return (
    <div>
      <CategoriesList data ={productCatalog} />
    </div>
  )
}

export default App;
