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
  const activePage = useSelector(state=>state.app.activePage)
  const data = useSelector(state=>state.products.originalData)
  const searchedTerm = useSelector(state=>state.app.searchTerm)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(populateProducts())
    dispatch(setActivePage("home"))
  },[dispatch])

  const foundItem = data && searchedTerm?data.filter(item => item.title.toLowerCase().includes(searchedTerm)):null

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
    <div>
      <NavBar/>
      {showComponents(activePage)}
    </div>

  )
  
}

export default App;
