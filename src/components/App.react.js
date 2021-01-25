import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { populateProducts } from '../actions/productsActions';
import CategoriesList from './CategoriesList.react';
import DisplayCategory from './DisplayCategory.react';

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
        <Route path="/displayCategory/:category"><DisplayCategory/></Route>
      </Switch>
      
    </div>
  )
}

export default App;
