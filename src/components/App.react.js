import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populateProducts } from '../actions/productsActions';
import { setActivePage } from '../actions/setActivePage';
import Cart from './Cart.react';
import CategoriesList from './CategoriesList.react';
import NavBar from './NavBar.react';
import Product from './Product.react';
import ProductList from './ProductList.react';
import ShowSearch from './ShowSearch.react';

const useStyles = makeStyles({
  mainContainer: {
      height:'100vh'
  },
  cartHide: {
      backgroundColor:'red',
      display:'none',
      width:'100%'
  },
  cartShow: {
    backgroundColor:'red',
    display:'block',
    width:'100%'
}
})


function App() {

  const classes = useStyles()
  const {activePage} = useSelector(state=>state.app)
  const {originalData} = useSelector(state=>state.products)
  const {searchTerm} = useSelector(state=>state.app)
  const dispatch = useDispatch()
  const {showCart} = useSelector(state=>state.cart)
  

  useEffect(()=>{
    dispatch(populateProducts())
    dispatch(setActivePage("home"))
  },[dispatch])

  const foundItem = originalData && searchTerm?originalData.filter(item => (item.title.toLowerCase().includes(searchTerm))
  || item.category.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm))
  :null

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
      <Grid container className={classes.mainContainer}>
        <Grid s={12} lg={showCart?10:12}  item>{showComponents(activePage)}</Grid>
        <Grid lg={2} s={12} item className={showCart?classes.cartShow:classes.cartHide}><Cart/></Grid>
      </Grid>
    </>

  )
  
}

export default App;
