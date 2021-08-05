import React, { Component } from 'react';
import './App.css';
import Baseurl from './services/baseurl';
import Api from './services/services';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Sidebar from './component/sidebar/sidebar';
import Mainrouter from './Router/mainrouter';
import {connect} from 'react-redux';


class App extends Component  {

  constructor(props) {
    super(props);

   
  
  }

  async componentDidMount() {

    await Api.get('website-identity')
  .then(res => {
    const identity = res.data;
    const dataidentity =  {
    
      
    }
    console.log(dataidentity);
    this.props.updatewebidentity(dataidentity);
  })
 
}



  render(){

  return (
    <div>
      <Mainrouter />
    </div>
  );

}
}

const mapDipatchToprops = (dispatch) =>{
return{
  updatewebidentity: (data) => dispatch({type:'UPDATEIDENTITY',datawebsiteidentity:data}),
}
}

const mapStatetoprops=(state)=>{
  return{
    option:state.dataoption
  }
}

export default connect(mapStatetoprops,mapDipatchToprops)(App);