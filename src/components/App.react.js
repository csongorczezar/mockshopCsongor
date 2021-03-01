import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populateProducts } from '../actions/productsActions';
import { setActivePage } from '../actions/setActivePage';
import CategoriesList from './CategoriesList.react';
import NavBar from './NavBar.react';
import Product from './Product.react';
import ProductList from './ProductList.react';
import ShowSearch from './ShowSearch.react';

function App() {
  const {activePage} = useSelector(state=>state.app)
  const {originalData} = useSelector(state=>state.products)
  const {searchTerm} = useSelector(state=>state.app)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(populateProducts())
    dispatch(setActivePage("home"))
  },[dispatch])

  const foundItem = originalData && searchTerm?originalData.filter(item => item.title.toLowerCase().includes(searchTerm)):null

  const showComponents = (page) => {
    switch(page) {
      case "home":
        return <CategoriesList/>
      case "category":
        return <ProductList/>
      case "product":
        return <Product/>
      case "search":
        return <ShowSearch searchedProducts={foundItem} />
      default:
        return <CategoriesList/>
    }
  }

  return (
    <>
      <NavBar/>
      {showComponents(activePage)}
    </>

  )
  
}

export default App;
