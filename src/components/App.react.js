import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populateProducts } from '../actions/productsActions';
import CategoriesList from './CategoriesList.react';
import ProductList from './ProductList.react';


function App() {
  const productCatalog = useSelector(state=>state.products.productsGrouped)
  const selectedCategory = useSelector(state=>state.app)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(populateProducts())
  },[dispatch])
  
  return (
    <div>
      {selectedCategory?<ProductList selectedCategory={selectedCategory}/>:<CategoriesList data ={productCatalog} /> }
    </div>
  )
}

export default App;
