import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route exact path ="/"><CategoriesList data ={productCatalog} /></Route>
        <Route></Route>
      </Switch>
      
    </div>
  )
}

export default App;
