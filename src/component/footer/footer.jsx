import React, { Component } from 'react';
import {connect} from 'react-redux';
class Footer extends Component  {

  constructor(props) {
    super(props);

    this.state = {
    }
  
  }

  
  render(){  
    return(
        <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>{this.props.option.CopyRight}</span>
                    </div>
                </div>
            </footer>
    )
  }
}

const mapStatetoprops=(state)=>{
  return{
    option:state.datawebsiteidentity
  }
}

export default connect(mapStatetoprops)(Footer);