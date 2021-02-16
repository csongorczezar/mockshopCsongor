import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populateProducts } from '../actions/productsActions';
import { setActivePage } from '../actions/setActivePage';
import CategoriesList from './CategoriesList.react';
import Product from './Product.react';
import ProductList from './ProductList.react';

function App() {
  const activePage = useSelector(state=>state.app.activePage)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(populateProducts())
    dispatch(setActivePage("home"))
  },[dispatch])
  
        switch(activePage) {
          case "home":
            return <CategoriesList/>
          case "category":
            return <ProductList/>
          case "product":
            return <Product/>
          default:
            return <CategoriesList/>
        }
     
}

export default App;
