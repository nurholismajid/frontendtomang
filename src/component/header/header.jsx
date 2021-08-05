import React, { Component } from 'react';
import {connect} from 'react-redux';
import swal from 'sweetalert';
import Api from '../../services/services';
class Header extends Component  {

  constructor(props) {
    super(props);

    this.state = {
    }
  
  }

  handleChange = (e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}

  funswal = (status,pesan,style)=>{
    swal(status,pesan, style);
} 
handleSubmit = (e) => {
    const data = {
      Subjek : this.state.subject,
      Email : this.state.email,
      Tanggal: this.state.date,
      Pesan: this.state.message
    }

    Api.post('contacts',data)
          .then(res => {
            this.funswal("Sukses","Pesan Terkirim","success");
    })   

  

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