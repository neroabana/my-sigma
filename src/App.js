
import React from 'react';
import Home from './Home';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './App.css';

let jsonData;
let base;
 
const myReducer = (state = jsonData, action) => {  
  switch (action.type){    
    case "SET_DATA_FROM_UPLOADER" :  
      state = action.data;
      base = action.data;
      return state;     
    case "SET_DATA_FROM_PATH_INPUT" :  
      state = action.data;      
      return state;      
    case "RESET_DATA_WITH_BASE" :  
      return base;        
    default: return state;
  }  
};

const store = createStore(myReducer);

const App = () => {
  return (
    <div className = "container">
      <Provider store = {store} >        
        <Home />
      </Provider>
    </div>
  );
};

export default App; 