import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { test } from '../actions/productsActions';

function App() {
  const state = useSelector(state=>state.state)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch(test())}>Increment</button>
    </div>
  )
}

export default App;
