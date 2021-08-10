import React, { Component } from 'react';
import {connect} from 'react-redux';
class Header extends Component  {

  constructor(props) {
    super(props);

    this.state = {
    }
  
  }

  
  render(){  
    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars"></i>
                    </button>
                    
                </nav>
    )
  }
}

const mapStatetoprops=(state)=>{
  return{
    option:state.datawebsiteidentity
  }
}

export default connect(mapStatetoprops)(Header);