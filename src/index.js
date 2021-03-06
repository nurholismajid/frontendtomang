import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const globalState = {
  datawebsiteidentity:[],
  datahome:[],
  datacategory:[],
  datalayanan:[],
  datatutorial:[],
  datacategoryfaq:[],
  datafaq:[],
  datasurvei:[],
  databutton:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
}

const rootReducer = (state = globalState, action) => {
  
  if(action.type === 'UPDATEIDENTITY'){
    return{
      ... state,
      datawebsiteidentity:action.datawebsiteidentity
    } 
  }
  if(action.type === 'UPDATEHOME'){
    return{
      ... state,
      datahome:action.datahome
    } 
  }
  if(action.type === 'UPDATECATEGORY'){
    return{
      ... state,
      datacategory:action.datacategory
    } 
  }
  if(action.type === 'UPDATELAYANAN'){
    return{
      ... state,
      datalayanan:action.datalayanan
    } 
  }
  if(action.type === 'UPDATETUTORIAL'){
    return{
      ... state,
      datatutorial:action.datatutorial
    } 
  }

  if(action.type === 'UPDATECATEGORYFAQ'){
    return{
      ... state,
      datacategoryfaq:action.datacategoryfaq
    } 
  }
  
  if(action.type === 'UPDATEFAQ'){
    return{
      ... state,
      datafaq:action.datafaq
    } 
  }

  if(action.type === 'UPDATEBUTTON'){
    return{
      ... state,
      databutton:action.databutton
    } 
  }

  if(action.type === 'UPDATESURVEI'){
    return{
      ... state,
      datasurvei:action.datasurvei
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