import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const globalState = {
  datawebsiteidentity:[],
}

const rootReducer = (state = globalState, action) => {
  
  if(action.type === 'UPDATEBERANDA'){
    return{
      ... state,
      databerandawebsite:action.databerandawebsite
    } 
  }
  
  return state;

}

const storeRedux = createStore(rootReducer);

ReactDOM.render(
  <Provider store={storeRedux}>
    <App />
    </Provider>,
  document.getElementById('root')
);