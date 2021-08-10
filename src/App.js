import React, { Component } from 'react';
import './App.css';
import Baseurl from './services/baseurl';
import Api from './services/services';
import Mainrouter from './Router/mainrouter';
import {connect} from 'react-redux';
import baseurl from './services/baseurl';


class App extends Component  {

  constructor(props) {
    super(props);

   
  
  }

  async componentDidMount() {

    await Api.get('/web-options')
  .then(res => {
    const dataidentity =  {
      "NameWeb" : res.data.NameWeb,
      "TagLine" : res.data.TagLine,
      "CopyRight" : res.data.CopyRight,
      "Logo" : baseurl+res.data.Logo.url
    }
    this.props.updatewebidentity(dataidentity);
  })

 Api.get('/banner-homes')
  .then(res => {
    const home = res.data;
    this.props.updatehome(home);
  })

  Api.get('/category-layanans')
        .then(res => {
          const categorys = res.data;
          this.props.updatecategory(categorys);
          
        })
   Api.get('/data-layanans')
        .then(res => {
          const layanans = res.data;
          this.props.updatelayanan(layanans);
          
        })

        Api.get('/tutorials')
        .then(res => {
          const tutorial = res.data;
          this.props.updatetutoril(tutorial);
          
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
  updatehome: (data) => dispatch({type:'UPDATEHOME',datahome:data}),
  updatecategory: (data) => dispatch({type:'UPDATECATEGORY',datacategory:data}),
  updatelayanan: (data) => dispatch({type:'UPDATELAYANAN',datalayanan:data}),
  updatetutoril: (data) => dispatch({type:'UPDATETUTORIAL',datatutorial:data}),
}
}

const mapStatetoprops=(state)=>{
  return{
    option:state.dataoption
  }
}

export default connect(mapStatetoprops,mapDipatchToprops)(App);