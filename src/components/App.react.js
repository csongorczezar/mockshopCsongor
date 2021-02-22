import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populateProducts } from '../actions/productsActions';
import { setActivePage } from '../actions/setActivePage';
import CategoriesList from './CategoriesList.react';
import NavBar from './NavBar.react';
import Product from './Product.react';
import ProductList from './ProductList.react';

function App() {
  const activePage = useSelector(state=>state.app.activePage)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(populateProducts())
    dispatch(setActivePage("home"))
  },[dispatch])

  const showComponents = (page) => {
    switch(page) {
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

  return (
    <div>
      <NavBar/>
      {showComponents(activePage)}
    </div>

  )
  
        
     
}

export default App;
