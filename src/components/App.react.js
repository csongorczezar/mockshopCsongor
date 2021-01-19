import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populateProducts } from '../actions/productsActions';
import CategoriesList from './CategoriesList.react';

function App() {
  const dataBase = useSelector(state=>state.state)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(populateProducts())
  },[])
  
  return (
    <div>
      <CategoriesList data ={dataBase} />
    </div>
  )
}

export default App;
